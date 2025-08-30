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
 * - Center overlay loader สำหรับ React Suspense หรือ async fetch
 * - รองรับ dark mode, responsive, animation smooth
 * - Accessibility: aria-busy="true", role="status", aria-live="polite"
 * - ปรับข้อความ, ขนาด spinner และ styling ภายนอกได้
 */
const FallbackLoader: FC<FallbackLoaderProps> = ({
  message = "กำลังโหลดข้อมูล...",
  className,
  size = "md",
}) => {
  const spinnerSizeCls = {
    sm: "h-6 w-6",
    md: "h-10 w-10 sm:h-12 sm:w-12",
    lg: "h-16 w-16 sm:h-20 sm:w-20",
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-base-100/70 dark:bg-zinc-900/70 backdrop-blur-sm animate-fadeIn p-4",
        className
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4 sm:gap-5">
        {/* Spinner */}
        <svg
          className={clsx("animate-spin text-primary dark:text-primary-dark", spinnerSizeCls[size])}
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
          {message}
        </p>
      </div>
    </div>
  );
};

export default FallbackLoader;
