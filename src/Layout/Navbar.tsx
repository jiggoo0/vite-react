// src/Layout/partials/Navbar.tsx
"use client";

import { FC, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import ThemeToggle from "@layout/ui/ThemeToggle";
import Logo from "@layout/ui/Logo";
import { Menu, X } from "lucide-react";

interface NavLinkItem {
  to: string;
  label: string;
}

/* ==============================
   Navbar (Mobile)
============================== */
const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLinkItem[] = [
    { to: "/", label: "หน้าแรก" },
    { to: "/form", label: "ประเมินลูกค้า" },
    { to: "/login", label: "เข้าสู่ระบบ" },
  ];

  // ปิดเมนูด้วย Esc + ป้องกัน scroll เมื่อเปิด
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap เบื้องต้น
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
        "a, button, input, [tabindex]:not([tabindex='-1'])"
      );
      firstFocusable?.focus();
    }
  }, [isOpen]);

  return (
    <nav
      className="relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 bg-base-100 dark:bg-zinc-900 shadow-sm md:hidden"
      aria-label="เมนูหลัก"
    >
      {/* Logo */}
      <Logo />

      {/* Hamburger & ThemeToggle */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button
          className="p-2 rounded-md hover:bg-base-200 dark:hover:bg-zinc-800 transition focus:outline-none focus-visible:ring focus-visible:ring-primary"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <aside
            ref={drawerRef}
            className={clsx(
              "absolute top-16 inset-x-0 z-50 bg-base-100 dark:bg-zinc-900 shadow-md border-t border-base-200 dark:border-zinc-800 transition-transform duration-300 transform",
              isOpen ? "translate-y-0" : "-translate-y-full"
            )}
            role="menu"
            aria-modal="true"
            aria-label="เมนูมือถือ"
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
                  role="menuitem"
                  tabIndex={0}
                >
                  {label}
                </NavLink>
              ))}
            </ul>
          </aside>
        </>
      )}
    </nav>
  );
};

Navbar.displayName = "Navbar";
export default Navbar;
