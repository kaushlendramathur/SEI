import { create } from "zustand";
import { fetchCourses } from "@/api/fetchCourses";// Import another API
import { Course } from "@/types/courses/course";

interface CourseState {
  loading: boolean[];
  success: boolean[];
  error: boolean[];
  data: Course[][]; // 2D array for multiple course sets
  errorData: string[] | null[]; // Array for error messages
  execute: (locations: string[]) => Promise<void>; // Take an array of locations
}

const initialState = {
  loading: [],
  success: [],
  error: [],
  data: [],
  errorData: [],
};

export const useGetCourses = create<CourseState>((set) => ({
  ...initialState,

  execute: async (locations: string[]) => {
    const newLoading = Array(locations.length).fill(true);
    set({ loading: newLoading });

    try {
      const newData: Course[][] = [];
      const newSuccess: boolean[] = [];
      const newError: boolean[] = [];
      const newErrorData: string[] | null[] = [];

      for (const [index, location] of locations.entries()) {
        let res;
        // Fetch from the appropriate API based on the index
        if (index === 0) {
          res = await fetchCourses(location);
        } else if (index === 1) {
          res = await fetchCourses(location);
        }

        // Push the result to the respective arrays
        newData[index] = res?.DataModel || [];
        newSuccess[index] = true;
        newError[index] = false;
        newErrorData[index] = null;
      }

      set({
        loading: newLoading.map(() => false),
        success: newSuccess,
        data: newData,
        error: newError,
        errorData: newErrorData,
      });
    } catch (err: unknown) {
      console.error("Error in fetching courses:", err);
      const newError = Array(locations.length).fill(true);
      const newErrorData: string[] | null = Array(locations.length).fill(null);

      if (err instanceof Error) {
        newErrorData.fill(err.message); // Fill error messages for all locations
      } else {
        newErrorData.fill("An unknown error occurred");
      }

      set({ loading: newLoading.map(() => false), error: newError, errorData: newErrorData });
    }
  },
}));
