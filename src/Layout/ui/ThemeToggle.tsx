"use client";

import { useState, useLayoutEffect, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import Button from "@/Home/components/ui/Button";

const THEME_KEY = "theme";

/**
 * ThemeToggle Component
 * ----------------------
 * - Toggle Light / Dark mode
 * - Sync with localStorage & prefers-color-scheme
 * - Update `dark` class & `data-theme` attribute
 * - Accessible: aria-label, aria-pressed
 */
const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Apply theme to document and localStorage
  const applyTheme = useCallback((dark: boolean) => {
    setIsDark(dark);

    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.setAttribute("data-theme", dark ? "dark" : "light");

    try {
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {
      // ignore quota errors
    }
  }, []);

  // Initialize theme before paint to avoid FOUC
  useLayoutEffect(() => {
    setIsMounted(true);

    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    applyTheme(savedTheme ? savedTheme === "dark" : prefersDark);
  }, [applyTheme]);

  // Sync theme across tabs/windows
  useLayoutEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === THEME_KEY && e.newValue) {
        applyTheme(e.newValue === "dark");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [applyTheme]);

  const toggleTheme = () => applyTheme(!isDark);

  // Avoid SSR / hydration mismatch
  if (!isMounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      type="button"
      className="p-2"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      title={isDark ? "Light Mode" : "Dark Mode"}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
};

ThemeToggle.displayName = "ThemeToggle";
export default ThemeToggle;
