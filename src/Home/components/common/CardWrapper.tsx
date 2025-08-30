"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
  padding?: string; // custom padding class เช่น "p-4"
  bgColor?: string; // custom background class เช่น "bg-white"
}

/**
 * Wrapper สำหรับ Card Component
 * รองรับ rounded, shadow, padding, background color
 */
const CardWrapper: FC<CardWrapperProps> = ({
  children,
  className,
  rounded = true,
  shadow = true,
  padding = "p-4",
  bgColor = "bg-white dark:bg-gray-800",
}) => {
  return (
    <div
      className={clsx(
        bgColor,
        padding,
        rounded && "rounded-xl",
        shadow && "shadow-sm hover:shadow-md transition-shadow",
        "border border-gray-200 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};

CardWrapper.displayName = "CardWrapper";

export default CardWrapper;
