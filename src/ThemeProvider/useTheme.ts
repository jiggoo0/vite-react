// src/ThemeProvider/useTheme.ts
"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeContextType } from "./ThemeContext";

/**
 * 🎨 useTheme Hook
 *
 * - ดึงค่า theme และ setTheme จาก ThemeContext
 * - ใช้งานง่ายในทุก Component
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("[useTheme] Hook must be used within <ThemeProvider>");
  }

  return context;
};