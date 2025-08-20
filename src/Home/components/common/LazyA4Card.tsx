"use client";

import { FC, ReactNode, Suspense, memo } from "react";
import clsx from "clsx";
import ErrorBoundary from "@utils/common/ErrorBoundary";

interface LazyA4CardProps {
  /** เนื้อหาของการ์ด */
  children: ReactNode;

  /** ถ้า true จะทำให้เนื้อหาเบลอ + ไม่สามารถ interact ได้ */
  isBlurred?: boolean;

  /** delay สำหรับ animation (ms) */
  delay?: number;

  /** fallback ของ Suspense */
  fallback?: ReactNode;

  /** className เพิ่มเติมสำหรับ wrapper */
  className?: string;
}

/**
 * LazyA4Card
 * - wrapper สำหรับการ์ดที่โหลดแบบ lazy
 * - รองรับ blur + suspense fallback + error boundary
 */
const LazyA4Card: FC<LazyA4CardProps> = memo(
  ({ children, isBlurred = false, delay = 0, fallback = null, className }) => {
    return (
      <div
        className={clsx(
          "bg-white rounded-xl shadow-md p-6 w-full transition-all duration-500 animate-fadeInUp",
          // note: Tailwind delay utility ต้องเป็น fixed class เช่น delay-100, delay-200
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