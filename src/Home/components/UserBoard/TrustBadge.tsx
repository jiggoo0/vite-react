"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

export interface TrustBadgeProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

/**
 * TrustBadge
 * -------------------------
 * ✅ Badge card สำหรับ Trust Dashboard
 * - รองรับ Icon
 * - Responsive
 * - Accessible
 */
const TrustBadge: FC<TrustBadgeProps> = ({ icon, title, description, className }) => {
  return (
    <div
      role="group"
      aria-label={title}
      className={clsx(
        "flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200 w-44 text-center",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-3 text-primary dark:text-primary-light">{icon}</div>

      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
    </div>
  );
};

TrustBadge.displayName = "TrustBadge";

export default TrustBadge;
