"use client";

import { FC, ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  className?: string;
}

/**
 * MetricCard
 * -------------------------
 * ✅ Metric card สำหรับ Trust Dashboard
 * ✅ Responsive + Accessible + Professional UI
 * ✅ รองรับ Icon แบบ optional
 */
const MetricCard: FC<MetricCardProps> = ({ label, value, icon, className }) => {
  const labelId = `${label.replace(/\s+/g, "-").toLowerCase()}-metric-label`;

  return (
    <div
      role="group"
      aria-labelledby={labelId}
      className={cn(
        "flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition duration-200 min-w-[160px]",
        className
      )}
      tabIndex={0}
    >
      {/* Icon */}
      {icon && (
        <div className="text-primary dark:text-primary-light flex-shrink-0 text-2xl">
          {icon}
        </div>
      )}

      {/* Label + Value */}
      <div className="flex flex-col">
        <span
          id={labelId}
          className="text-sm font-medium text-gray-500 dark:text-gray-400"
        >
          {label}
        </span>
        <span className="text-xl font-semibold text-gray-900 dark:text-white">
          {value}
        </span>
      </div>
    </div>
  );
};

MetricCard.displayName = "MetricCard";

export default MetricCard;
