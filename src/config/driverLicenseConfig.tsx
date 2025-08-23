import { z } from "zod";
import type { DriverLicenseFieldConfig } from "@home/SecretPage/DriverLicense/types/driverLicense";

export interface CardConfig {
  id: string;
  label: string;
  cardWidth: string;
  cardHeight: string;
  bgDefault?: string;
}

export const driverLicenseCardConfig: CardConfig = {
  id: "driverLicense",
  label: "Driver License",
  cardWidth: "400px",
  cardHeight: "250px",
  bgDefault: "/assets/images/driver-license-bg.png",
};

export const driverLicenseFormSchema = z.object({
  fullName: z.string().min(1),
  idNumber: z.string().min(1),
  dob: z.string().min(1),
  issueDate: z.string().min(1),
  expiryDate: z.string().min(1),
  address: z.string().min(1),
  photo: z.string().optional(),
  licenseType: z.string().min(1),
  bloodType: z.string().min(1),
});

export type DriverLicenseFormData = z.infer<typeof driverLicenseFormSchema>;

export const driverLicenseFields: DriverLicenseFieldConfig[] = [
  { id: "fullName", type: "text", top: "30px", left: "20px", fontSize: "14px", fontWeight: "600", width: "200px" },
  { id: "idNumber", type: "text", top: "60px", left: "20px", fontSize: "14px", width: "200px" },
  { id: "dob", type: "date", top: "90px", left: "20px", fontSize: "14px", width: "120px" },
  { id: "issueDate", type: "date", top: "120px", left: "20px", fontSize: "14px", width: "120px" },
  { id: "expiryDate", type: "date", top: "150px", left: "20px", fontSize: "14px", width: "120px" },
  { id: "address", type: "text", top: "180px", left: "20px", fontSize: "12px", width: "360px" },
  { id: "photo", type: "photo", top: "30px", left: "250px", width: "100px", height: "120px" },
  { id: "licenseType", type: "select", options: ["A", "B", "C", "D"], top: "210px", left: "20px", fontSize: "12px", width: "50px" },
  { id: "bloodType", type: "select", options: ["A", "B", "AB", "O"], top: "210px", left: "90px", fontSize: "12px", width: "50px" },
];