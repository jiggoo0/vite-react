"use client";

import { FC, useEffect } from "react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: "online" | "offline" | "busy";
}

interface TeamOverviewProps {
  members: TeamMember[];
  setMembers?: React.Dispatch<React.SetStateAction<TeamMember[]>>;
}

const statusColors: Record<TeamMember["status"], string> = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-yellow-500",
};

const TeamOverview: FC<TeamOverviewProps> = ({ members, setMembers }) => {
  useEffect(() => {
    if (!setMembers) return;
    const interval = setInterval(() => {
      setMembers((prev) =>
        prev.map((m) => {
          const statuses: TeamMember["status"][] = ["online", "offline", "busy"];
          return Math.random() < 0.3
            ? { ...m, status: statuses[Math.floor(Math.random() * 3)] }
            : m;
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [setMembers]);

  if (!members?.length)
    return <div className="p-6 bg-white rounded-xl shadow-sm text-gray-500">ไม่มีข้อมูลทีม</div>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <ul className="divide-y">
        {members.map((m) => (
          <li key={m.id} className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-800 font-medium">{m.name}</p>
              <p className="text-sm text-gray-500">{m.role}</p>
            </div>
            <span className={`w-3 h-3 rounded-full ${statusColors[m.status]}`} title={m.status} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamOverview;
