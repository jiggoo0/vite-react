// src/ThemeProvider/ThemeProvider.tsx
"use client";

import { ReactNode, useState, useEffect, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeMode } from "./types";

/** 🧩 Props ของ ThemeProvider */
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

/**
 * 🎨 ThemeProvider Component
 *
 * - รองรับ "light", "dark", "system", "business"
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

  /** 🔹 Resolve system theme */
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

      // สำหรับ business ให้ใช้ class 'business' แต่ resolvedTheme สำหรับ CSS variables
      const resolvedTheme: "light" | "dark" =
        newTheme === "business" ? "light" : resolveTheme(newTheme);

      // Remove all previous classes
      root.classList.remove("light", "dark", "business");
      root.classList.add(newTheme);

      // DaisyUI / Tailwind dataset
      root.dataset.theme = newTheme;

      // Set CSS variable fallback สำหรับ bg/text
      if (resolvedTheme === "dark") {
        root.style.backgroundColor = "#1f2937";
        root.style.color = "#f3f4f6";
      } else {
        root.style.backgroundColor = "#ffffff";
        root.style.color = "#111827";
      }

      try {
        localStorage.setItem("app-theme", newTheme);
      } catch (err) {
        console.warn("⚠️ Failed to save theme:", err);
      }
    },
    [resolveTheme]
  );

  // Apply theme on mount และเมื่อ theme เปลี่ยน
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;