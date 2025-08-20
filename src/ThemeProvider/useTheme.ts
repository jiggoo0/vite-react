// src/ThemeProvider/useTheme.ts
"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeContextType } from "./ThemeContext";

/**
 * 🪄 useTheme Hook
 * - ใช้สำหรับเข้าถึง `theme` และ `setTheme`
 * - ต้องใช้ภายใน <ThemeProvider> เท่านั้น
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("[useTheme] must be used within <ThemeProvider>");
  }

  return context;
};