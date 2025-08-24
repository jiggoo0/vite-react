import { driverLicenseFormSchema } from "@config/driverLicenseConfig";
import { z } from "zod"; // ใช้ import { z } แทน type-only

// สร้าง type จาก schema
export type DriverLicenseType = z.infer<typeof driverLicenseFormSchema>;

// mock data สำหรับ DriverLicense
const mockDriverLicenseData: DriverLicenseType = {
  fullName: "John Doe",
  idNumber: "1234567890123",
  dob: "1990-01-01",
  issueDate: "2020-01-01",
  expiryDate: "2030-01-01",
  address: "123 Main St, Bangkok",
  photo: "",
  licenseType: "B",
  bloodType: "O",
};

export default mockDriverLicenseData;