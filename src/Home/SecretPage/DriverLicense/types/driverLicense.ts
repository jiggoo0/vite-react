// ✅ src/Home/SecretPage/DriverLicense/types/driverLicense.ts

/**
 * ข้อมูลจริงของผู้ถือใบอนุญาต
 */
export interface DriverLicenseData {
  fullName: string;
  dob: string;
  idNumber: string;
  licenseNumber: string;
  expiryDate: string;
  photo: string;
  /** ข้อมูลเพิ่มเติมสามารถเก็บเป็น key-value pair ได้ */
  [key: string]: unknown;
}

/** Keys ของ field บนใบขับขี่ */
export type DriverLicenseFieldKeys = keyof DriverLicenseData;

/**
 * การตั้งค่าสำหรับแต่ละ field บน card
 */
export interface DriverLicenseFieldConfig {
  top: string;
  left: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  label: string;
  required?: boolean;
  placeholder?: string;
}

/**
 * การตั้งค่าใบขับขี่ทั้งหมด
 */
export interface DriverLicenseConfig {
  cardWidth: number;
  cardHeight: number;
  bgDefault: string;
  fields: Record<DriverLicenseFieldKeys, DriverLicenseFieldConfig>;
}
