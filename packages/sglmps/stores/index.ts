import { create } from "zustand";
import { ThemeSlice, themeSlice } from "./themeSlice";

const useStore = create<ThemeSlice>((...args) => ({
  ...themeSlice(...args),
}));

export default useStore;
