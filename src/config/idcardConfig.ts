export interface IdCardFieldConfig {
  top: number;
  left: number;
  fontSize: number;
  fontWeight?: "normal" | "bold";
  label?: string;
}

export interface IdCardConfig {
  cardWidth: number;
  cardHeight: number;
  bgDefault: string;
  fields: Record<string, IdCardFieldConfig>;
}

export const idCardConfig: IdCardConfig = {
  cardWidth: 856, // ขนาดจริงประมาณ 85.6mm * 53.98mm => pixel 856*539
  cardHeight: 539,
  bgDefault: "/images/IDcard/bg.webp",
  fields: {
    cardNumber: {
      top: 50,
      left: 600,
      fontSize: 18,
      fontWeight: "bold",
      label: "เลขประจำตัวประชาชน / Identification Number",
    },
    fullName: {
      top: 150,
      left: 150,
      fontSize: 18,
      fontWeight: "bold",
      label: "ชื่อ-สกุล / Name & Last Name",
    },
    birthday: {
      top: 200,
      left: 150,
      fontSize: 16,
      label: "วันเกิด / Date of Birth",
    },
    address: { top: 250, left: 150, fontSize: 16, label: "ที่อยู่ / Address" },
    initCard: {
      top: 400,
      left: 150,
      fontSize: 14,
      label: "วันออกบัตร / Issued Date",
    },
    expCard: {
      top: 400,
      left: 450,
      fontSize: 14,
      label: "วันหมดอายุ / Expiry Date",
    },
    officer: {
      top: 450,
      left: 150,
      fontSize: 14,
      label: "เจ้าหน้าที่ / Officer",
    },
    cardPlace: {
      top: 480,
      left: 150,
      fontSize: 14,
      label: "สำนักทะเบียน / Card Place",
    },
  },
};
