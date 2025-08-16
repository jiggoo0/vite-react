'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * 🔄 ThemeToggle
 *
 * - ปุ่มสลับธีม Light / Dark
 * - บันทึก theme ใน localStorage
 * - อัปเดต class ของ document.documentElement
 */
const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === 'undefined') return 'light';
    return window.localStorage.getItem('theme') || 'light';
  });

  // อัปเดต class และ localStorage เมื่อ theme เปลี่ยน
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      aria-pressed={theme === 'dark'}
      className="btn btn-ghost btn-sm rounded-full p-2"
      type="button"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
