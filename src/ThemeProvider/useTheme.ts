// src/ThemeProvider/useTheme.ts
"use client";

import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

/**
 * 🔹 useTheme Hook
 *
 * - เข้าถึง theme และ setTheme จาก ThemeProvider
 * - ใช้ใน component tree ที่อยู่ภายใน ThemeProvider เท่านั้น
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
