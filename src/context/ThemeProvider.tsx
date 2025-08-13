import { useEffect, useState, ReactNode } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

/** 🔹 ตรวจสอบค่า theme ที่ถูกต้อง */
const isValidTheme = (value: unknown): value is Theme =>
  typeof value === "string" && ["light", "dark", "business"].includes(value);

/** 🌐 ThemeProvider */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  /** 🔹 กำหนด theme เริ่มต้น */
  const getDefaultTheme = (): Theme => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (isValidTheme(saved)) return saved;

      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState<Theme>(getDefaultTheme);

  /** 🔹 ปรับ attribute และ localStorage เมื่อ theme เปลี่ยน */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /** 🔹 ฟังการเปลี่ยนแปลงระบบ dark mode */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
