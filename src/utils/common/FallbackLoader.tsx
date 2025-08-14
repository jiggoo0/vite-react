"use client";

import { FC } from "react";

interface FallbackLoaderProps {
  /** 💬 ข้อความที่แสดงระหว่างโหลด สามารถกำหนดเองได้ */
  message?: string;
}

/**
 * ⏳ FallbackLoader
 *
 * - Loader แบบ center overlay สำหรับ React Suspense หรือ async fetch
 * - รองรับ dark mode, responsive, และ animation
 * - Accessibility: role="status" + aria-live="polite"
 */
const FallbackLoader: FC<FallbackLoaderProps> = ({ message }) => {
  return (
    <div
      className="flex min-h-[50vh] w-full items-center justify-center text-center animate-fade-in bg-base-100 dark:bg-zinc-900 p-4"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4 sm:gap-5">
        {/* Spinner */}
        <svg
          className="h-10 w-10 sm:h-12 sm:w-12 animate-spin text-primary"
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
