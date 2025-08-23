"use client";

import { forwardRef, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import { cardVariantClasses, cardSizeClasses, CardVariant, CardSize } from "./Card.styles";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** เนื้อหาภายใน Card */
  children: ReactNode;
  /** Variant ของ Card */
  variant?: CardVariant;
  /** ขนาดของ Card */
  size?: CardSize;
  /** คลาสเพิ่มเติมสำหรับการปรับแต่ง */
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = "default", size = "md", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-2xl transition-colors duration-200",
          cardVariantClasses[variant],
          cardSizeClasses[size],
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