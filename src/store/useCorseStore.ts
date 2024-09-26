import { create } from 'zustand';
import { CartCourse } from '@/types/courses/cartCourse';

interface CourseStore {
  selectedCourses: CartCourse[];
  selectedCoursesIndex: number[][];
  addCourse: (course: CartCourse) => void;
  removeCourse: (courseID: number) => void;
  setSelectedCoursesIndex: (courseKey : number, index : number, value : number) => void;
  resetSelectedCourses: () => Promise<void>;
}

export const useCourseStore = create<CourseStore>((set) => ({
  selectedCourses: [],
  selectedCoursesIndex: [],

  addCourse: (course: CartCourse) => set((state) => {
    const { CourseID } = course;
    const updatedCourses = state.selectedCourses.filter(
      (c: CartCourse) => c.CourseID !== CourseID
    );
    updatedCourses.push(course);
    return {
      selectedCourses: updatedCourses,
    };
  }),
  

  removeCourse: (courseID: number) => set((state) => {
    const updatedCourses = state.selectedCourses.filter(
      (c: CartCourse) => c.CourseID !== courseID
    );
    return {
      selectedCourses: updatedCourses,
    };
  }),

  setSelectedCoursesIndex: (courseKey: number, index: number, value: number) => {
    set((state) => {
      const updatedSelectedCoursesIndex = [...state.selectedCoursesIndex];
      updatedSelectedCoursesIndex[courseKey] = [];
      updatedSelectedCoursesIndex[courseKey][index] = value;
      return {
        selectedCoursesIndex: updatedSelectedCoursesIndex,
      };
    });
  },
  resetSelectedCourses: () => {
    return new Promise<void>((resolve) => {
      set({ selectedCourses: [], selectedCoursesIndex: [] });
      resolve(); 
    });
  },
}));
