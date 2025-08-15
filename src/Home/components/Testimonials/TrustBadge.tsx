import React, { FC } from "react";

interface TrustBadgeProps {
  count: number;
  label?: string;
  className?: string; // สำหรับ custom style เพิ่มเติม
}

export const TrustBadge: FC<TrustBadgeProps> = ({
  count,
  label = "ลูกค้ามั่นใจในเรา",
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg"
        role="status"
        aria-label={`${count}+ ${label}`}
      >
        <span className="text-2xl font-extrabold text-white">{count}+</span>
        <span className="text-sm font-medium text-white">{label}</span>
      </div>
    </div>
  );
};
