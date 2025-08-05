// ✅ src/Layout/partials/Header/ui/ThemeToggle.tsx

"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";

const THEME_KEY = "theme";

/**
 * 🌗 ThemeToggle — ปุ่มเปลี่ยนธีมแสง/มืด
 *
 * - ใช้ Tailwind dark mode (`dark:` class)
 * - บันทึกสถานะใน localStorage
 * - ปรับ icon UI ตามสถานะปัจจุบัน
 */
const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // ✅ ป้องกัน hydration mismatch
    setIsMounted(true);

    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = saved === "dark" || (!saved && prefersDark);

    setIsDark(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);

    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  };

  if (!isMounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="rounded-full"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
};

export default ThemeToggle;