// src/Home/SecretPage/DriverLicense/types/driverLicense.ts

/** Keys ของฟิลด์ใบอนุญาต */
export type DriverLicenseFieldKeys =
  | "fullName"
  | "idNumber"
  | "dob"
  | "licenseNumber"
  | "expiryDate"
  | "photo";

/** การตั้งค่าของฟิลด์แต่ละตัว */
export interface DriverLicenseFieldConfig {
  top: string;
  left: string;
  width?: string;
  height?: string;
  fontSize: string;
  fontWeight?: number;
  color?: string;
  label: string;
  required?: boolean;
}

/** Configuration ของใบอนุญาตทั้งหมด */
export interface DriverLicenseConfig {
  cardWidth: number;
  cardHeight: number;
  bgDefault: string;
  fields: Record<DriverLicenseFieldKeys, DriverLicenseFieldConfig>;
}

/** ข้อมูลจริงของผู้ถือใบอนุญาต */
export interface DriverLicenseData {
  fullName: string;
  idNumber: string;
  dob: string;
  licenseNumber: string;
  expiryDate: string;
  photo: string;
}
