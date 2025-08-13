import { useState, useEffect, useCallback } from "react";

const THEME_KEY = "theme";
type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = useCallback((nextTheme: Theme) => {
    setTheme(nextTheme);

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      document.documentElement.setAttribute("data-theme", nextTheme);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_KEY, nextTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const defaultTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : prefersDark
          ? "dark"
          : "light";

    applyTheme(defaultTheme);
  }, [applyTheme]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (
        e.key === THEME_KEY &&
        (e.newValue === "light" || e.newValue === "dark")
      ) {
        applyTheme(e.newValue);
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [applyTheme]);

  const toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}
