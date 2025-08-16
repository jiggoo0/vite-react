import { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import ThemeToggle from "@layout/ui/ThemeToggle";
import Logo from "@layout/ui/Logo";

const Navbar: FC = () => {
  const navLinks = [
    { to: "/", label: "หน้าแรก" },
    { to: "/form", label: "ประเมินลูกค้า" },
    { to: "/login", label: "เข้าสู่ระบบ" },
  ];

  return (
    <nav
      className={clsx("navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8")}
      aria-label="เมนูหลัก"
    >
      <div className="flex-1">
        <Logo />
      </div>

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

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
