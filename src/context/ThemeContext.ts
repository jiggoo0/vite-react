import { createContext } from "react";

/** 🎨 Theme Options */
export type Theme = "light" | "dark" | "business";

/** 🧩 Theme Context Type */
export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/** 🌐 Theme Context */
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
