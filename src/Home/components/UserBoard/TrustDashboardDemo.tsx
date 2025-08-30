"use client";

import { FC } from "react";
import TrustDashboard, { Metric, Stat, Badge } from "./TrustDashboard";

/** -----------------------------
 * Mock Data
 * -----------------------------
 */
const metrics: Metric[] = [
  { key: "exp", label: "ประสบการณ์ทีม", value: "10 ปี" },
  { key: "satisfaction", label: "ความพึงพอใจ", value: "99%" },
  { key: "sla", label: "ส่งทันเวลา", value: "100%" },
  { key: "privacy", label: "ความลับ", value: "กฎข้อแรก" },
];

const stats: Stat[] = [
  { key: "customers", label: "ลูกค้ามั่นใจในเรา", count: 1200 },
  { key: "projects", label: "โปรเจกต์สำเร็จ", count: 350 },
  { key: "partners", label: "พันธมิตร", count: 25 },
];

/** -----------------------------
 * Badges (ปรับค่า iconName ให้ตรง IconName)
 * -----------------------------
 */
const badges: Badge[] = [
  {
    id: 1,
    iconName: "check",
    title: "Security",
    description: "ข้อมูลปลอดภัยและเชื่อถือได้",
  },
  {
    id: 2,
    iconName: "check",
    title: "Certified Service",
    description: "ได้รับการรับรองมาตรฐานคุณภาพ",
  },
  {
    id: 3,
    iconName: "user",
    title: "Premium Experience",
    description: "ประสบการณ์ใช้งานราบรื่นและมั่นใจ",
  },
];

/** -----------------------------
 * TrustDashboardDemo
 * -----------------------------
 */
const TrustDashboardDemo: FC = () => (
  <TrustDashboard metrics={metrics} stats={stats} badges={badges} />
);

TrustDashboardDemo.displayName = "TrustDashboardDemo";

export default TrustDashboardDemo;
