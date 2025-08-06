import { FC } from "react";
import { Link } from "react-router-dom";

import Logo from "@layout/partials/Header/ui/Logo";
import ThemeToggle from "@components/common/ThemeToggle";
import LogoutButton from "@components/common/LogoutButton";
import { useAuth } from "@hooks/useAuth";

/**
 * 🔰 Header — ส่วนหัวของระบบ
 *
 * - แสดงโลโก้บริษัท
 * - ปุ่มเปลี่ยนธีม (Light/Dark)
 * - ปุ่มเข้าสู่ระบบ หรือ ออกจากระบบ ตามสถานะผู้ใช้
 */
const Header: FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-base-100 w-full border-b border-base-content/10 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* 🔰 โลโก้ */}
        <Logo />

        {/* 🔘 Theme Toggle & Auth Actions */}
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
      </div>
    </header>
  );
};

export default Header;