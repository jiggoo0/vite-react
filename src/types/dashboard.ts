// ==========================
// Dashboard Types (Refactored)
// ==========================

export enum UserRole {
  Admin = "admin",
  Manager = "manager",
  User = "user",
}

export enum DashboardCategory {
  Registry = "registry",
  Company = "company",
  Certificate = "certificate",
  Statement = "statement",
  Medical = "medical",
  Other = "other",
}

export interface DashboardCard {
  title: string;
  description: string;
  roles?: UserRole[]; // สิทธิ์ที่สามารถเข้าถึง
  realtime?: boolean; // แสดง badge realtime
  icon?: React.ElementType; // ใช้ component icon ตรงๆ (แทน string)
  route: string; // path สำหรับ navigation (required)
  category: DashboardCategory; // หมวดหมู่ของการ์ด (required)
}
