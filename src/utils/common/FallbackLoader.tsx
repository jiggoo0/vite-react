// ✅ src/utils/common/FallbackLoader.tsx — Professional Centered Loader
"use client";

import { FC } from "react";
import clsx from "clsx";

interface FallbackLoaderProps {
  /** 💬 ข้อความที่แสดงระหว่างโหลด สามารถกำหนดเองได้ */
  message?: string;
  /** ✨ เพิ่ม className สำหรับปรับ styling ภายนอก */
  className?: string;
  /** 🔹 ขนาด spinner: sm | md | lg */
  size?: "sm" | "md" | "lg";
}

/**
 * ⏳ FallbackLoader
 *
 * - Loader แบบ center overlay สำหรับ React Suspense หรือ async fetch
 * - รองรับ dark mode, responsive, animation
 * - Accessibility: role="status" + aria-live="polite"
 * - สามารถปรับข้อความ, ขนาด spinner และ styling ภายนอกได้
 */
const FallbackLoader: FC<FallbackLoaderProps> = ({
  message,
  className,
  size = "md",
}) => {
  const spinnerSizeCls = {
    sm: "h-6 w-6",
    md: "h-10 w-10 sm:h-12 sm:w-12",
    lg: "h-16 w-16",
  };

  return (
    <div
      className={clsx(
        "flex min-h-[50vh] w-full items-center justify-center text-center animate-fade-in bg-base-100 dark:bg-zinc-900 p-4",
        className
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4 sm:gap-5">
        {/* Spinner */}
        <svg
          className={clsx("animate-spin text-primary", spinnerSizeCls[size])}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>

        {/* Loading Text */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 select-none">
          {message || "กำลังโหลดข้อมูล..."}
        </p>
      </div>
    </div>
  );
};

export default FallbackLoader;
