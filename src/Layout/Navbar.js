"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@layout/ui/ThemeToggle";
import Logo from "@layout/ui/Logo";
import { Menu, X } from "lucide-react";
/**
 * Navbar Component
 * ----------------
 * - Mobile: Logo + Hamburger menu + ThemeToggle
 * - Desktop: ซ่อน (ใช้ Sidebar แทน)
 * - มี Overlay มืดเมื่อเมนู mobile เปิด
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { to: "/", label: "หน้าแรก" },
        { to: "/form", label: "ประเมินลูกค้า" },
        { to: "/login", label: "เข้าสู่ระบบ" },
    ];
    return (_jsxs("nav", { className: clsx("relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8", "bg-base-100 dark:bg-zinc-900 shadow-sm md:hidden"), "aria-label": "\u0E40\u0E21\u0E19\u0E39\u0E2B\u0E25\u0E31\u0E01", children: [_jsx(Logo, {}), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ThemeToggle, {}), _jsx("button", { className: "p-2 rounded-md hover:bg-base-200 dark:hover:bg-zinc-800 transition", onClick: () => setIsOpen(!isOpen), "aria-label": "Toggle menu", children: isOpen ? _jsx(X, { className: "h-5 w-5" }) : _jsx(Menu, { className: "h-5 w-5" }) })] }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 0.5 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, className: "fixed inset-0 bg-black z-40", onClick: () => setIsOpen(false) }, "overlay")) }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.2 }, className: "absolute top-16 inset-x-0 z-50 bg-base-100 dark:bg-zinc-900 shadow-md border-t border-base-200 dark:border-zinc-800", children: _jsx("ul", { className: "flex flex-col p-4 gap-2", children: navLinks.map(({ to, label }) => (_jsx(NavLink, { to: to, end: true, onClick: () => setIsOpen(false), className: ({ isActive }) => clsx("px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200", isActive
                                ? "bg-primary text-white font-semibold"
                                : "text-base-content dark:text-gray-300 hover:bg-base-200 dark:hover:bg-zinc-800 hover:text-primary"), children: label }, to))) }) }, "menu")) })] }));
};
Navbar.displayName = "Navbar";
export default Navbar;
