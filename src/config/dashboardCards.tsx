// src/config/dashboardCards.tsx
// ==========================
// Dashboard Cards Configuration
// ==========================

import { Building2, Landmark, CreditCard, Stethoscope, FileText } from "lucide-react";

// --------------------------
// User Roles (enum)
// --------------------------
export enum UserRole {
  Admin = "admin",
  Manager = "manager",
  User = "user",
}

// --------------------------
// Dashboard Categories (enum)
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
// Dashboard Card Interface
// --------------------------
export interface DashboardCard {
  title: string;
  description: string;
  roles: UserRole[]; // สิทธิ์เข้าถึง
  icon: React.ElementType; // lucide-react icon component
  route: string; // path สำหรับ navigation
  category: DashboardCategory; // หมวดหมู่ของการ์ด
  realtime?: boolean; // แสดง badge realtime
}

// --------------------------
// Base Cards
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
  },
  {
    title: "ทะเบียนบริษัท",
    description: "รายละเอียดทะเบียนบริษัท",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: Landmark,
    route: "/company",
    category: DashboardCategory.Company,
    realtime: true,
  },
  {
    title: "ออกหนังสือรับรองเงินเดือน",
    description: "พิมพ์เอกสารรับรองเงินเดือน",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: FileText,
    route: "/salary-certificate",
    category: DashboardCategory.Certificate,
    realtime: true,
  },
  {
    title: "ออกใบรับรองแพทย์",
    description: "สร้างเอกสารรับรองการรักษาพยาบาล",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: Stethoscope,
    route: "/medical-certificate",
    category: DashboardCategory.Medical,
    realtime: true,
  },
  {
    title: "Statement KTB",
    description: "ใบแจ้งยอดบัญชี KTB",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: CreditCard,
    route: "/statement/ktb",
    category: DashboardCategory.Statement,
    realtime: false,
  },
  {
    title: "Statement KBANK",
    description: "ใบแจ้งยอดบัญชี KBANK",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: CreditCard,
    route: "/statement/kbank",
    category: DashboardCategory.Statement,
    realtime: false,
  },
  {
    title: "Statement TMB",
    description: "ใบแจ้งยอดบัญชี TMB",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: CreditCard,
    route: "/statement/tmb",
    category: DashboardCategory.Statement,
    realtime: false,
  },
  {
    title: "Statement BBL",
    description: "ใบแจ้งยอดบัญชี BBL",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: CreditCard,
    route: "/statement/bbl",
    category: DashboardCategory.Statement,
    realtime: false,
  },
  {
    title: "Statement GHB",
    description: "ใบแจ้งยอดบัญชี GHB",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: CreditCard,
    route: "/statement/ghb",
    category: DashboardCategory.Statement,
    realtime: false,
  },
  {
    title: "Statement BAY",
    description: "ใบแจ้งยอดบัญชี BAY",
    roles: [UserRole.Admin, UserRole.Manager],
    icon: CreditCard,
    route: "/statement/bay",
    category: DashboardCategory.Statement,
    realtime: false,
  },
];

// --------------------------
// Export per role
// --------------------------
export const dashboardCards: Record<UserRole, DashboardCard[]> = {
  [UserRole.Admin]: baseCards,
  [UserRole.Manager]: baseCards,
  [UserRole.User]: baseCards,
};
