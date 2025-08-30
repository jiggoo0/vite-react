"use client";

import { FC } from "react";

interface StatItem {
  id: string;
  label: string;
  value: number;
}

interface UserStatsProps {
  stats: StatItem[];
}

const UserStats: FC<UserStatsProps> = ({ stats }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4">
    {stats.map((s) => (
      <div key={s.id} className="flex flex-col items-center">
        <p className="text-xl font-bold text-gray-800">{s.value}</p>
        <p className="text-gray-500 text-sm text-center">{s.label}</p>
      </div>
    ))}
  </div>
);

export default UserStats;
