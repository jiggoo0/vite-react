"use client";

import { FC } from "react";

interface Stat {
  id: string;
  label: string;
  value: number;
}

interface UserStatsProps {
  stats: Stat[];
}

const UserStats: FC<UserStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition-shadow text-center"
        >
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">{stat.value}</div>
          <div className="mt-1 text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
