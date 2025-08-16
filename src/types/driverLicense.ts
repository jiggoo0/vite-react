// ---------------------- DriverLicense Types ----------------------

/** Keys ของฟิลด์บนใบอนุญาต */
export type DriverLicenseFieldKeys =
  | 'fullName'
  | 'idNumber'
  | 'dob'
  | 'licenseNumber'
  | 'expiryDate'
  | 'photo';

/** การตั้งค่าของฟิลด์แต่ละตัวบนใบอนุญาต */
export interface DriverLicenseFieldConfig {
  top: string;          // ตำแหน่ง top (px / %)
  left: string;         // ตำแหน่ง left (px / %)
  width?: string;       // ความกว้าง (optional)
  height?: string;      // ความสูง (optional)
  fontSize: string;     // ขนาดตัวอักษร
  fontWeight?: number;  // น้ำหนักตัวอักษร (optional)
  color?: string;       // สีตัวอักษร (optional)
  label: string;        // ป้ายชื่อฟิลด์
  required?: boolean;   // ต้องกรอกหรือไม่ (optional)
}

/** Configuration ของใบอนุญาตทั้งหมด */
export interface DriverLicenseConfig {
  cardWidth: number;    // ความกว้างบัตร (px)
  cardHeight: number;   // ความสูงบัตร (px)
  bgDefault: string;    // พื้นหลังเริ่มต้น
  fields: Record<DriverLicenseFieldKeys, DriverLicenseFieldConfig>;
}

/** ข้อมูลจริงของผู้ถือใบอนุญาต */
export interface DriverLicenseData {
  fullName: string;
  idNumber: string;
  dob: string;
  licenseNumber: string;
  expiryDate: string;
  photo: string;        // URL หรือ Base64 ของรูปภาพ
}