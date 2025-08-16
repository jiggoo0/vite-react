// src/ThemeProvider/useTheme.ts
"use client";

import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

/** 🔹 useTheme Hook */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
