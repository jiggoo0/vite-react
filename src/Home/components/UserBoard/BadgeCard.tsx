"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

export interface BadgeCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

/**
 * BadgeCard
 * -------------------------
 * แสดง Badge / ไอคอนพร้อมชื่อและคำอธิบาย
 * - Responsive
 * - Professional UI
 * - Accessible
 */
const BadgeCard: FC<BadgeCardProps> = ({ icon, title, description, className }) => {
  return (
    <div
      role="group"
      aria-label={title}
      className={clsx(
        "flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200 w-40 text-center",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-2">{icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
      )}
    </div>
  );
};

BadgeCard.displayName = "BadgeCard";

export default BadgeCard;