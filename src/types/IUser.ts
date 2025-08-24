/** 🔹 สิทธิ์ผู้ใช้งานในระบบ */
export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MANAGER = "manager", // เพิ่ม role ใหม่
}

/** 🔹 สถานะผู้ใช้งาน */
export type UserStatus = "approved" | "pending" | "rejected";

/** 🔹 เพศ */
export type Gender = "male" | "female";

/** 🔹 Interface ข้อมูลผู้ใช้งาน */
export interface IUser {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;

  /** สถานะการอนุมัติของผู้ใช้งาน */
  status: UserStatus;

  /** รหัสคำขอ/ใบสมัคร (optional) */
  applicationId?: string;

  /** ใครเป็นผู้อนุมัติ (optional) */
  approvedBy?: string;

  /** วันเกิด (YYYY-MM-DD) */
  dob: string;

  /** เพศ */
  gender: Gender;

  /** สิทธิ์ผู้ใช้งาน */
  role: UserRole;
}
