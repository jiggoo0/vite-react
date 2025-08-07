import { createContext, useEffect, useState, ReactNode } from "react";

export type Theme = "light" | "dark" | "business";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const isValidTheme = (value: unknown): value is Theme =>
  typeof value === "string" && ["light", "dark", "business"].includes(value);

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

  // ฟังค์ชันช่วยติดตามการเปลี่ยนแปลง prefers-color-scheme แบบ realtime (optional)
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