// ✅ src/utils/common/FallbackLoading.tsx — Professional Overlay Loader
"use client";

import { FC } from "react";
import clsx from "clsx";

interface FallbackLoadingProps {
  /** 💬 ข้อความที่แสดงบน loader สามารถกำหนดเองได้ */
  message?: string;
  /** ✨ Optional: เพิ่ม className สำหรับ custom styling */
  className?: string;
}

/**
 * ⏳ FallbackLoading
 *
 * Overlay loader สำหรับ React Suspense หรือ async fetch
 * - ใช้ backdrop + blur + spinner animation
 * - รองรับ accessibility: aria-live="polite", role="status"
 * - สามารถปรับข้อความและเพิ่ม custom class ได้
 */
const FallbackLoading: FC<FallbackLoadingProps> = ({ message, className }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-base-100/80 backdrop-blur-sm animate-fadeIn",
        className
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <svg
          className="h-12 w-12 animate-spin text-primary"
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
        <p className="text-sm text-base-content/70 select-none">
          {message || "กำลังโหลด..."}
        </p>
      </div>
    </div>
  );
};

export default FallbackLoading;
