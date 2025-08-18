import { FC } from "react";
import { Link } from "react-router-dom";

import Logo from "@layout/ui/Logo";
import ThemeToggle from "@layout/ui/ThemeToggle";
import LogoutButton from "@home/components/common/LogoutButton";
import { useAuth } from "@hooks/useAuth";

/**
 * Header
 * ส่วนหัวของเว็บไซต์ แสดงโลโก้ ปุ่มเปลี่ยนธีม และปุ่มเข้าสู่ระบบ/ออกจากระบบ
 */
const Header: FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-base-content/10 
                 bg-base-100 shadow-sm transition-colors duration-300"
      role="banner"
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between 
                      px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Navigation & Actions */}
        <nav aria-label="การนำทางผู้ใช้" className="flex items-center gap-3">
          <ThemeToggle />

          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-sm transition-all duration-200 
                         hover:brightness-110 focus:outline-none 
                         focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="เข้าสู่ระบบ"
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
