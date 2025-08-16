import { createContext } from 'react';

/** 🎨 Theme Options */
export type Theme = 'light' | 'dark' | 'business' | 'team';

/** 🧩 Theme Context Type */
export interface ThemeContextType {
  /** Current active theme */
  theme: Theme;
  /** Function to update the theme */
  setTheme: (theme: Theme) => void;
}

/** 🌐 Theme Context */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
