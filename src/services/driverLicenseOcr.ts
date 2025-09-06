// src/services/driverLicenseOcr.ts
import { z } from "zod";

/** ------------------------------
 * Zod Schema for Driver License OCR
 * -----------------------------
 * Validates the basic driver license data
 * - idNumber: 13-digit numeric string
 * - firstName / lastName: required
 * - dob / issueDate / expiryDate: yyyy-mm-dd or empty
 */
export const driverLicenseSchema = z.object({
  idNumber: z.string().regex(/^\d{13}$/, "เลขบัตรต้องเป็นตัวเลข 13 หลัก"),
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

/** Type inferred from schema */
export type DriverLicenseData = z.infer<typeof driverLicenseSchema>;

/** ------------------------------
 * Mock OCR function
 * -----------------------------
 * Replace with a real OCR API call
 */
export async function driverLicenseOcr(_file: File): Promise<DriverLicenseData> {
  // Mock delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mock data
  return {
    idNumber: "1234567890123",
    firstName: "สมชาย",
    lastName: "ใจดี",
    dob: "1990-01-01",
    issueDate: "2020-01-01",
    expiryDate: "2030-01-01",
  };
}

/** ------------------------------
 * Map OCR result to form default values
 * -----------------------------
 * Useful for React Hook Form or Formik
 */
export function mapDriverLicenseToForm(data: DriverLicenseData) {
  return {
    idNumber: data.idNumber,
    firstName: data.firstName,
    lastName: data.lastName,
    dob: data.dob || "",
    issueDate: data.issueDate || "",
    expiryDate: data.expiryDate || "",
  };
}
