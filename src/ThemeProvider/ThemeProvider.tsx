// src/ThemeProvider/ThemeProvider.tsx
"use client";

import { ReactNode, useState, useEffect, useCallback } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";
import type { ThemeMode } from "./types";

/** 🧩 Props ของ ThemeProvider */
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

/**
 * 🎨 ThemeProvider Component
 *
 * - รองรับ theme: "light" | "dark" | "system" | "business"
 * - Sync กับ DOM และ localStorage
 * - ปลอดภัย ไม่ทำให้หน้าจอขาว
 */
const ThemeProvider = ({ children, defaultTheme = "light" }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = localStorage.getItem("app-theme") as ThemeMode | null;
      return stored ?? defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  /** 🔹 Resolve system theme ("light" | "dark") */
  const resolveTheme = useCallback((mode: ThemeMode): "light" | "dark" => {
    if (mode === "system" && typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return mode === "light" ? "light" : "dark";
  }, []);

  /** 🔹 Apply theme to DOM and localStorage */
  const applyTheme = useCallback(
    (newTheme: ThemeMode) => {
      if (typeof document === "undefined") return;

      const root = document.documentElement;
      const resolvedTheme: "light" | "dark" =
        newTheme === "business" ? "light" : resolveTheme(newTheme);

      // Remove all previous classes
      root.classList.remove("light", "dark", "business");
      root.classList.add(newTheme);

      // Sync DaisyUI / Tailwind dataset
      root.dataset.theme = newTheme;

      // Fallback background/text
      root.style.backgroundColor = resolvedTheme === "dark" ? "#1f2937" : "#ffffff";
      root.style.color = resolvedTheme === "dark" ? "#f3f4f6" : "#111827";

      try {
        localStorage.setItem("app-theme", newTheme);
      } catch (err) {
        console.warn("⚠️ Failed to save theme:", err);
      }
    },
    [resolveTheme]
  );

  /** Apply theme on mount & when theme changes */
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  const contextValue: ThemeContextType = { theme, setTheme };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
