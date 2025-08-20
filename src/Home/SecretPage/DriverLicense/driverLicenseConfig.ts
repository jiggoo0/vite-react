// src/Home/SecretPage/DriverLicense/driverLicenseConfig.ts
import {
  DriverLicenseFieldKeys,
  DriverLicenseFieldConfig,
} from "./types/driverLicense";

export interface DriverLicenseConfig {
  cardWidth: string;
  cardHeight: string;
  bgDefault: string;
  fields: Record<DriverLicenseFieldKeys, DriverLicenseFieldConfig>;
}

/**
 * DriverLicenseConfig
 * กำหนดขนาดบัตร พื้นหลัง และตำแหน่ง field ต่าง ๆ
 * Layout อ้างอิงจากใบขับขี่ไทย:
 * - รูปถ่ายอยู่ซ้ายบน
 * - ชื่อ-นามสกุลใหญ่เด่นด้านบน
 * - เลขบัตร / วันเกิด / วันออกบัตร / วันหมดอายุเรียงต่อกัน
 * - ที่อยู่ด้านล่าง
 * - ประเภทใบขับขี่และหมู่เลือดอยู่แถวล่าง
 */
export const driverLicenseConfig: DriverLicenseConfig = {
  cardWidth: "600px",
  cardHeight: "380px",
  bgDefault: "/images/driver-license-bg.png",
  fields: {
    photo: { top: "40px", left: "40px", width: "120px", height: "140px" },

    fullName: {
      top: "50px",
      left: "190px",
      fontSize: "20px",
      fontWeight: "700",
      color: "#111",
    },
    idNumber: {
      top: "90px",
      left: "190px",
      fontSize: "16px",
      fontWeight: "500",
      color: "#222",
    },
    dob: { top: "120px", left: "190px", fontSize: "16px", fontWeight: "400" },
    issueDate: { top: "150px", left: "190px", fontSize: "16px", fontWeight: "400" },
    expiryDate: {
      top: "180px",
      left: "190px",
      fontSize: "16px",
      fontWeight: "600",
      color: "#b91c1c",
    },
    address: {
      top: "215px",
      left: "190px",
      fontSize: "15px",
      fontWeight: "400",
      width: "370px",
    },
    licenseType: {
      top: "280px",
      left: "190px",
      fontSize: "16px",
      fontWeight: "600",
      color: "#064e3b",
    },
    bloodType: {
      top: "320px",
      left: "190px",
      fontSize: "16px",
      fontWeight: "600",
      color: "#1e3a8a",
    },
  },
};