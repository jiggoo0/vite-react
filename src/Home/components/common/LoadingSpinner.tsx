"use client";

import { FC, memo } from "react";
import clsx from "clsx";

interface LoadingSpinnerProps {
  /** ขนาดของ spinner */
  size?: "sm" | "md" | "lg";
}

/**
 * LoadingSpinner
 * - spinner แบบวงกลมหมุน
 * - รองรับ 3 ขนาด: sm, md, lg
 */
const LoadingSpinner: FC<LoadingSpinnerProps> = memo(({ size = "md" }) => {
  const sizeClass = clsx({
    "w-6 h-6": size === "sm",
    "w-10 h-10": size === "md",
    "w-16 h-16": size === "lg",
  });

  return (
    <div
      className={clsx(
        "mx-auto animate-spin rounded-full border-4 border-t-4 border-gray-300",
        sizeClass
      )}
      role="status"
      aria-label="Loading content..."
    />
  );
});

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;