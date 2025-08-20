"use client";

import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import ThemeToggle from "@layout/ui/ThemeToggle";
import Logo from "@layout/ui/Logo";
import { Menu, X } from "lucide-react";

interface NavLinkItem {
  to: string;
  label: string;
}

/**
 * Navbar Component
 * ----------------
 * - Mobile: Logo + Hamburger menu + ThemeToggle
 * - Desktop: ซ่อน (ใช้ Sidebar แทน)
 * - มี Overlay มืดเมื่อเมนู mobile เปิด
 */
const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLinkItem[] = [
    { to: "/", label: "หน้าแรก" },
    { to: "/form", label: "ประเมินลูกค้า" },
    { to: "/login", label: "เข้าสู่ระบบ" },
  ];

  return (
    <nav
      className={clsx(
        "relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",
        "bg-base-100 dark:bg-zinc-900 shadow-sm md:hidden"
      )}
      aria-label="เมนูหลัก"
    >
      {/* Logo */}
      <Logo />

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <button
          className="p-2 rounded-md hover:bg-base-200 dark:hover:bg-zinc-800 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu (Slide-down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 inset-x-0 z-50 bg-base-100 dark:bg-zinc-900 shadow-md border-t border-base-200 dark:border-zinc-800"
          >
            <ul className="flex flex-col p-4 gap-2">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "bg-primary text-white font-semibold"
                        : "text-base-content dark:text-gray-300 hover:bg-base-200 dark:hover:bg-zinc-800 hover:text-primary"
                    )
                  }
                >
                  {label}
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;