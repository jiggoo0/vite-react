// src/config/dashboardCardsConfig.tsx
// ===================================
// Dashboard Cards Configuration
// ===================================
//
// ⚠️ CONFIG นี้คือไฟล์หลักที่ควบคุมการแสดงผล Dashboard ทั้งหมด
// - กำหนดสิทธิ์การเข้าถึงแต่ละการ์ดด้วย `roles`
//    - Admin: เข้าถึงทุกการ์ด
//    - Manager: เข้าถึงทุกการ์ด
//    - User: สามารถปรับให้ล็อกบางการ์ดได้ (canAccess)
// - `quickActions` กำหนดปุ่มเฉพาะการ์ด เช่น ดาวน์โหลด, ตรวจสอบสถานะ, แชท
// - การแก้ไขไฟล์นี้มีผลต่อ UI Dashboard ทั้งหมด
//
// ตัวอย่าง DashboardCard:
// {
//   title: "ทะเบียนพาณิชย์",
//   description: "ข้อมูลทะเบียนพาณิชย์ของบริษัท",
//   roles: [UserRole.Admin, UserRole.Manager],
//   icon: Building2,
//   route: "/registry",
//   category: DashboardCategory.Registry,
//   realtime: true,
//   quickActions: [
//     { label: "ดาวน์โหลดเอกสาร", key: "download", color: "bg-blue-500" },
//     { label: "ตรวจสอบสถานะ", key: "check", color: "bg-green-500" },
//   ],
// }

import { Building2, Landmark, CreditCard, Stethoscope, FileText } from "lucide-react";

// --------------------------
// User Roles
// --------------------------
export enum UserRole {
  Admin = "admin",
  Manager = "manager",
  User = "user",
}

// --------------------------
// Dashboard Categories
// --------------------------
export enum DashboardCategory {
  Registry = "registry",
  Company = "company",
  Certificate = "certificate",
  Statement = "statement",
  Medical = "medical",
  Other = "other",
}

// --------------------------
// Quick Action Interface
// --------------------------
export interface QuickAction {
  label: string;
  key: string;
  color?: string; // Tailwind bg color
}

// --------------------------
// Dashboard Card Interface
// --------------------------
export interface DashboardCard {
  title: string;
  description: string;
  roles: UserRole[];
  icon: React.ElementType;
  route: string;
  category: DashboardCategory;
  realtime?: boolean;
  quickActions?: QuickAction[]; // ปุ่มเฉพาะการ์ด
}

// --------------------------
// Base Cards with Quick Actions
// --------------------------
const baseCards: DashboardCard[] = [
  {
    title: "ทะเบียนพาณิชย์",
    description: "ข้อมูลทะเบียนพาณิชย์ของบริษัท",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: Building2,
    route: "/registry",
    category: DashboardCategory.Registry,
    realtime: true,
    quickActions: [
      { label: "ดาวน์โหลดเอกสาร", key: "download", color: "bg-blue-500" },
      { label: "ตรวจสอบสถานะ", key: "check", color: "bg-green-500" },
    ],
  },
  {
    title: "ทะเบียนบริษัท",
    description: "รายละเอียดทะเบียนบริษัท",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: Landmark,
    route: "/company",
    category: DashboardCategory.Company,
    realtime: true,
    quickActions: [{ label: "ดาวน์โหลดเอกสาร", key: "download", color: "bg-blue-500" }],
  },
  {
    title: "ออกหนังสือรับรองเงินเดือน",
    description: "พิมพ์เอกสารรับรองเงินเดือน",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: FileText,
    route: "/salary-certificate",
    category: DashboardCategory.Certificate,
    realtime: true,
    quickActions: [{ label: "พิมพ์เอกสาร", key: "print", color: "bg-green-500" }],
  },
  {
    title: "ออกใบรับรองแพทย์",
    description: "สร้างเอกสารรับรองการรักษาพยาบาล",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: Stethoscope,
    route: "/medical-certificate",
    category: DashboardCategory.Medical,
    realtime: true,
    quickActions: [
      { label: "พิมพ์ใบรับรอง", key: "print", color: "bg-green-500" },
      { label: "แชทกับเรา", key: "chat", color: "bg-gray-500" },
    ],
  },
  // Statements
  ...["ktb", "kbank", "tmb", "bbl", "ghb", "bay"].map((bank) => ({
    title: `Statement ${bank.toUpperCase()}`,
    description: `ใบแจ้งยอดบัญชี ${bank.toUpperCase()}`,
    roles: [UserRole.Admin, UserRole.Manager],
    icon: CreditCard,
    route: `/statement/${bank}`,
    category: DashboardCategory.Statement,
    realtime: false,
    quickActions: [
      { label: "ดาวน์โหลด", key: "download", color: "bg-blue-500" },
      { label: "ตรวจสอบสถานะ", key: "check", color: "bg-green-500" },
    ],
  })),
];

// --------------------------
// Export per role
// --------------------------
export const dashboardCards: Record<UserRole, DashboardCard[]> = {
  [UserRole.Admin]: baseCards,
  [UserRole.Manager]: baseCards,
  [UserRole.User]: baseCards, // ผู้ใช้ทั่วไปเห็นทุกการ์ด (ล็อคบางการ์ดสามารถทำได้ที่ UI)
};
