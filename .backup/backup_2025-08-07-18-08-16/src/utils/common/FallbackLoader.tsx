// ✅ src/utils/common/FallbackLoader.tsx — Improved Minimal Loader
"use client";

import { FC } from "react";

interface FallbackLoaderProps {
  message?: string;
}

const FallbackLoader: FC<FallbackLoaderProps> = ({ message }) => {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center text-center animate-fade-in"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        {/* SVG Spinner */}
        <svg
          className="h-10 w-10 animate-spin text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
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

        {/* ข้อความ */}
        <p className="text-sm text-base-content/60">
          {message || "กำลังโหลดข้อมูล..."}
        </p>
      </div>
    </div>
  );
};

export default FallbackLoader;
