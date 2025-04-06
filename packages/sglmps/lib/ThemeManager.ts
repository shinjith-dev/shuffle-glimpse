import { Appearance } from "react-native";
import { Storage } from "./Storage";

const THEME_KEY = "app-theme";

let currentTheme: "light" | "dark" = "light";
let subscribers: ((theme: "light" | "dark") => void)[] = [];

const isWeb = typeof window !== "undefined";

const getSystemTheme = (): "light" | "dark" => {
  if (isWeb) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } else {
    return Appearance.getColorScheme() === "dark" ? "dark" : "light";
  }
};

export const ThemeManager = {
  async init() {
    const saved = await Storage.getStorage(THEME_KEY);
    if (saved === "light" || saved === "dark") {
      currentTheme = saved;
    } else {
      currentTheme = getSystemTheme();
      await Storage.setStorage(THEME_KEY, currentTheme);
    }
    subscribers.forEach((fn) => fn(currentTheme));
  },

  getTheme() {
    return currentTheme;
  },

  async setTheme(theme: "light" | "dark") {
    currentTheme = theme;
    await Storage.setStorage(THEME_KEY, theme);
    subscribers.forEach((fn) => fn(currentTheme));
  },

  toggleTheme() {
    const next = currentTheme === "light" ? "dark" : "light";
    this.setTheme(next);
  },

  subscribe(fn: (theme: "light" | "dark") => void) {
    subscribers.push(fn);
    fn(currentTheme);
    return () => {
      subscribers = subscribers.filter((f) => f !== fn);
    };
  },
};
