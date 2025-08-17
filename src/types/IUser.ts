export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MANAGER = "manager", // เพิ่ม role ใหม่
}

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  status: "approved" | "pending" | "rejected";
  applicationId?: string;
  approvedBy?: string;
  dob: string;
  gender: "male" | "female";

  /** 🔹 สิทธิ์ผู้ใช้งาน */
  role: UserRole;
}