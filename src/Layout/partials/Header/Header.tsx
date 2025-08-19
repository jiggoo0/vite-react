"use client";

import { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Logo from "@layout/ui/Logo";
import ThemeToggle from "@layout/ui/ThemeToggle";
import LogoutButton from "@home/components/common/LogoutButton";
import { useAuth } from "@hooks/useAuth";

/**
 * 🎯 Header Component
 *
 * - Sticky header with Logo + User navigation
 * - Theme toggle + Login/Logout button
 * - Accessible and responsive
 */
const Header: FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header
      role="banner"
      className={clsx(
        "sticky top-0 z-50 w-full border-b border-base-content/10",
        "bg-base-100 shadow-sm transition-colors duration-300"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav aria-label="การนำทางผู้ใช้" className="flex items-center gap-3">
          {/* Theme toggle button */}
          <ThemeToggle />

          {/* Login / Logout */}
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <Link
              to="/login"
              aria-label="เข้าสู่ระบบ"
              className={clsx(
                "btn btn-primary btn-sm transition-all duration-200",
                "hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              )}
            >
              เข้าสู่ระบบ
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

Header.displayName = "Header";
export default Header;
