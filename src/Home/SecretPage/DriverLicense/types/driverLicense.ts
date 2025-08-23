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
  id: DriverLicenseFieldKeys;                   // key ของ field
  top: string;                                  // ระยะห่างจาก top
  left: string;                                 // ระยะห่างจาก left
  width?: string;                               // ความกว้างของ field (optional)
  height?: string;                              // ความสูงของ field (optional)
  fontSize?: string;                            // ขนาดตัวอักษร (optional)
  fontWeight?: string;                          // น้ำหนักตัวอักษร (optional)
  color?: string;                               // สีตัวอักษร (optional)
  type?: "text" | "date" | "photo" | "select"; // ประเภท field (optional)
  options?: string[];                           // สำหรับ select field (optional)
}