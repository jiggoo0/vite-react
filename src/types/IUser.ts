/** 🔹 User roles ของระบบ */
export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MANAGER = "manager", // เพิ่ม role ใหม่
}

/** 🔹 Interface ข้อมูลผู้ใช้งาน */
export interface IUser {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;

  /** สถานะการอนุมัติของผู้ใช้งาน */
  status: "approved" | "pending" | "rejected";

  /** รหัสคำขอ/ใบสมัคร (optional) */
  applicationId?: string;

  /** ใครเป็นผู้อนุมัติ (optional) */
  approvedBy?: string;

  dob: string; // วันเกิด (YYYY-MM-DD)
  gender: "male" | "female";

  /** 🔹 สิทธิ์ผู้ใช้งาน */
  role: UserRole;
}
