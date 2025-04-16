import { StateCreator } from "zustand";

export interface AuthStore {
  mode: "dark" | "light";
  toggle: () => void;
}

export const themeStore: StateCreator<AuthStore> = (set) => ({
  mode: "dark",
  toggle: () =>
    set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" })),
});
