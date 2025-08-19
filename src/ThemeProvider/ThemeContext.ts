// src/ThemeProvider/ThemeContext.ts
import { createContext, Dispatch, SetStateAction } from "react";
import { ThemeMode } from "./types";

/** 🖌️ Type for the ThemeContext */
export interface ThemeContextType {
  theme: ThemeMode;
  setTheme: Dispatch<SetStateAction<ThemeMode>>;
}

/** 🌐 ThemeContext with default values */
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light", // 🔹 ค่าเริ่มต้น ต้อง match กับ ThemeMode
  setTheme: () => {}, // noop
});
