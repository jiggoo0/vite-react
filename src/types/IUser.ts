/** 🔹 สิทธิ์ผู้ใช้งานในระบบ */
export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MANAGER = "manager", // ✅ รองรับ role ใหม่
}

/** 🔹 สถานะผู้ใช้งาน */
export enum UserStatus {
  APPROVED = "approved",
  PENDING = "pending",
  REJECTED = "rejected",
}

/** 🔹 เพศ */
export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

/** 🔹 Interface ข้อมูลผู้ใช้งาน */
export interface IUser {
  id: string;
  fullName: string;
  email: string;

  /** เบอร์โทร (optional สำหรับบาง use case) */
  phone?: string;

  /** ที่อยู่ (optional สำหรับบาง use case) */
  address?: string;

  /** สถานะการอนุมัติของผู้ใช้งาน */
  status: UserStatus;

  /** รหัสคำขอ/ใบสมัคร (optional) */
  applicationId?: string;

  /** ใครเป็นผู้อนุมัติ (optional) */
  approvedBy?: string;

  /** วันเกิด (ควรใช้ Date object แทน string) */
  dob: Date;

  /** เพศ */
  gender: Gender;

  /** สิทธิ์ผู้ใช้งาน */
  role: UserRole;
}
