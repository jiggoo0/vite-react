export interface IUser {
  /** 🔹 รหัสผู้ใช้ */
  id: string;

  /** 🔹 ชื่อ-นามสกุล */
  fullName: string;

  /** 🔹 อีเมล */
  email: string;

  /** 🔹 เบอร์โทรศัพท์ */
  phone: string;

  /** 🔹 ที่อยู่ */
  address: string;

  /** 🔹 สถานะการอนุมัติ */
  status: "approved" | "pending" | "rejected";

  /** 🔹 รหัสใบสมัคร (ถ้ามี) */
  applicationId?: string;

  /** 🔹 ผู้อนุมัติ (ถ้ามี) */
  approvedBy?: string;

  /** 🔹 วันเกิด (รูปแบบ ISO string) */
  dob: string;

  /** 🔹 เพศ */
  gender: "male" | "female";
}
