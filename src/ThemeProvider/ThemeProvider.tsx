// src/ThemeProvider/ThemeProvider.tsx
"use client";

import { ReactNode, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeMode } from "./types";

/** 🧩 Props สำหรับ ThemeProvider */
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

/** 🎨 ThemeProvider Component */
export const ThemeProvider = ({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>(defaultTheme);

  /** 📌 Sync theme กับ DOM และ localStorage */
  useEffect(() => {
    const oppositeTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(oppositeTheme);
    document.documentElement.classList.add(theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
