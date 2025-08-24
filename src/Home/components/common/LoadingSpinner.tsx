"use client";

import { FC } from "react";
import clsx from "clsx";

interface LoadingSpinnerProps {
  size?: number; // ขนาด spinner (px)
  className?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = 40, className }) => {
  return (
    <div
      className={clsx(
        "inline-block animate-spin rounded-full border-4 border-t-4 border-gray-300 border-t-blue-500",
        className
      )}
      style={{ width: size, height: size }}
    />
  );
};

export default LoadingSpinner;
