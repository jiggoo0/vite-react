"use client";

import React, { FC, useState, useEffect } from "react";

import PageSection from "@/Home/components/common/PageSection";
import DashboardCard from "@/Home/components/Dashboard/ui/DashboardCard";
import DashboardSection from "@/Home/components/Dashboard/ui/DashboardSection";
import QuickActions from "@/Home/components/Dashboard/ui/QuickActions";
import RecentActivity, { Activity } from "@/Home/components/Dashboard/ui/RecentActivity";
import TeamOverview, {
  TeamMember as TeamOverviewMember,
} from "@/Home/components/Dashboard/ui/TeamOverview";
import UserStats from "@/Home/components/Dashboard/ui/UserStats";

import { useAuth } from "@/hooks/useAuth";
import { dashboardCards } from "@/config/dashboardCards";
import {
  teamMembers as initialTeamMembers,
  TeamMember as TeamMemberType,
} from "@/config/teamMembers";

const Dashboard: FC = () => {
  const { user } = useAuth();

  // -------- User Info --------
  const [username, setUsername] = useState("ผู้ใช้");
  const [role, setRole] = useState<"admin" | "manager" | "user">("user");

  // -------- Activities --------
  const [activities] = useState<Activity[]>([
    { id: "1", action: "เข้าสู่ระบบ", timestamp: "09:00 น." },
    { id: "2", action: "อัปโหลดเอกสาร", timestamp: "09:30 น." },
    { id: "3", action: "สร้างรายงาน", timestamp: "10:00 น." },
  ]);

  // -------- Stats --------
  const [stats] = useState([
    { id: "1", label: "เอกสารทั้งหมด", value: 120 },
    { id: "2", label: "สมาชิกทีม", value: initialTeamMembers.length },
    { id: "3", label: "รายงานล่าสุด", value: 15 },
    { id: "4", label: "แจ้งเตือน", value: 3 },
  ]);

  // -------- Team Members --------
  const [teamMembers] = useState<TeamMemberType[]>(initialTeamMembers);

  // -------- Dashboard Cards --------
  const [cards, setCards] = useState(dashboardCards[role]);

  // -------- Initialize User --------
  useEffect(() => {
    if (!user) return;
    setUsername(user.username);
    setRole(user.role);
    setCards(dashboardCards[user.role]);
  }, [user]);

  // -------- Map Team Members for TeamOverview --------
  const mappedMembers: TeamOverviewMember[] = teamMembers.map((m) => ({
    id: m.id,
    name: m.name,
    role: m.role,
    status: m.status === "active" ? "online" : m.status === "inactive" ? "offline" : "busy",
  }));

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Greeting */}
        <PageSection hideTitle>
          <h1 className="text-2xl font-bold text-gray-800">สวัสดี, {username}</h1>
          <p className="text-gray-600 mt-2">ยินดีต้อนรับเข้าสู่แดชบอร์ดของคุณ</p>
        </PageSection>

        {/* Quick Actions */}
        <PageSection hideTitle>
          <QuickActions
            onUpload={() => console.log("Upload triggered")}
            onReport={() => console.log("Report triggered")}
            onSettings={() => console.log("Settings triggered")}
          />
        </PageSection>

        {/* Dashboard Cards */}
        <DashboardSection>
          {cards.map((card) => (
            <DashboardCard
              key={card.title + card.description}
              title={card.title}
              description={card.description}
              realtime={false} // ปิด Realtime
            />
          ))}
        </DashboardSection>

        {/* User Stats */}
        <PageSection title="สถิติผู้ใช้">
          <UserStats stats={stats} />
        </PageSection>

        {/* Recent Activity */}
        <PageSection title="กิจกรรมล่าสุด">
          <RecentActivity activities={activities} />
        </PageSection>

        {/* Team Overview */}
        {role !== "user" && mappedMembers.length > 0 && (
          <PageSection title="ภาพรวมทีม">
            <TeamOverview members={mappedMembers} />
          </PageSection>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
