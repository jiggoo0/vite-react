// src/context/ThemeProvider.tsx

import { useEffect, useState, type ReactNode } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

const isValidTheme = (value: unknown): value is Theme =>
  value === "light" || value === "dark" || value === "business";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getDefaultTheme = (): Theme => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (isValidTheme(saved)) return saved;
      return getDefaultTheme();
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
