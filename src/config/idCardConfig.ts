// src/config/idCardConfig.ts
import type { IdCardData } from "@/Home/types/idCard";

/** ------------------------------
 * ID Card Base Configuration
 * ----------------------------- */
export interface CardConfig {
  cardWidth: string;
  cardHeight: string;
  bgDefault?: string;
}

const idCardCardConfig: CardConfig = {
  cardWidth: "350px",
  cardHeight: "220px",
  bgDefault: "/assets/images/idcard-bg.webp", // ✅ updated to a proper ID card background
};

/** ------------------------------
 * Field Configuration Type
 * ----------------------------- */
export interface IdCardFieldConfig {
  id: keyof IdCardData;
  label?: string;
  type: "text" | "date" | "photo";
  top: string;
  left: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

/** ------------------------------
 * Default Text Style
 * ----------------------------- */
const defaultTextStyle = {
  fontSize: "12px",
  fontWeight: "600",
};

/** ------------------------------
 * Field Positioning & Styling
 * ----------------------------- */
const idCardFields: IdCardFieldConfig[] = [
  {
    id: "photo",
    label: "Photo",
    type: "photo",
    top: "10px",
    left: "10px",
    width: "80px",
    height: "100px",
  },
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    top: "10px",
    left: "100px",
    fontSize: "14px",
    fontWeight: "600",
  },
  {
    id: "idNumber",
    label: "ID Number",
    type: "text",
    top: "30px",
    left: "100px",
    ...defaultTextStyle,
  },
  {
    id: "birthDate",
    label: "Date of Birth",
    type: "date",
    top: "50px",
    left: "100px",
    ...defaultTextStyle,
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    top: "70px",
    left: "100px",
    width: "200px",
    ...defaultTextStyle,
  },
];

/** ------------------------------
 * Exports
 * ----------------------------- */
export default idCardCardConfig;
export { idCardFields };
