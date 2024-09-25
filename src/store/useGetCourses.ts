import { create } from "zustand";
import { fetchCourses } from "@/api/fetchCourses";
import {Course} from "@/types/courses/course";

interface State {
  loading: boolean;
  success: boolean;
  error: boolean;
  data: Course[] | null;
  errorData: string | null;
  execute: (location: string) => Promise<void>;
}

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
};

export const useGetCourses = create<State>((set, get) => ({
  ...initialState,

  execute: async (location : string) => {
    set({ ...initialState, loading: true });
    try {
      const res = await fetchCourses(location);
      set({ 
        ...initialState, 
        success: true, 
        data: res?.DataModel || [] // Ensure DataModel is an array
      });
    } catch (err: unknown) {
      console.error("Error in data fetch:", err);
      if (err instanceof Error) {
        set({
          ...initialState,
          error: true,
          errorData: err.message,
        });
      } else {
        set({
          ...initialState,
          error: true,
          errorData: "An unknown error occurred",
        });
      }
    }
  },
}));
