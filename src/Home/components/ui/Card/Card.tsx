"use client";

import { forwardRef, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** เนื้อหาภายใน Card */
  children: ReactNode;
  /** คลาสเพิ่มเติมสำหรับการปรับแต่ง */
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "bg-white rounded-2xl shadow-md p-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;