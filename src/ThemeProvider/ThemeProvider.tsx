// src/ThemeProvider/ThemeProvider.tsx
"use client";

import { ReactNode, useState, useEffect, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeMode } from "./types";

/** 🧩 Props สำหรับ ThemeProvider */
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

/** 🎨 ThemeProvider Component */
const ThemeProvider = ({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return defaultTheme;

    try {
      const stored = localStorage.getItem("app-theme") as ThemeMode | null;
      return stored || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  /** 📌 ฟังก์ชัน apply theme ไปยัง DOM และ localStorage */
  const applyTheme = useCallback((newTheme: ThemeMode) => {
    const root = document.documentElement;
    const oppositeTheme: ThemeMode = newTheme === "light" ? "dark" : "light";

    root.classList.remove(oppositeTheme);
    root.classList.add(newTheme);

    try {
      localStorage.setItem("app-theme", newTheme);
    } catch (err) {
      console.warn("⚠️ Failed to save theme to localStorage:", err);
    }
  }, []);

  /** 📌 Sync theme ทุกครั้งที่เปลี่ยน state */
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
