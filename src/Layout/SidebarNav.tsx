// src/Layout/SidebarNav.tsx
"use client";

import { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface SidebarNavItem {
  to: string;
  label: string;
}

const navItems: SidebarNavItem[] = [
  { to: "/", label: "หน้าแรก" },
  { to: "/form", label: "ประเมินลูกค้า" },
  { to: "/login", label: "เข้าสู่ระบบ" },
];

/**
 * SidebarNav
 * ----------------
 * - Enterprise-grade vertical sidebar navigation
 * - Flat, professional UI (no animation)
 * - Accessible with aria roles
 * - Hidden on mobile (md breakpoint)
 */
const SidebarNav: FC = () => {
  return (
    <aside
      className="hidden md:flex md:flex-col md:w-64 md:min-h-screen border-r border-gray-200 bg-white text-gray-900"
      aria-label="เมนูด้านข้าง"
    >
      <div className="flex-1 flex flex-col pt-6 pb-4 overflow-y-auto">
        <nav className="flex-1 px-2 space-y-1">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                clsx(
                  "block px-3 py-2 text-sm font-medium transition-colors duration-150",
                  isActive
                    ? "bg-gray-100 text-black font-semibold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-black"
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

SidebarNav.displayName = "SidebarNav";
export default SidebarNav;
