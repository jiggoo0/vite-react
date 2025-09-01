// src/Home/components/Dashboard/Dashboard.tsx
"use client";

import React, { FC, useState, useEffect } from "react";
import DashboardCard from "@/Home/components/Dashboard/ui/DashboardCard";
import DashboardSection from "@/Home/components/Dashboard/ui/DashboardSection";
import QuickActions from "@/Home/components/Dashboard/ui/QuickActions";
import RecentActivity, { Activity } from "@/Home/components/Dashboard/ui/RecentActivity";
import UserStats from "@/Home/components/Dashboard/ui/UserStats";
import BlurContact from "@/Home/components/Dashboard/common/BlurContact/BlurContact";
import DocumentDownload from "@/Home/components/Dashboard/common/DocumentDownload/DocumentDownload";
import DashboardGreeting from "@/Home/components/Dashboard/ui/DashboardGreeting";
import { useAuth } from "@/hooks/useAuth";
import { dashboardCards, UserRole } from "@/config/dashboardCardsConfig";

// --------------------------
// Mock Data
// --------------------------
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
  // --------------------------
  // Authentication
  // --------------------------
  const { user } = useAuth();
  const [username, setUsername] = useState("ผู้ใช้");
  const [role, setRole] = useState<UserRole>(UserRole.User);

  useEffect(() => {
    if (!user) return;
    setUsername(user.username ?? "ผู้ใช้");
    setRole((user.role as UserRole) ?? UserRole.User);
  }, [user]);

  // --------------------------
  // Prepare Dashboard Cards
  // --------------------------
  const cards =
    dashboardCards[role]?.map((card) => ({
      ...card,
      canAccess: card.roles.includes(role),
    })) ?? [];

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Greeting Section */}
        <DashboardGreeting username={username} />

        {/* Quick Actions Section */}
        <QuickActions
          onContact={() => console.log("Contact team triggered")}
          onCheckStatus={() => console.log("Check status triggered")}
          onDownload={() => console.log("Download triggered")}
          onPay={() => console.log("Pay triggered")}
        />

        {/* Dashboard Cards Section */}
        <DashboardSection>
          {cards.map((card) => (
            <DashboardCard
              key={card.route}
              title={card.title}
              description={card.description}
              icon={card.icon}
              route={card.route}
              realtime={card.realtime}
              canAccess={card.canAccess}
            />
          ))}
        </DashboardSection>

        {/* User Stats Section */}
        <UserStats stats={mockStats} />

        {/* Recent Activity Section */}
        <RecentActivity activities={mockActivities} />

        {/* Additional Components */}
        <BlurContact />
        <DocumentDownload />
      </div>
    </main>
  );
};

export default Dashboard;
