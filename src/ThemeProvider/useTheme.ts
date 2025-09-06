// src/ThemeProvider/useTheme.ts
"use client";

import { useContext, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeContextType } from "./ThemeContext";

/**
 * 🎨 useTheme Hook
 *
 * - ดึงค่า theme และ setTheme จาก ThemeContext
 * - ใช้งานง่ายในทุก Component
 */
export const useTheme = (): ThemeContextType & { toggleTheme: () => void } => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("[useTheme] Hook must be used within <ThemeProvider>");
  }

  const { theme, setTheme } = context;

  /** 🔹 Toggle theme แบบ cycle: light → dark → business → system → light */
  const toggleTheme = useCallback(() => {
    const nextTheme = (current: typeof theme) => {
      switch (current) {
        case "light":
          return "dark";
        case "dark":
          return "business";
        case "business":
          return "system";
        default:
          return "light";
      }
    };
    setTheme(nextTheme(theme));
  }, [theme, setTheme]);

  return { ...context, toggleTheme };
};
