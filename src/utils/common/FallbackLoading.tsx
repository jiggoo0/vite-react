"use client";

import { FC } from "react";
import clsx from "clsx";

interface FallbackLoadingProps {
  /** 💬 ข้อความที่แสดงบน loader สามารถกำหนดเองได้ */
  message?: string;
  /** ✨ Optional: เพิ่ม className สำหรับ custom styling */
  className?: string;
  /** 🔹 ขนาด spinner (px) */
  size?: number;
}

/**
 * ⏳ FallbackLoading
 *
 * Overlay loader สำหรับ React Suspense หรือ async fetch
 * - backdrop + blur + spinner animation
 * - รองรับ accessibility: aria-busy, role="status", aria-live
 * - สามารถปรับข้อความและ custom class
 */
const FallbackLoading: FC<FallbackLoadingProps> = ({
  message = "กำลังโหลด...",
  className,
  size = 48,
}) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-base-100/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn",
        className
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <svg
          className="animate-spin text-primary dark:text-primary-dark"
          style={{ width: size, height: size }}
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
        <p className="text-sm text-base-content/70 dark:text-base-content/60 select-none">
          {message}
        </p>
      </div>
    </div>
  );
};

export default FallbackLoading;
