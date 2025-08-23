"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
const navItems = [
    { to: "/", label: "หน้าแรก" },
    { to: "/form", label: "ประเมินลูกค้า" },
    { to: "/login", label: "เข้าสู่ระบบ" },
];
/**
 * SidebarNav
 * ----------------
 * - Enterprise-grade vertical sidebar navigation
 * - Flat, professional UI (no animation, no rounded corners)
 * - Accessible with aria roles
 * - Hidden on mobile (md breakpoint)
 */
const SidebarNav = () => {
    return (_jsx("aside", { className: "hidden md:flex md:flex-col md:w-64 md:min-h-screen border-r border-gray-200 bg-white text-gray-900", "aria-label": "\u0E40\u0E21\u0E19\u0E39\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07", children: _jsx("div", { className: "flex-1 flex flex-col pt-6 pb-4 overflow-y-auto", children: _jsx("nav", { className: "flex-1 px-2 space-y-1", children: navItems.map(({ to, label }) => (_jsx(NavLink, { to: to, end: true, className: ({ isActive }) => clsx("block px-3 py-2 text-sm font-medium transition-colors duration-150", isActive
                        ? "bg-gray-100 text-black font-semibold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-black"), children: label }, to))) }) }) }));
};
SidebarNav.displayName = "SidebarNav";
export default SidebarNav;
