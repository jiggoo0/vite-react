"use client";

import { FC, ReactNode, Suspense, memo } from "react";
import clsx from "clsx";
import ErrorBoundary from "@utils/common/ErrorBoundary";

interface LazyA4CardProps {
  children: ReactNode;
  isBlurred?: boolean;
  delay?: number; // delay สำหรับ animation
  fallback?: ReactNode; // fallback ของ Suspense
  className?: string;
}

const LazyA4Card: FC<LazyA4CardProps> = memo(
  ({ children, isBlurred = false, delay = 0, fallback = null, className }) => {
    return (
      <div
        className={clsx(
          "bg-white rounded-xl shadow-md p-6 w-full transition-all duration-500 animate-fadeInUp",
          `delay-${delay}`,
          isBlurred && "blur-sm pointer-events-none select-none",
          className
        )}
      >
        <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในส่วนนี้">
          {fallback ? (
            <Suspense fallback={fallback}>{children}</Suspense>
          ) : (
            children
          )}
        </ErrorBoundary>
      </div>
    );
  }
);

LazyA4Card.displayName = "LazyA4Card";
export default LazyA4Card;
