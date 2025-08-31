"use client";

import { FC } from "react";

export interface Activity {
  id: string;
  action: string;
  timestamp: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity: FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="space-y-2">
      {activities.map((act) => (
        <div key={act.id} className="p-3 bg-white rounded shadow-sm flex justify-between">
          <span>{act.action}</span>
          <span className="text-gray-400 text-sm">{act.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
