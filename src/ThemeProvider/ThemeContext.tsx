// src/ThemeProvider/ThemeContext.tsx
import { createContext, useContext } from "react";
import type { ThemeMode } from "./types";

/** 🔹 Type ของ ThemeContext */
export interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

/** 🔹 สร้าง ThemeContext */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** 🔹 Hook สำหรับเรียกใช้ ThemeContext */
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
