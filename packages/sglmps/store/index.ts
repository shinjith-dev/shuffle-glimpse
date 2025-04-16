import { create } from "zustand";
import { ThemeStore, themeStore } from "./theme";

const useStore = create<ThemeStore>((...args) => ({
  ...themeStore(...args),
}));

export default useStore;
