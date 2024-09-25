import { create } from 'zustand';
import { CartCourse } from '@/types/courses/cartCourse';

interface CourseStore {
  selectedCourses: CartCourse[];
  courseIndexMap: Map<number, number>; // Map to store CourseID and its index in selectedCourses
  addCourse: (course: CartCourse) => void;
  removeCourse: (courseID: number) => void;
  findCourse: (courseID: number) => number;
}

export const useCourseStore = create<CourseStore>((set) => ({
  selectedCourses: [],
  courseIndexMap: new Map(),

  addCourse: (course: CartCourse) => set((state) => {
    const { CourseID } = course;
    const courseIndex = state.courseIndexMap.get(CourseID);

    // If the course exists, update the course at the existing index
    if (courseIndex !== undefined) {
      const updatedCourses = [...state.selectedCourses];
      updatedCourses[courseIndex] = course;

      return {
        selectedCourses: updatedCourses,
        courseIndexMap: state.courseIndexMap,
      };
    }

    // Add the new course to the array and update the map
    const updatedCourses = [...state.selectedCourses, course];
    const updatedMap = new Map(state.courseIndexMap);
    updatedMap.set(CourseID, updatedCourses.length - 1); // Set the new index for the course

    return {
      selectedCourses: updatedCourses,
      courseIndexMap: updatedMap,
    };
  }),

  removeCourse: (courseID: number) => set((state) => {
    const courseIndex = state.courseIndexMap.get(courseID);

    // If the course doesn't exist, return the current state
    if (courseIndex === undefined) return state;

    const updatedCourses = state.selectedCourses.filter(
      (c: CartCourse) => c.CourseID !== courseID
    );

    // Update the map to remove the deleted course and adjust indices
    const updatedMap = new Map<number, number>();
    updatedCourses.forEach((course, index) => {
      updatedMap.set(course.CourseID, index);
    });

    return {
      selectedCourses: updatedCourses,
      courseIndexMap: updatedMap,
    };
  }),

  findCourse: (courseID: number):any => {
    // Use the map to find the index directly
    const courseIndex = useCourseStore.getState().courseIndexMap.get(courseID);
    return courseIndex !== undefined ? courseIndex : -1; // Return -1 if not found
  },
}));
