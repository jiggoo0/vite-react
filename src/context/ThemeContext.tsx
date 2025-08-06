// src/context/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "business";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // โหลดธีมจาก localStorage หรือ ตาม prefers-color-scheme
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved && ["light", "dark", "business"].includes(saved)) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme: Theme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook เพื่อใช้งาน context ใน component
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};