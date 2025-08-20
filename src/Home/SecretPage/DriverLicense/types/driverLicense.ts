/**
 * 🔹 Keys สำหรับ field ของใบขับขี่
 */
export type DriverLicenseFieldKeys =
  | "fullName"
  | "idNumber"
  | "dob"
  | "issueDate"
  | "expiryDate"
  | "address"
  | "photo"
  | "licenseType"
  | "bloodType";

/**
 * 🔹 Type ของข้อมูลใบขับขี่
 */
export interface DriverLicenseData {
  fullName: string;       // ชื่อ-นามสกุล
  idNumber: string;       // เลขบัตรประชาชน/ใบขับขี่
  dob: string;            // วันเกิด
  issueDate: string;      // วันออกบัตร
  expiryDate: string;     // วันหมดอายุ
  address: string;        // ที่อยู่
  photo: string;          // URL รูปถ่าย
  licenseType: string;    // ประเภทใบขับขี่
  bloodType: string;      // หมู่เลือด
}

/**
 * 🔹 Config สำหรับการวาง field บน template
 */
export interface DriverLicenseFieldConfig {
  top: string;            // ระยะห่างจาก top ของบัตร
  left: string;           // ระยะห่างจาก left ของบัตร
  fontSize?: string;      // ขนาดตัวอักษร
  fontWeight?: string;    // น้ำหนักตัวอักษร
  color?: string;         // สีตัวอักษร
  width?: string;         // ความกว้างของ field
  height?: string;        // ความสูงของ field
}