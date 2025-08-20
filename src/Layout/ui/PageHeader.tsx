"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode; // ปุ่มหรือลิงก์ที่วางด้านขวา
  className?: string;
}

/**
 * PageHeader Component
 * --------------------
 * - ใช้แสดงหัวข้อหลักของหน้า
 * - รองรับ subtitle และ action buttons
 * - Flat, professional UI
 */
const PageHeader: FC<PageHeaderProps> = ({
  title,
  subtitle,
  actions,
  className,
}) => {
  return (
    <header
      className={clsx(
        "w-full border-b border-base-200 dark:border-zinc-800 mb-6 pb-4",
        "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
        className
      )}
      aria-label="ส่วนหัวของหน้า"
    >
      {/* Title + Subtitle */}
      <div>
        <h1 className="text-xl font-semibold text-base-content dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </div>

      {/* Actions */}
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
};

PageHeader.displayName = "PageHeader";

export default PageHeader;