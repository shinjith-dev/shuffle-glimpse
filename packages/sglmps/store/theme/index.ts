import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useTheme = create<ThemeStore>()(
  devtools(
    immer((set, get) => ({
      sidebarColor: null,
      changeSidebarColor: (color) => set(() => ({ sidebarColor: color })),
    })),
    { name: "app-theme" },
  ),
);
