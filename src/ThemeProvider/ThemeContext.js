// src/ThemeProvider/ThemeContext.ts
import { createContext } from "react";
/**
 * 🌐 ThemeContext
 * ⚠️ Default value เป็น placeholder เท่านั้น
 * ต้องถูก override โดย <ThemeProvider>
 */
export const ThemeContext = createContext(undefined);
