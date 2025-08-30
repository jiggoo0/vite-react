// src/ThemeProvider/ThemeContext.ts
import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ThemeMode } from "./types";

/** 🖌️ Type สำหรับ ThemeContext */
export interface ThemeContextType {
  theme: ThemeMode;
  setTheme: Dispatch<SetStateAction<ThemeMode>>;
}

/**
 * 🌐 ThemeContext
 * ⚠️ Default value เป็น placeholder เท่านั้น
 * ต้องถูก override โดย <ThemeProvider>
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);