import {create} from 'zustand';
import { CartCourse } from '@/types/courses/cartCourse';

interface CourseStore {
  selectedCourses: CartCourse[];
  addCourse: (course: CartCourse) => void;
  removeCourse: (courseID: number) => void;
}

export const useCourseStore = create<CourseStore>((set) => ({
  selectedCourses: [],
  addCourse: (course: CartCourse) => set((state) => {
    const exists = state.selectedCourses.some((c: CartCourse) => c.CourseID === course.CourseID);
    if (exists) {
      return {
        selectedCourses: state.selectedCourses.map((c: CartCourse) => 
          c.CourseID === course.CourseID ? course : c
        ),
      };
    }
    return {
      selectedCourses: [...state.selectedCourses, course],
    };
  }),
  removeCourse: (courseID: number) => set((state) => ({
    selectedCourses: state.selectedCourses.filter((c: CartCourse) => c.CourseID !== courseID),
  })),
}));
