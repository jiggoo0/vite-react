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
  const [theme, setTheme] = useState<ThemeMode>(() => {
    // 🔹 โหลด theme จาก localStorage ถ้ามี
    if (typeof window !== "undefined") {
      return (localStorage.getItem("app-theme") as ThemeMode) || defaultTheme;
    }
    return defaultTheme;
  });

  /** 📌 Sync theme กับ DOM และ localStorage */
  useEffect(() => {
    const root = document.documentElement;
    const oppositeTheme = theme === "light" ? "dark" : "light";

    root.classList.remove(oppositeTheme);
    root.classList.add(theme);

    try {
      localStorage.setItem("app-theme", theme);
    } catch (err) {
      console.warn("⚠️ Failed to save theme to localStorage:", err);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
