// src/Home/AdminTools/DriverLicense/types/driverLicense.ts

/** ------------------------------
 * Type: Driver License Data
 * ----------------------------- */
export interface DriverLicenseData {
  fullName: string; // ชื่อ-นามสกุล
  idNumber: string; // เลขบัตรประชาชน / ใบขับขี่
  dob: string; // วันเกิด (YYYY-MM-DD)
  issueDate: string; // วันออกบัตร
  expiryDate: string; // วันหมดอายุ
  address: string; // ที่อยู่
  photo?: string; // URL รูปถ่าย (optional)
  licenseType: string; // ประเภทใบขับขี่ (A, B, C, D)
  bloodType: string; // หมู่เลือด (A, B, AB, O)
}

/** ------------------------------
 * Field Keys
 * ----------------------------- */
export type DriverLicenseFieldKeys = keyof DriverLicenseData;

/** ------------------------------
 * Field Config for Card Rendering
 * ----------------------------- */
export interface DriverLicenseFieldConfig {
  id: DriverLicenseFieldKeys;
  label?: string; // optional label
  top: string; // CSS top position
  left: string; // CSS left position
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  type?: "text" | "date" | "photo" | "select";
  options?: string[]; // for select fields
}

/** ------------------------------
 * Mock Data for Testing / Preview
 * ----------------------------- */
export const mockDriverLicense: DriverLicenseData = {
  fullName: "John Doe",
  idNumber: "1234567890123",
  dob: "1990-01-01",
  issueDate: "2023-01-01",
  expiryDate: "2028-01-01",
  address: "123 Main Street, City, Country",
  photo: "/assets/images/driver-photo.webp",
  licenseType: "B",
  bloodType: "O",
};
