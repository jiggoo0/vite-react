export interface DriverLicenseData {
  fullName: string;
  idNumber: string;
  dob: string;
  issueDate: string;
  expiryDate: string;
  address: string;
  photo?: string;
  licenseType: string;
  bloodType: string;
}

export type DriverLicenseFieldKeys = keyof DriverLicenseData;

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