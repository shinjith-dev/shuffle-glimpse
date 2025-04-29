interface ThemeStore {
  sidebarColor: string | null;
  changeSidebarColor: (color: string | null) => void;
}
