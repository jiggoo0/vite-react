export type FontWeight = "normal" | "bold";

export interface IdCardFieldConfig {
  top: number;
  left: number;
  fontSize: number;
  fontWeight?: FontWeight;
  label?: string;
}

export interface IdCardConfig {
  cardWidth: number;
  cardHeight: number;
  bgDefault: string;
  fields: Record<string, IdCardFieldConfig>;
}

export const idCardConfig: IdCardConfig = {
  cardWidth: 856,
  cardHeight: 539,
  bgDefault: "/images/IDcard/bg.webp",
  fields: {
    cardNumber: { top: 50, left: 600, fontSize: 18, fontWeight: "bold", label: "เลขประจำตัวประชาชน" },
    fullName: { top: 150, left: 150, fontSize: 18, fontWeight: "bold", label: "ชื่อ-สกุล" },
    birthDate: { top: 200, left: 150, fontSize: 16, label: "วันเกิด" },
    address: { top: 250, left: 150, fontSize: 16, label: "ที่อยู่" },
    initCard: { top: 400, left: 150, fontSize: 14, label: "วันออกบัตร" },
    expCard: { top: 400, left: 450, fontSize: 14, label: "วันหมดอายุ" },
    officer: { top: 450, left: 150, fontSize: 14, label: "เจ้าหน้าที่" },
    cardPlace: { top: 480, left: 150, fontSize: 14, label: "สำนักทะเบียน" },
  },
};