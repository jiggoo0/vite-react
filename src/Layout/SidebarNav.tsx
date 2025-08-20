"use client";

import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface SidebarNavItem {
  label: string;
  href: string;
  icon?: ReactNode;
  disabled?: boolean;
}

interface SidebarNavProps {
  items: SidebarNavItem[];
  className?: string;
}

/**
 * SidebarNav
 * -----------
 * Navigation component สำหรับ sidebar
 * - รองรับ icon
 * - รองรับ disabled link
 * - รองรับ active link highlight
 * - Flat, neutral, professional style
 */
const SidebarNav: FC<SidebarNavProps> = ({ items, className }) => {
  return (
    <nav
      className={clsx(
        "flex flex-col space-y-1 px-4 py-6 bg-base-100",
        className
      )}
      aria-label="Sidebar navigation"
    >
      {items.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-3 px-3 py-2 transition-colors duration-200 text-base-content",
              isActive && "bg-primary text-white",
              item.disabled &&
                "opacity-50 pointer-events-none cursor-not-allowed hover:bg-transparent"
            )
          }
          aria-disabled={item.disabled}
        >
          {item.icon && <span className="w-5 h-5 flex items-center justify-center">{item.icon}</span>}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

SidebarNav.displayName = "SidebarNav";

export default SidebarNav;