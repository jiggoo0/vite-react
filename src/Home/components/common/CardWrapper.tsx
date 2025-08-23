import { FC, ReactNode, memo } from "react";
import clsx from "clsx";

interface CardWrapperProps {
  /** เนื้อหาภายในการ์ด */
  children: ReactNode;

  /** className เพิ่มเติมสำหรับ wrapper */
  className?: string;

  /** ถ้า true จะทำให้เนื้อหาเบลอ + ไม่สามารถ interact ได้ */
  isBlurred?: boolean;
}

/**
 * CardWrapper
 * -------------------------
 * Wrapper สำหรับเนื้อหาภายในการ์ด
 * - รองรับ blur + ปิด interaction
 * - รองรับ className เพิ่มเติม
 */
const CardWrapper: FC<CardWrapperProps> = memo(
  ({ children, className, isBlurred = false }) => {
    return (
      <div
        className={clsx(
          className,
          isBlurred && "blur-sm pointer-events-none select-none transition-all duration-300"
        )}
      >
        {children}
      </div>
    );
  }
);

CardWrapper.displayName = "CardWrapper";

export default CardWrapper;