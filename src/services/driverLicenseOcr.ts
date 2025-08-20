// src/services/driverLicenseOcr.ts
import { z } from "zod";

/**
 * 🔹 Schema สำหรับข้อมูลใบขับขี่
 * - idNumber: ตัวเลข 13 หลัก
 * - firstName / lastName: ต้องมีค่า
 * - dob / issueDate / expiryDate: yyyy-mm-dd หรือว่าง
 */
export const driverLicenseSchema = z.object({
  idNumber: z
    .string()
    .regex(/^\d{13}$/, "เลขบัตรต้องเป็นตัวเลข 13 หลัก"),
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  dob: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "วันเกิดไม่ถูกต้อง")
    .optional()
    .or(z.literal("")),
  issueDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "วันที่ออกบัตรไม่ถูกต้อง")
    .optional()
    .or(z.literal("")),
  expiryDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "วันหมดอายุไม่ถูกต้อง")
    .optional()
    .or(z.literal("")),
});

export type DriverLicenseData = z.infer<typeof driverLicenseSchema>;

/**
 * 🔹 Mock OCR function
 * - แทนที่ด้วย OCR API จริงได้
 * @param _file ไฟล์ภาพใบขับขี่
 * @returns Promise<DriverLicenseData>
 */
export async function driverLicenseOcr(
  _file: File
): Promise<DriverLicenseData> {
  // TODO: เปลี่ยนเป็นเรียก OCR API จริง
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
 * 🔹 Mapping OCR result → Form default values
 * - ใช้สำหรับ React Hook Form / Formik
 * @param data DriverLicenseData
 */
export function mapDriverLicenseToForm(data: DriverLicenseData) {
  return {
    idNumber: data.idNumber,
    firstName: data.firstName,
    lastName: data.lastName,
    dob: data.dob ?? "",
    issueDate: data.issueDate ?? "",
    expiryDate: data.expiryDate ?? "",
  };
}