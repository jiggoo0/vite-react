"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * ThemeToggle Component
 *
 * - สลับระหว่างโหมด Light / Dark
 * - เก็บ theme ลง localStorage
 * - รองรับ accessibility (aria-label, aria-pressed)
 */
const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("theme");
    return stored === "dark" ? "dark" : "light";
  });

  // Apply theme to <html> root and persist in localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      className="btn btn-ghost btn-sm rounded-full p-2 transition-colors duration-300 hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
