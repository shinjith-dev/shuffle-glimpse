import { StateCreator } from "zustand";

export interface ThemeSlice {
  mode: "dark" | "light";
  toggle: () => void;
}

export const themeSlice: StateCreator<ThemeSlice> = (set) => ({
  mode: "dark",
  toggle: () =>
    set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" })),
});
