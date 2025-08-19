"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import Button from "@/Home/components/ui/Button";

const THEME_KEY = "theme";

/**
 * ThemeToggle
 * ------------
 * ปุ่มสลับโหมด Light / Dark
 * - จัดการ class `dark` บน root element
 * - จัดการ attribute `data-theme` สำหรับ CSS variables
 * - Sync กับ localStorage และ prefers-color-scheme
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

  /** Initialize theme on mount */
  useEffect(() => {
    setIsMounted(true);

    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    applyTheme(saved ? saved === "dark" : prefersDark);
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

  // Prevent hydration mismatch in SSR
  if (!isMounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      type="button"
      className="rounded-full p-2"
      aria-label={`สลับเป็นโหมด ${isDark ? "สว่าง" : "มืด"}`}
      aria-pressed={isDark}
      title={isDark ? "โหมดสว่าง" : "โหมดมืด"}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
};

export default ThemeToggle;
