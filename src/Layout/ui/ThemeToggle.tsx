"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import Button from "@/Home/components/ui/Button";

const THEME_KEY = "theme";

/**
 * 🎨 ThemeToggle Component
 *
 * - สลับ Light / Dark mode
 * - Sync theme ระหว่าง tab/browser
 * - รองรับ prefers-color-scheme
 * - Accessibility: aria-label, aria-pressed
 */
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  /** Apply theme to document & localStorage */
  const applyTheme = useCallback((darkMode: boolean) => {
    setIsDark(darkMode);
    const root = document.documentElement;

    root.classList.toggle("dark", darkMode);
    root.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light");
  }, []);

  /** Initialize theme on mount */
  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    applyTheme(savedTheme ? savedTheme === "dark" : prefersDark);
  }, [applyTheme]);

  /** Sync theme across tabs */
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === THEME_KEY && e.newValue) {
        applyTheme(e.newValue === "dark");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [applyTheme]);

  const toggleTheme = () => applyTheme(!isDark);

  if (!mounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      className="rounded-full p-2"
      aria-label={`สลับเป็นโหมด ${isDark ? "สว่าง" : "มืด"}`}
      aria-pressed={isDark}
      title={isDark ? "โหมดสว่าง" : "โหมดมืด"}
      type="button"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
};

export default ThemeToggle;
