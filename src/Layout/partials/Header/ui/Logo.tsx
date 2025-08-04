// ✅ src/Layout/partials/Header/ui/Logo.tsx

import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp"; // ✅ ใช้ alias ที่ config ไว้ใน vite.config.ts

/**
 * 🔰 Logo — โลโก้บริษัทพร้อมลิงก์กลับหน้าหลัก
 *
 * - ใช้ใน Header หรือ Navbar
 * - Responsive และเข้าถึงได้ (Accessible)
 */
const Logo = () => {
  return (
    <Link
      to="/"
      aria-label="กลับหน้าหลัก"
      className="inline-flex items-center gap-2 font-bold text-lg text-primary hover:opacity-80 transition-opacity"
    >
      {/* 🖼️ โลโก้รูปภาพ */}
      <img
        src={logo}
        alt="JP Visual & Docs Logo"
        className="h-8 w-auto"
        loading="lazy"
        decoding="async"
      />

      {/* 📝 ข้อความแบรนด์ (แสดงเฉพาะจอ ≥ sm) */}
      <span className="hidden sm:inline">JP VISUAL & DOCS</span>
    </Link>
  );
};

export default Logo;
