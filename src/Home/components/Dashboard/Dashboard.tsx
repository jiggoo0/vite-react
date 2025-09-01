"use client";

import React, { FC, useState, useEffect } from "react";
import PageSection from "@/Home/components/common/PageSection";
import DashboardCard from "@/Home/components/Dashboard/ui/DashboardCard";
import DashboardSection from "@/Home/components/Dashboard/ui/DashboardSection";
import QuickActions from "@/Home/components/Dashboard/ui/QuickActions";
import RecentActivity, { Activity } from "@/Home/components/Dashboard/ui/RecentActivity";
import UserStats from "@/Home/components/Dashboard/ui/UserStats";
import BlurContact from "@/Home/components/Dashboard/common/BlurContact/BlurContact";
import DocumentDownload from "@/Home/components/Dashboard/common/DocumentDownload/DocumentDownload";
import { useAuth } from "@/hooks/useAuth";
import { dashboardCards, UserRole } from "@/config/dashboardCards";

// -------- Mock Data --------
const mockActivities: Activity[] = [
  { id: "1", action: "เข้าสู่ระบบ", timestamp: "09:00 น." },
  { id: "2", action: "อัปโหลดเอกสาร", timestamp: "09:30 น." },
  { id: "3", action: "สร้างรายงาน", timestamp: "10:00 น." },
];

const mockStats = [
  { id: "1", label: "เอกสารทั้งหมด", value: 120 },
  { id: "2", label: "สมาชิกทีม", value: 5 },
  { id: "3", label: "รายงานล่าสุด", value: 15 },
  { id: "4", label: "แจ้งเตือน", value: 3 },
];

const Dashboard: FC = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("ผู้ใช้");
  const [role, setRole] = useState<UserRole>(UserRole.User);

  useEffect(() => {
    if (!user) return;
    setUsername(user.username ?? "ผู้ใช้");
    setRole((user.role as UserRole) ?? UserRole.User);
  }, [user]);

  const cards = dashboardCards[role] ?? [];

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
              key={card.route}
              title={card.title}
              description={card.description}
              icon={card.icon}
              _route={card.route} // แก้ตรงนี้เป็น _route
              realtime={card.realtime}
              canAccess={card.roles.includes(role)}
            />
          ))}
        </DashboardSection>

        {/* User Stats */}
        <PageSection title="สถิติผู้ใช้">
          <UserStats stats={mockStats} />
        </PageSection>

        {/* Recent Activity */}
        <PageSection title="กิจกรรมล่าสุด">
          <RecentActivity activities={mockActivities} />
        </PageSection>

        {/* Additional Components */}
        <BlurContact />
        <DocumentDownload />
      </div>
    </main>
  );
};

export default Dashboard;
