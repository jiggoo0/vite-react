"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import Button from "@/Home/components/ui/Button";

const THEME_KEY = "theme";

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  /** 🔹 Apply theme to document & localStorage */
  const applyTheme = useCallback((useDark: boolean) => {
    setIsDark(useDark);

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", useDark);
      document.documentElement.setAttribute(
        "data-theme",
        useDark ? "dark" : "light"
      );
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_KEY, useDark ? "dark" : "light");
    }
  }, []);

  /** 🔹 Initialize theme on mount */
  useEffect(() => {
    setIsMounted(true);
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const defaultDark = savedTheme ? savedTheme === "dark" : prefersDark;

    applyTheme(defaultDark);
  }, [applyTheme]);

  /** 🔹 Listen for theme changes in other tabs */
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THEME_KEY) {
        applyTheme(e.newValue === "dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [applyTheme]);

  /** 🔹 Toggle theme on button click */
  const toggleTheme = () => applyTheme(!isDark);

  if (!isMounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      className="rounded-full p-2"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      type="button"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
};

export default ThemeToggle;
