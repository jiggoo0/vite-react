import { FC } from "react";
import { Link } from "react-router-dom";

import ThemeToggle from "@layout/ui/ThemeToggle";
import Logo from "@layout/ui/Logo";

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-base-100 text-base-content shadow-sm">
      <nav
        className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" aria-label="JP Visual Home">
            <Logo />
          </Link>
        </div>

        {/* Navigation Links & Utilities */}
        <div className="flex-none items-center space-x-2">
          <Link
            to="/"
            className="btn btn-ghost btn-sm font-medium hover:bg-base-200"
          >
            หน้าแรก
          </Link>
          <Link
            to="/form"
            className="btn btn-ghost btn-sm font-medium hover:bg-base-200"
          >
            ประเมินลูกค้า
          </Link>
          <Link
            to="/login"
            className="btn btn-ghost btn-sm font-medium hover:bg-base-200"
          >
            เข้าสู่ระบบ
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
