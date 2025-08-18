"use client";

import { FC, ReactNode, Suspense } from "react";
import { A4CardWrapper as OriginalA4CardWrapper } from "@home/SecretPage/common/CardWrapper";

interface A4CardWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper สำหรับ A4 Card
 * รองรับการเพิ่ม className
 */
const A4CardWrapper: FC<A4CardWrapperProps> = ({ children, className }) => (
  <OriginalA4CardWrapper>
    <div className={className}>{children}</div>
  </OriginalA4CardWrapper>
);

interface LazyA4CardProps {
  children: ReactNode;
  loadingSize?: "lg" | "md" | "sm";
  className?: string;
}

/**
 * Loader Spinner Component
 */
const LoadingSpinner: FC<{ size?: "lg" | "md" | "sm" }> = ({ size = "md" }) => {
  const sizeClass =
    size === "lg" ? "loading-lg" : size === "md" ? "loading-md" : "loading-sm";

  return (
    <div className="flex justify-center items-center py-8">
      <span
        className={`loading loading-spinner text-primary ${sizeClass}`}
        role="status"
        aria-label="Loading content..."
      />
    </div>
  );
};

/**
 * Lazy A4 Card Component
 * - รองรับ Suspense fallback loader
 * - สามารถส่ง className ผ่าน wrapper ได้
 */
const LazyA4Card: FC<LazyA4CardProps> = ({
  children,
  loadingSize = "md",
  className,
}) => (
  <Suspense fallback={<LoadingSpinner size={loadingSize} />}>
    <A4CardWrapper className={className}>{children}</A4CardWrapper>
  </Suspense>
);

export default LazyA4Card;
export { LoadingSpinner };
