// src/config/driverLicenseConfig.ts
import { z } from "zod";
import type {
  DriverLicenseFieldConfig,
  DriverLicenseData,
} from "@/Home/AdminTools/DriverLicense/types/driverLicense";

/** ------------------------------
 * Card Base Configuration
 * ----------------------------- */
export interface CardConfig {
  id: string;
  label: string;
  cardWidth: string;
  cardHeight: string;
  bgDefault?: string;
  baseDelay?: number;
}

export const driverLicenseCardConfig: CardConfig = {
  id: "driverLicense",
  label: "Driver License",
  cardWidth: "400px",
  cardHeight: "250px",
  bgDefault: "/assets/images/driver-license-bg.png",
  baseDelay: 50,
};

/** ------------------------------
 * Form Validation Schema (Zod)
 * ----------------------------- */
export const driverLicenseFormSchema = z.object({
  fullName: z.string().min(1, "Full name required"),
  idNumber: z
    .string()
    .min(1, "ID number required")
    .regex(/^[0-9]{1,13}$/, "ID number must be 1-13 digits"),
  dob: z.string().min(1, "Date of birth required"),
  issueDate: z.string().min(1, "Issue date required"),
  expiryDate: z.string().min(1, "Expiry date required"),
  address: z.string().min(1, "Address required"),
  photo: z.string().optional(),
  licenseType: z.enum(["A", "B", "C", "D"]),
  bloodType: z.enum(["A", "B", "AB", "O"]),
});

export type DriverLicenseFormData = z.infer<typeof driverLicenseFormSchema>;

/** ------------------------------
 * Default Text Styles
 * ----------------------------- */
const defaultTextStyle = { fontSize: "14px", fontWeight: "600" };

/** ------------------------------
 * Field Positioning & Styling
 * ----------------------------- */
export const driverLicenseFields: DriverLicenseFieldConfig[] = [
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    top: "8%",
    left: "5%",
    width: "50%",
    ...defaultTextStyle,
  },
  {
    id: "idNumber",
    label: "ID Number",
    type: "text",
    top: "20%",
    left: "5%",
    width: "50%",
    ...defaultTextStyle,
  },
  {
    id: "dob",
    label: "Date of Birth",
    type: "date",
    top: "32%",
    left: "5%",
    width: "30%",
    ...defaultTextStyle,
  },
  {
    id: "issueDate",
    label: "Issue Date",
    type: "date",
    top: "44%",
    left: "5%",
    width: "30%",
    ...defaultTextStyle,
  },
  {
    id: "expiryDate",
    label: "Expiry Date",
    type: "date",
    top: "56%",
    left: "5%",
    width: "30%",
    ...defaultTextStyle,
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    top: "68%",
    left: "5%",
    width: "90%",
    fontSize: "12px",
    fontWeight: "600",
  },
  {
    id: "photo",
    label: "Photo",
    type: "photo",
    top: "8%",
    left: "65%",
    width: "30%",
    height: "45%",
  },
  {
    id: "licenseType",
    label: "License Type",
    type: "select",
    options: ["A", "B", "C", "D"],
    top: "80%",
    left: "5%",
    width: "10%",
    ...defaultTextStyle,
  },
  {
    id: "bloodType",
    label: "Blood Type",
    type: "select",
    options: ["A", "B", "AB", "O"],
    top: "80%",
    left: "20%",
    width: "10%",
    ...defaultTextStyle,
  },
];

/** ------------------------------
 * Overlay Configuration by Role
 * ----------------------------- */
export const driverLicenseOverlay = (
  role: "admin" | "manager" | "user" | "viewer" = "user"
): { blur: number; disabled: boolean } =>
  role === "admin" ? { blur: 0, disabled: false } : { blur: 4, disabled: true };

/** ------------------------------
 * Mock Data for Testing / Preview
 * ----------------------------- */
export const mockDriverLicense: DriverLicenseData = {
  fullName: "John Doe",
  idNumber: "1234567890123",
  dob: "1990-01-01",
  issueDate: "2023-01-01",
  expiryDate: "2028-01-01",
  address: "123 Main Street, City, Country",
  photo: "/assets/images/driver-photo.webp",
  licenseType: "B",
  bloodType: "O",
};
