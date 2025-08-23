/**
 * Keys สำหรับ field ของใบขับขี่
 */
export type DriverLicenseFieldKeys = keyof DriverLicenseData;

/**
 * Type ของข้อมูลใบขับขี่
 */
export interface DriverLicenseData {
  fullName: string;       // ชื่อ-นามสกุล
  idNumber: string;       // เลขบัตรประชาชน/ใบขับขี่
  dob: string;            // วันเกิด
  issueDate: string;      // วันออกบัตร
  expiryDate: string;     // วันหมดอายุ
  address: string;        // ที่อยู่
  photo?: string;         // URL รูปถ่าย (optional)
  licenseType: string;    // ประเภทใบขับขี่
  bloodType: string;      // หมู่เลือด
}

/**
 * Config สำหรับการวาง field บน template
 */
export interface DriverLicenseFieldConfig {
  id: DriverLicenseFieldKeys;                // key ของ field
  top: string;                               // ระยะห่างจาก top ของบัตร
  left: string;                              // ระยะห่างจาก left ของบัตร
  width?: string;                            // ความกว้างของ field
  height?: string;                           // ความสูงของ field
  fontSize?: string;                         // ขนาดตัวอักษร
  fontWeight?: string;                       // น้ำหนักตัวอักษร
  color?: string;                            // สีตัวอักษร
  type?: "text" | "date" | "photo" | "select"; // type ของ field
  options?: string[];                        // สำหรับ select field
}