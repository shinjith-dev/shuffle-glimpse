import { StateCreator } from "zustand";

export interface ThemeStore {
  mode: "dark" | "light";
  toggle: () => void;
}

export const themeStore: StateCreator<ThemeStore> = (set) => ({
  mode: "dark",
  toggle: () =>
    set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" })),
});
