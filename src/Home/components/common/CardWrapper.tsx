"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
  padding?: string; // Tailwind padding classes, เช่น "p-4", "px-6 py-4"
  bgColor?: string; // Tailwind background classes, เช่น "bg-white", "bg-gray-50 dark:bg-gray-800"
  responsive?: boolean; // เปิดใช้งาน responsive padding และ width
}

/**
 * CardWrapper: wrapper สำหรับ Card component
 * รองรับ rounded, shadow, padding, background color และ responsive
 */
const CardWrapper: FC<CardWrapperProps> = ({
  children,
  className,
  rounded = true,
  shadow = true,
  padding = "p-4",
  bgColor = "bg-white dark:bg-gray-800",
  responsive = true,
}) => {
  return (
    <div
      className={clsx(
        bgColor,
        padding,
        rounded && "rounded-xl",
        shadow && "shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out",
        responsive && "w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto",
        "border border-gray-200 dark:border-gray-700",
        className
      )}
      data-testid="card-wrapper"
    >
      {children}
    </div>
  );
};

CardWrapper.displayName = "CardWrapper";

export default CardWrapper;
