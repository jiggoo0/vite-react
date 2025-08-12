import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

/**
 * 🔰 Logo — โลโก้บริษัทพร้อมลิงก์กลับหน้าหลัก
 *
 * - ใช้ใน Header หรือ Navbar
 * - Responsive และเข้าถึงได้ (Accessible)
 * - รองรับการเปลี่ยนธีม (Light/Dark)
 * - รองรับ fallback กรณีโหลดภาพล้มเหลว
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
        alt="โลโก้ JP Visual & Docs"
        className="h-8 w-auto"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/fallback-logo.png";
        }}
      />

      {/* 📝 ข้อความแบรนด์ (แสดงเฉพาะจอ ≥ sm) */}
      <span className="hidden sm:inline select-none">JP VISUAL & DOCS</span>
    </Link>
  );
};

export default Logo;