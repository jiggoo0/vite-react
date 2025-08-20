"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

export interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  className?: string;
}

/**
 * MetricCard
 * -------------------------
 * แสดง Metric card สำหรับ Trust Dashboard
 * - Responsive
 * - Professional UI
 * - Accessible
 * - รองรับ Icon แบบ optional
 */
const MetricCard: FC<MetricCardProps> = ({ label, value, icon, className }) => {
  return (
    <div
      role="group"
      aria-label={label}
      className={clsx(
        "flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[160px]",
        className
      )}
    >
      {/* Icon */}
      {icon && <div className="text-primary dark:text-primary-light">{icon}</div>}

      {/* Label + Value */}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
        <span className="text-xl font-semibold text-gray-900 dark:text-white">{value}</span>
      </div>
    </div>
  );
};

MetricCard.displayName = "MetricCard";

export default MetricCard;