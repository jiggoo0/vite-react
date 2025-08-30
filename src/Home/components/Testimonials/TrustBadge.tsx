"use client";

import { FC } from "react";
import { cn } from "@/utils/cn";

interface TrustBadgeProps {
  /** จำนวนลูกค้าหรือสถิติ */
  count: number;
  /** คำอธิบายใต้จำนวน */
  label?: string;
  /** คลาสเสริมเพิ่มเติม */
  className?: string;
}

const TrustBadge: FC<TrustBadgeProps> = ({ count, label = "ลูกค้ามั่นใจในเรา", className }) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-2 md:gap-3 px-4 py-2 border border-gray-300 bg-white text-gray-900",
        className
      )}
      role="status"
      aria-roledescription="statistic"
      aria-live="polite"
      aria-label={`${count}+ ${label}`}
      title={`${count}+ ${label}`}
      tabIndex={0}
    >
      {/* จำนวน */}
      <span className="text-2xl md:text-3xl font-bold text-gray-900">{count}+</span>

      {/* คำอธิบาย */}
      <span className="text-sm md:text-base font-medium text-gray-700 text-center md:text-left">
        {label}
      </span>
    </div>
  );
};

export default TrustBadge;
