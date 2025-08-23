"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Logo from "@layout/ui/Logo";
import ThemeToggle from "@layout/ui/ThemeToggle";
import LogoutButton from "@home/components/common/LogoutButton";
import { useAuth } from "@hooks/useAuth";
/**
 * 🎯 Header Component
 *
 * Features:
 * - Sticky header with shadow
 * - Logo
 * - Theme toggle button
 * - Login / Logout button
 * - "ประเมินลูกค้า" menu
 * - Accessible and responsive design
 * - Clean and flat UI
 */
const Header = () => {
    const { isAuthenticated } = useAuth();
    return (_jsx("header", { role: "banner", className: clsx("sticky top-0 z-50 w-full border-b border-base-content/10", "bg-base-100 shadow-sm transition-colors duration-300"), children: _jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8", children: [_jsx(Logo, {}), _jsxs("nav", { "aria-label": "User navigation", className: "flex items-center gap-3", children: [_jsx(ThemeToggle, {}), _jsx(Link, { to: "/form", className: clsx("btn btn-outline btn-sm transition-all duration-200", "hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"), children: "\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32" }), isAuthenticated ? (_jsx(LogoutButton, {})) : (_jsx(Link, { to: "/login", "aria-label": "Login", className: clsx("btn btn-primary btn-sm transition-all duration-200", "hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"), children: "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A" }))] })] }) }));
};
Header.displayName = "Header";
export default Header;
