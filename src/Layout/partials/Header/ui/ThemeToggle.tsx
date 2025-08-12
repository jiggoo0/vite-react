"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";

const THEME_KEY = "theme";

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

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

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === THEME_KEY) {
        const next = e.newValue === "dark";
        applyTheme(next);
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [applyTheme]);

  const toggleTheme = () => {
    applyTheme(!isDark);
  };

  if (!isMounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="rounded-full"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
};

export default ThemeToggle;
