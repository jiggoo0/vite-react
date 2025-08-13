import { FC } from "react";
import { Link } from "react-router-dom";

/**
 * Logo Component
 *
 * - แสดงโลโก้ของเว็บไซต์ พร้อมลิงก์ไปยังหน้าแรก
 * - ใช้ไฟล์ ภายนอกจาก public/logo.webp
 */
const Logo: FC = () => {
  return (
    <Link
      to="/"
      aria-label="JP Visual Home"
      className="inline-flex items-center space-x-2"
    >
      {/* ใช้ <img> โหลดไฟล์ SVG จาก public folder */}
      <img
        src="/logo.webp"
        alt="JP Visual & Docs Logo"
        className="h-8 w-8"
        aria-hidden="true"
      />

      <span className="text-xl font-bold text-primary select-none">
        JP Visual & Docs
      </span>
    </Link>
  );
};

export default Logo;
