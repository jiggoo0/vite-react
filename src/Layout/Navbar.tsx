"use client";

import { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

import ThemeToggle from "@layout/ui/ThemeToggle";
import Logo from "@layout/ui/Logo";

interface NavLinkItem {
  to: string;
  label: string;
}

/**
 * Navbar Component
 * ----------------
 * - Logo + Navigation + Theme Toggle
 * - Professional, responsive, dark/light mode
 * - Animated active link underline
 */
const Navbar: FC = () => {
  const navLinks: NavLinkItem[] = [
    { to: "/", label: "หน้าแรก" },
    { to: "/form", label: "ประเมินลูกค้า" },
    { to: "/login", label: "เข้าสู่ระบบ" },
  ];

  return (
    <nav
      className={clsx(
        "flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 bg-base-100 dark:bg-zinc-900",
        "mx-auto max-w-7xl shadow-sm dark:shadow-none"
      )}
      aria-label="เมนูหลัก"
    >
      {/* Logo */}
      <div className="flex-1">
        <Logo />
      </div>

      {/* Navigation + Theme Toggle */}
      <div className="flex-none flex items-center gap-4">
        {navLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} end>
            {({ isActive }: { isActive: boolean }) => (
              <span
                className={clsx(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-white dark:text-white font-semibold"
                    : "text-base-content dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                )}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded"
                  />
                )}
              </span>
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