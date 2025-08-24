"use client";

import { FC, ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface BadgeCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

/**
 * BadgeCard
 * -------------------------
 * ✅ แสดง Badge / ไอคอนพร้อมชื่อและคำอธิบาย
 * ✅ Responsive + Accessible + Professional UI
 */
const BadgeCard: FC<BadgeCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  const titleId = `${title.replace(/\s+/g, "-").toLowerCase()}-badge-title`;

  return (
    <div
      role="group"
      aria-labelledby={titleId}
      className={cn(
        "flex flex-col items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-shadow duration-200 w-full sm:w-44 text-center",
        className
      )}
      tabIndex={0}
    >
      {/* Icon */}
      <div className="mb-2 text-2xl text-blue-600 dark:text-blue-400">
        {icon}
      </div>

      {/* Title */}
      <h3
        id={titleId}
        className="text-lg font-semibold text-gray-900 dark:text-white"
      >
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {description}
        </p>
      )}
    </div>
  );
};

BadgeCard.displayName = "BadgeCard";

export default BadgeCard;
