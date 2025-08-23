"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
/**
 * AppProviders
 * -------------------------
 * Wrapper สำหรับ global providers:
 * - React Router (BrowserRouter) สำหรับ routing
 * - ThemeProvider สำหรับธีม Light / Dark / Business
 */
const AppProviders = ({ children }) => {
    // BASE_URL ใช้ import.meta.env หรือ fallback เป็น root "/"
    const basePath = import.meta.env.BASE_URL?.trim() || "/";
    return (_jsx(BrowserRouter, { basename: basePath, children: _jsx(ThemeProvider, { children: children }) }));
};
export default AppProviders;
