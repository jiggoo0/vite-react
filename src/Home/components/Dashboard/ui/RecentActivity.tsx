"use client";

import { FC } from "react";

// Activity interface
export interface Activity {
  id: string;
  action: string;
  timestamp: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

/**
 * RecentActivity
 * -------------------------
 * แสดงรายการกิจกรรมล่าสุดของผู้ใช้
 * - ถ้าไม่มีข้อมูล จะแสดงข้อความ "ไม่มีข้อมูลกิจกรรมล่าสุด"
 * - แสดงกิจกรรมพร้อม timestamp
 */
const RecentActivity: FC<RecentActivityProps> = ({ activities }) => {
  if (!activities?.length) {
    return (
      <div className="p-6 bg-white rounded-xl shadow-sm text-gray-500">
        ไม่มีข้อมูลกิจกรรมล่าสุด
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <ul className="space-y-3">
        {activities.map((a) => (
          <li key={a.id} className="flex justify-between items-center border-b last:border-0 pb-2">
            <span className="text-gray-700">{a.action}</span>
            <span className="text-sm text-gray-400">{a.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
