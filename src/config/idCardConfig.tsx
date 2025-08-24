import type { IdCardData } from "../Home/types/idCard";

export const idCardCardConfig = {
  cardWidth: "350px",
  cardHeight: "220px",
  bgDefault: "/images/idcard-bg.png",
};

export const idCardFields: Array<{
  id: keyof IdCardData;
  type: "text" | "date" | "photo";
  top: string;
  left: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: number | string;
  color?: string;
}> = [
  { id: "photo", type: "photo", top: "10px", left: "10px", width: "80px", height: "100px" },
  { id: "fullName", type: "text", top: "10px", left: "100px", fontSize: "14px", fontWeight: 600 },
  { id: "idNumber", type: "text", top: "30px", left: "100px", fontSize: "12px" },
  { id: "birthDate", type: "text", top: "50px", left: "100px", fontSize: "12px" },
  { id: "address", type: "text", top: "70px", left: "100px", fontSize: "12px", width: "200px" },
];