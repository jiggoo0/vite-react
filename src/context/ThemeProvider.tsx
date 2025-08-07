import { useEffect, useState, type ReactNode } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

const isValidTheme = (value: unknown): value is Theme =>
  value === "light" || value === "dark" || value === "business";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getDefaultTheme = (): Theme => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (isValidTheme(saved)) return saved;

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState<Theme>(getDefaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Optional: ติดตามการเปลี่ยนแปลง prefers-color-scheme ของ user
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const listener = (e: MediaQueryListEvent) => {
      // เปลี่ยน theme อัตโนมัติ ก็ต่อเมื่อ user ยังไม่ได้ตั้งค่าธีมเอง
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};