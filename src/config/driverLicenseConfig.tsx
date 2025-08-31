import { z } from "zod";
import type { DriverLicenseFieldConfig } from "@/Home/AdminTools/DriverLicense/types/driverLicense";

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

export const driverLicenseFormSchema = z.object({
  fullName: z.string().min(1, "Full name required"),
  idNumber: z
    .string()
    .min(1)
    .regex(/^[0-9]{1,13}$/),
  dob: z.string().min(1),
  issueDate: z.string().min(1),
  expiryDate: z.string().min(1),
  address: z.string().min(1),
  photo: z.string().optional(),
  licenseType: z.enum(["A", "B", "C", "D"]),
  bloodType: z.enum(["A", "B", "AB", "O"]),
});

export type DriverLicenseFormData = z.infer<typeof driverLicenseFormSchema>;

const defaultTextStyle = { fontSize: "14px", fontWeight: "600" };

export const driverLicenseFields: DriverLicenseFieldConfig[] = [
  {
    id: "fullName",
    type: "text",
    top: "8%",
    left: "5%",
    width: "50%",
    ...defaultTextStyle,
  },
  {
    id: "idNumber",
    type: "text",
    top: "20%",
    left: "5%",
    width: "50%",
    ...defaultTextStyle,
  },
  {
    id: "dob",
    type: "date",
    top: "32%",
    left: "5%",
    width: "30%",
    ...defaultTextStyle,
  },
  {
    id: "issueDate",
    type: "date",
    top: "44%",
    left: "5%",
    width: "30%",
    ...defaultTextStyle,
  },
  {
    id: "expiryDate",
    type: "date",
    top: "56%",
    left: "5%",
    width: "30%",
    ...defaultTextStyle,
  },
  {
    id: "address",
    type: "text",
    top: "68%",
    left: "5%",
    width: "90%",
    fontSize: "12px",
    fontWeight: "600",
  },
  {
    id: "photo",
    type: "photo",
    top: "8%",
    left: "65%",
    width: "30%",
    height: "45%",
  },
  {
    id: "licenseType",
    type: "select",
    options: ["A", "B", "C", "D"],
    top: "80%",
    left: "5%",
    width: "10%",
    ...defaultTextStyle,
  },
  {
    id: "bloodType",
    type: "select",
    options: ["A", "B", "AB", "O"],
    top: "80%",
    left: "20%",
    width: "10%",
    ...defaultTextStyle,
  },
];

export const driverLicenseOverlay = (role: "admin" | "manager" | "user") => {
  if (role === "admin") return { blur: 0, disabled: false };
  return { blur: 4, disabled: true };
};
