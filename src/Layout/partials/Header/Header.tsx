// src/Layout/partials/Header/Header.tsx

import { FC } from "react";
import { Link } from "react-router-dom";

import Logo from "@layout/ui/Logo";
import ThemeToggle from "@layout/ui/ThemeToggle";
import LogoutButton from "@home/components/common/LogoutButton"; // path ตรงกับ alias และโครงสร้างจริง
import { useAuth } from "@hooks/useAuth";

/**
 * Header Component
 *
 * - แสดงโลโก้ด้านซ้าย
 * - ปุ่มสลับธีม (Light/Dark)
 * - ปุ่มเข้าสู่ระบบ หรือปุ่มออกจากระบบ ตามสถานะการล็อกอิน
 */
const Header: FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header
      className="bg-base-100 w-full border-b border-base-content/10 shadow-sm sticky top-0 z-50"
      role="banner" // accessibility role สำหรับ header
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Logo />

        {/* Theme Toggle และปุ่มล็อกอิน/ล็อกเอาท์ */}
        <nav aria-label="การนำทางผู้ใช้">
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {isAuthenticated ? (
              <LogoutButton />
            ) : (
              <Link
                to="/login"
                className="btn btn-primary btn-sm"
                aria-label="เข้าสู่ระบบ"
              >
                เข้าสู่ระบบ
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
