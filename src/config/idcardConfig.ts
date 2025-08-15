/**
 * 🆔 ID Card Config Types
 */
export type FontWeight = "normal" | "bold";

export interface IdCardFieldConfig {
  /** ระยะจากด้านบนของบัตร (px) */
  top: number;
  /** ระยะจากด้านซ้ายของบัตร (px) */
  left: number;
  /** ขนาดตัวอักษร (px) */
  fontSize: number;
  /** น้ำหนักตัวอักษร */
  fontWeight?: FontWeight;
  /** ป้ายกำกับของฟิลด์ */
  label?: string;
}

export interface IdCardConfig {
  /** ความกว้างบัตร (px) */
  cardWidth: number;
  /** ความสูงบัตร (px) */
  cardHeight: number;
  /** พื้นหลังเริ่มต้น */
  bgDefault: string;
  /** ตำแหน่งและสไตล์ของแต่ละฟิลด์ */
  fields: Record<string, IdCardFieldConfig>;
}

/**
 * 🎨 Default ID Card Template (85.6mm x 53.98mm)
 * Resolution: 856 x 539 px
 */
export const idCardConfig: IdCardConfig = {
  cardWidth: 856,
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
    address: {
      top: 250,
      left: 150,
      fontSize: 16,
      label: "ที่อยู่ / Address",
    },
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

/**
 * 🛠 Helper: สร้างฟิลด์ใหม่ได้ง่าย
 */
export const createField = (
  top: number,
  left: number,
  fontSize: number,
  fontWeight: FontWeight = "normal",
  label?: string
): IdCardFieldConfig => ({
  top,
  left,
  fontSize,
  fontWeight,
  label,
});
