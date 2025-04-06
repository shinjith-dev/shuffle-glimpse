import { useEffect, useState } from "react";
import { ThemeManager } from "../lib";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(ThemeManager.getTheme());

  useEffect(() => {
    const unsub = ThemeManager.subscribe(setTheme);
    return () => unsub();
  }, []);

  return {
    theme,
    setTheme: ThemeManager.setTheme,
    toggleTheme: ThemeManager.toggleTheme.bind(ThemeManager),
  };
}
