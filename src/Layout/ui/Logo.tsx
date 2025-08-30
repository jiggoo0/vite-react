import { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

/**
 * 🎨 Logo Component
 * - แสดงโลโก้ JP Visual & Docs พร้อมลิงก์ไปหน้าแรก
 * - รองรับ accessibility, dark mode และ responsive sizing
 */
const Logo: FC = () => (
  <Link
    to="/"
    aria-label="หน้าแรก JP Visual & Docs"
    className={clsx(
      "inline-flex items-center space-x-2",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
      "transition-colors duration-200"
    )}
  >
    {/* Logo Image */}
    <img
      src="/logo.webp"
      alt="โลโก้ JP Visual & Docs"
      loading="lazy"
      decoding="async"
      className={clsx("h-8 w-8 sm:h-10 sm:w-10 rounded-md object-contain", "dark:brightness-90")}
      aria-hidden="true"
    />

    {/* Logo Text */}
    <span
      className={clsx(
        "text-lg sm:text-xl font-bold select-none tracking-tight",
        "text-primary dark:text-primary-content"
      )}
    >
      JP Visual & Docs
    </span>
  </Link>
);

export default Logo;
