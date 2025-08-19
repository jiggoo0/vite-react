// src/services/driverLicenseOcr.ts
import { z } from "zod";

/**
 * Schema สำหรับข้อมูลจากใบขับขี่
 */
export const driverLicenseSchema = z.object({
  idNumber: z.string().regex(/^\d{13}$/, "เลขบัตรต้องเป็นตัวเลข 13 หลัก"),
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  dob: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "วันเกิดไม่ถูกต้อง")
    .optional(),
  issueDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "วันที่ออกบัตรไม่ถูกต้อง")
    .optional(),
  expiryDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "วันหมดอายุไม่ถูกต้อง")
    .optional(),
});

export type DriverLicenseData = z.infer<typeof driverLicenseSchema>;

/**
 * ฟังก์ชัน OCR (mock ไว้ก่อน)
 * @param file ไฟล์ภาพใบขับขี่
 * @returns DriverLicenseData
 */
export async function driverLicenseOcr(
  _file: File
): Promise<DriverLicenseData> {
  // TODO: เรียก OCR API จริงเมื่อมี
  return {
    idNumber: "1234567890123",
    firstName: "สมชาย",
    lastName: "ใจดี",
    dob: "1990-01-01",
    issueDate: "2020-01-01",
    expiryDate: "2030-01-01",
  };
}

/**
 * แปลงผล OCR → ค่า default ของฟอร์ม
 */
export function mapDriverLicenseToForm(
  data: DriverLicenseData
): Record<string, string> {
  return {
    idNumber: data.idNumber,
    firstName: data.firstName,
    lastName: data.lastName,
    dob: data.dob ?? "",
    issueDate: data.issueDate ?? "",
    expiryDate: data.expiryDate ?? "",
  };
}
