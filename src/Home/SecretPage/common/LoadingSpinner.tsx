"use client";

import { FC, memo } from "react";
import clsx from "clsx";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}

const LoadingSpinner: FC<LoadingSpinnerProps> = memo(({ size = "md" }) => (
  <div
    className={clsx(
      "animate-spin border-4 border-t-4 border-gray-300 rounded-full mx-auto",
      {
        "w-6 h-6": size === "sm",
        "w-10 h-10": size === "md",
        "w-16 h-16": size === "lg",
      }
    )}
    role="status"
    aria-label="Loading content..."
  />
));

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;
