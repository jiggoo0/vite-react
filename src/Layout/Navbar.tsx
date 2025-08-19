"use client";

import { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import ThemeToggle from "@layout/ui/ThemeToggle";
import Logo from "@layout/ui/Logo";

/**
 * 🎯 Navbar Component
 *
 * - แสดง Logo + Navigation Links + Theme Toggle
 * - รองรับ active state, responsive, และ accessibility
 */
const Navbar: FC = () => {
  const navLinks = [
    { to: "/", label: "หน้าแรก" },
    { to: "/form", label: "ประเมินลูกค้า" },
    { to: "/login", label: "เข้าสู่ระบบ" },
  ];

  return (
    <nav
      className={clsx(
        "navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        "flex items-center justify-between h-16"
      )}
      aria-label="เมนูหลัก"
    >
      {/* Logo */}
      <div className="flex-1">
        <Logo />
      </div>

      {/* Navigation Links + Theme Toggle */}
      <div className="flex-none flex items-center gap-2 sm:gap-4">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              clsx(
                "btn btn-ghost btn-sm font-medium transition-colors duration-200",
                isActive
                  ? "bg-primary text-primary-content hover:bg-primary/90"
                  : "hover:bg-base-200"
              )
            }
          >
            {({ isActive }) => (
              <span aria-current={isActive ? "page" : undefined}>{label}</span>
            )}
          </NavLink>
        ))}

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
