import { z } from "zod";
import type { DriverLicenseFieldConfig } from "@home/SecretPage/DriverLicense/types/driverLicense";

/** ==============================
 * Card Config
 * ------------------------------
 * ขนาดและ background ของบัตร
============================== */
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

/** ==============================
 * Form Schema (zod)
============================== */
export const driverLicenseFormSchema = z.object({
  fullName: z.string().min(1),
  idNumber: z.string().min(1),
  dob: z.string().min(1),
  issueDate: z.string().min(1),
  expiryDate: z.string().min(1),
  address: z.string().min(1),
  photo: z.string().optional(),
  licenseType: z.enum(["A", "B", "C", "D"]),
  bloodType: z.enum(["A", "B", "AB", "O"]),
});

export type DriverLicenseFormData = z.infer<typeof driverLicenseFormSchema>;

/** ==============================
 * Default Text Style for Fields
============================== */
const defaultTextStyle = {
  fontSize: "14px",
  fontWeight: "600",
};

/** ==============================
 * Field Layout Config
 * ------------------------------
 * กำหนดตำแหน่ง field บน template
============================== */
export const driverLicenseFields: DriverLicenseFieldConfig[] = [
  {
    id: "fullName",
    type: "text",
    top: "30px",
    left: "20px",
    width: "200px",
    ...defaultTextStyle,
  },
  {
    id: "idNumber",
    type: "text",
    top: "60px",
    left: "20px",
    width: "200px",
    ...defaultTextStyle,
  },
  {
    id: "dob",
    type: "date",
    top: "90px",
    left: "20px",
    width: "120px",
    fontSize: "14px",
  },
  {
    id: "issueDate",
    type: "date",
    top: "120px",
    left: "20px",
    width: "120px",
    fontSize: "14px",
  },
  {
    id: "expiryDate",
    type: "date",
    top: "150px",
    left: "20px",
    width: "120px",
    fontSize: "14px",
  },
  {
    id: "address",
    type: "text",
    top: "180px",
    left: "20px",
    width: "360px",
    fontSize: "12px",
  },
  {
    id: "photo",
    type: "photo",
    top: "30px",
    left: "250px",
    width: "100px",
    height: "120px",
  },
  {
    id: "licenseType",
    type: "select",
    options: ["A", "B", "C", "D"],
    top: "210px",
    left: "20px",
    width: "50px",
    fontSize: "12px",
  },
  {
    id: "bloodType",
    type: "select",
    options: ["A", "B", "AB", "O"],
    top: "210px",
    left: "90px",
    width: "50px",
    fontSize: "12px",
  },
];