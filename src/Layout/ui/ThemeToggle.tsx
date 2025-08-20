"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import Button from "@/Home/components/ui/Button";

const THEME_KEY = "theme";

/**
 * ThemeToggle
 * ------------
 * - Toggle Light / Dark mode
 * - Syncs with localStorage & prefers-color-scheme
 * - Updates `dark` class and `data-theme` attribute
 */
const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  /** Apply theme */
  const applyTheme = useCallback((dark: boolean) => {
    setIsDark(dark);

    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.setAttribute("data-theme", dark ? "dark" : "light");

    try {
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch (err) {
      console.warn("⚠️ Failed to save theme:", err);
    }
  }, []);

  /** Initialize theme */
  useEffect(() => {
    setIsMounted(true);

    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

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

  /** Toggle theme manually */
  const toggleTheme = () => applyTheme(!isDark);

  // Prevent SSR hydration mismatch
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