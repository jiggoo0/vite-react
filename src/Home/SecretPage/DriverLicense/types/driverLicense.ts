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

export interface DriverLicenseData {
  fullName: string;
  idNumber: string;
  dob: string;
  issueDate: string;
  expiryDate: string;
  address: string;
  photo: string;
  licenseType: string;
  bloodType: string;
}

export interface DriverLicenseFieldConfig {
  top: string;
  left: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  width?: string;
  height?: string;
}
