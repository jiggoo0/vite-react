// src/ThemeProvider/ThemeProvider.tsx
"use client";

import { ReactNode, useState, useEffect, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeMode } from "./types";

/** 🧩 Props ของ ThemeProvider */
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
      return stored ?? defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  /** 📌 ฟังก์ชันเปลี่ยน theme + sync ไปยัง DOM + localStorage */
  const applyTheme = useCallback((newTheme: ThemeMode) => {
    const root = document.documentElement;

    // ลบทุก theme class ก่อน แล้วค่อย add ใหม่
    root.classList.remove("light", "dark", "team");
    root.classList.add(newTheme);

    try {
      localStorage.setItem("app-theme", newTheme);
    } catch (err) {
      console.warn("⚠️ Failed to save theme to localStorage:", err);
    }
  }, []);

  /** 📌 Sync เมื่อ theme state เปลี่ยน */
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