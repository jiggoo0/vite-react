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
        <div key={stat.id} className="p-4 bg-white rounded shadow text-center">
          <div className="text-lg font-bold">{stat.value}</div>
          <div className="text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
