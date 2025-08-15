// src/Layout/Navbar.tsx
import { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import ThemeToggle from "@layout/ui/ThemeToggle";
import Logo from "@layout/ui/Logo";

const Navbar: FC = () => {
  const navLinks: { to: string; label: string }[] = [
    { to: "/", label: "หน้าแรก" },
    { to: "/form", label: "ประเมินลูกค้า" },
    { to: "/login", label: "เข้าสู่ระบบ" },
  ];

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 w-full border-b shadow-sm",
        "bg-base-100 text-base-content"
      )}
    >
      <nav
        className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="เมนูหลัก"
      >
        {/* Logo */}
        <div className="flex-1">
          <Logo />
        </div>

        {/* Navigation Links & Utilities */}
        <div className="flex-none flex items-center gap-1 sm:gap-2">
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
              {label}
            </NavLink>
          ))}

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
