import React from "react";

interface TrustBadgeProps {
  count: number;
  label?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
  count,
  label = "ลูกค้ามั่นใจในเรา",
}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg">
        <div className="text-2xl font-bold">{count}+</div>
        <div className="font-medium">{label}</div>
      </div>
    </div>
  );
};
