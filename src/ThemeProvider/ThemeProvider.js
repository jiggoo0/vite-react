// src/ThemeProvider/ThemeProvider.tsx
"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";
/** 🎨 ThemeProvider Component */
const ThemeProvider = ({ children, defaultTheme = "light", }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined")
            return defaultTheme;
        try {
            const stored = localStorage.getItem("app-theme");
            return stored ?? defaultTheme;
        }
        catch {
            return defaultTheme;
        }
    });
    /** 📌 ฟังก์ชันเปลี่ยน theme + sync ไปยัง DOM + localStorage */
    const applyTheme = useCallback((newTheme) => {
        const root = document.documentElement;
        // ลบทุก theme class ก่อน แล้วค่อย add ใหม่
        root.classList.remove("light", "dark", "team");
        root.classList.add(newTheme);
        try {
            localStorage.setItem("app-theme", newTheme);
        }
        catch (err) {
            console.warn("⚠️ Failed to save theme to localStorage:", err);
        }
    }, []);
    /** 📌 Sync เมื่อ theme state เปลี่ยน */
    useEffect(() => {
        applyTheme(theme);
    }, [theme, applyTheme]);
    return (_jsx(ThemeContext.Provider, { value: { theme, setTheme }, children: children }));
};
export default ThemeProvider;
