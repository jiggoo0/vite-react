// src/ThemeProvider/ThemeContext.ts
import { createContext, Dispatch, SetStateAction } from "react";
import { ThemeMode } from "./types";

/** 🖌️ Type สำหรับ ThemeContext */
export interface ThemeContextType {
  theme: ThemeMode;
  setTheme: Dispatch<SetStateAction<ThemeMode>>;
}

/** 🌐 ThemeContext พร้อมค่า default */
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light", // 🔹 ค่าเริ่มต้น ต้องตรงกับ ThemeMode
  setTheme: () => {}, // noop
});
