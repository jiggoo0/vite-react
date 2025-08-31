// src/Home/components/Dashboard/Dashboard.tsx
"use client";

import React, { FC, useState, useEffect } from "react";

// ==========================
// Common Components
// ==========================
import PageSection from "@/Home/components/common/PageSection";

// ==========================
// Dashboard UI Components
// ==========================
import DashboardCard from "@/Home/components/Dashboard/ui/DashboardCard";
import DashboardSection from "@/Home/components/Dashboard/ui/DashboardSection";
import QuickActions from "@/Home/components/Dashboard/ui/QuickActions";
import RecentActivity, { Activity } from "@/Home/components/Dashboard/ui/RecentActivity";
import UserStats from "@/Home/components/Dashboard/ui/UserStats";

// ==========================
// Dashboard Common Components
// ==========================
import BlurContact from "@/Home/components/Dashboard/common/BlurContact/BlurContact";
import DocumentDownload from "@/Home/components/Dashboard/common/DocumentDownload/DocumentDownload";

// ==========================
// Hooks
// ==========================
import { useAuth } from "@/hooks/useAuth";

// ==========================
// Config / Types
// ==========================
import { dashboardCards, DashboardCard as CardType, UserRole } from "@/config/dashboardCards";

const Dashboard: FC = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("ผู้ใช้");
  const [role, setRole] = useState<UserRole>("user");

  // ตั้งค่า username และ role จาก user object
  useEffect(() => {
    if (!user) return;
    setUsername(user.username ?? "ผู้ใช้");
    setRole((user.role as UserRole) ?? "user");
  }, [user]);

  // รวมการ์ดทั้งหมด และลบซ้ำตาม title
  const cardMap: Record<string, CardType> = {};
  [...dashboardCards.admin, ...dashboardCards.manager, ...dashboardCards.user].forEach((card) => {
    if (!cardMap[card.title]) cardMap[card.title] = card;
  });
  const allCards = Object.values(cardMap);

  // Mock data สำหรับ Recent Activity
  const activities: Activity[] = [
    { id: "1", action: "เข้าสู่ระบบ", timestamp: "09:00 น." },
    { id: "2", action: "อัปโหลดเอกสาร", timestamp: "09:30 น." },
    { id: "3", action: "สร้างรายงาน", timestamp: "10:00 น." },
  ];

  // Mock data สำหรับ User Stats
  const stats = [
    { id: "1", label: "เอกสารทั้งหมด", value: 120 },
    { id: "2", label: "สมาชิกทีม", value: 5 },
    { id: "3", label: "รายงานล่าสุด", value: 15 },
    { id: "4", label: "แจ้งเตือน", value: 3 },
  ];

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
          {allCards.map((card) => {
            const canAccess = card.roles?.includes(role) ?? false;
            return (
              <DashboardCard
                key={card.title}
                title={card.title}
                description={card.description}
                canAccess={canAccess}
              />
            );
          })}
        </DashboardSection>

        {/* User Stats */}
        <PageSection title="สถิติผู้ใช้">
          <UserStats stats={stats} />
        </PageSection>

        {/* Recent Activity */}
        <PageSection title="กิจกรรมล่าสุด">
          <RecentActivity activities={activities} />
        </PageSection>

        {/* Additional Components */}
        <BlurContact />
        <DocumentDownload />
      </div>
    </main>
  );
};

export default Dashboard;
