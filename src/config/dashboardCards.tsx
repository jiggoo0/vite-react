// src/config/dashboardCards.ts
// ==========================
// Dashboard Cards - Mock Data per Role
// ใช้ชุดเดียวกันสำหรับทุก role
// รองรับ icon, route, realtime badge
// ==========================

export type UserRole = "admin" | "manager" | "user";

export interface DashboardCard {
  title: string;
  description: string;
  roles?: UserRole[]; // สิทธิ์เข้าถึง
  realtime?: boolean; // แสดง badge realtime
  icon?: string; // ชื่อ icon (สำหรับ UI)
  route?: string; // path สำหรับ navigation
}

// Base cards
const baseCards: DashboardCard[] = [
  {
    title: "ทะเบียนพาณิชย์",
    description: "ข้อมูลทะเบียนพาณิชย์ของบริษัท",
    roles: ["admin", "manager", "user"],
    icon: "building",
    route: "/registry",
    realtime: false,
  },
  {
    title: "ทะเบียนบริษัท",
    description: "รายละเอียดทะเบียนบริษัท",
    roles: ["admin", "manager", "user"],
    icon: "office-building",
    route: "/company",
    realtime: false,
  },
  {
    title: "ออกหนังสือรับรองเงินเดือน",
    description: "พิมพ์เอกสารรับรองเงินเดือน",
    roles: ["admin", "manager", "user"],
    icon: "document",
    route: "/salary-certificate",
    realtime: true,
  },
  {
    title: "ออกใบรับรองแพทย์",
    description: "สร้างเอกสารรับรองการรักษาพยาบาล",
    roles: ["admin", "manager", "user"],
    icon: "medkit",
    route: "/medical-certificate",
    realtime: true,
  },
  {
    title: "Statement KTB",
    description: "ใบแจ้งยอดบัญชี KTB",
    roles: ["admin", "manager", "user"],
    icon: "credit-card",
    route: "/statement/ktb",
  },
  {
    title: "Statement KBANK",
    description: "ใบแจ้งยอดบัญชี KBANK",
    roles: ["admin", "manager", "user"],
    icon: "credit-card",
    route: "/statement/kbank",
  },
  {
    title: "Statement TMB",
    description: "ใบแจ้งยอดบัญชี TMB",
    roles: ["admin", "manager", "user"],
    icon: "credit-card",
    route: "/statement/tmb",
  },
  {
    title: "Statement BBL",
    description: "ใบแจ้งยอดบัญชี BBL",
    roles: ["admin", "manager", "user"],
    icon: "credit-card",
    route: "/statement/bbl",
  },
  {
    title: "Statement GHB",
    description: "ใบแจ้งยอดบัญชี GHB",
    roles: ["admin", "manager", "user"],
    icon: "credit-card",
    route: "/statement/ghb",
  },
  {
    title: "Statement BAY",
    description: "ใบแจ้งยอดบัญชี BAY",
    roles: ["admin", "manager", "user"],
    icon: "credit-card",
    route: "/statement/bay",
  },
];

// Export สำหรับทุก role
export const dashboardCards: Record<UserRole, DashboardCard[]> = {
  admin: baseCards,
  manager: baseCards,
  user: baseCards,
};
