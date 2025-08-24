/**
 * Keys ของ field ในใบขับขี่
 */
export type DriverLicenseFieldKeys = keyof DriverLicenseData;

/**
 * Type ของข้อมูลใบขับขี่
 */
export interface DriverLicenseData {
  fullName: string;       // ชื่อ-นามสกุล
  idNumber: string;       // เลขบัตรประชาชน / ใบขับขี่
  dob: string;            // วันเกิด
  issueDate: string;      // วันออกบัตร
  expiryDate: string;     // วันหมดอายุ
  address: string;        // ที่อยู่
  photo?: string;         // URL รูปถ่าย (optional)
  licenseType: string;    // ประเภทใบขับขี่
  bloodType: string;      // หมู่เลือด
}

/**
 * Config สำหรับวาง field บน template ใบขับขี่
 */
export interface DriverLicenseFieldConfig {
  id: DriverLicenseFieldKeys;
  top: string;
  left: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  type?: "text" | "date" | "photo" | "select";
  options?: string[];
}

/**
 * Mock Data ตัวอย่าง
 */
export const mockDriverLicense: DriverLicenseData = {
  fullName: "John Doe",
  idNumber: "1234567890123",
  dob: "1990-01-01",
  issueDate: "2023-01-01",
  expiryDate: "2028-01-01",
  address: "123 Main Street, Bangkok, Thailand",
  photo: "/assets/images/driver-photo.png",
  licenseType: "B",
  bloodType: "O",
};