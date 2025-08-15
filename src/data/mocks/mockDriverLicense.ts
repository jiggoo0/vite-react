import {
  DriverLicenseConfig,
  DriverLicenseData,
} from "@/Home/SecretPage/DriverLicense/types/driverLicense";

/**
 * Configuration สำหรับการแสดงผลใบอนุญาตขับขี่
 */
export const driverLicenseConfig: DriverLicenseConfig = {
  cardWidth: 860,
  cardHeight: 540,
  bgDefault: "/assets/bg-driver-license.webp",
  fields: {
    fullName: {
      top: "170px",
      left: "300px",
      fontSize: "24px",
      fontWeight: 600,
      color: "#000",
      label: "ชื่อ-นามสกุล",
      required: true,
    },
    idNumber: {
      top: "210px",
      left: "300px",
      fontSize: "20px",
      fontWeight: 500,
      color: "#000",
      label: "เลขบัตรประชาชน",
      required: true,
    },
    dob: {
      top: "250px",
      left: "300px",
      fontSize: "20px",
      fontWeight: 500,
      color: "#000",
      label: "วันเกิด",
      required: true,
    },
    licenseNumber: {
      top: "125px",
      left: "560px",
      fontSize: "20px",
      fontWeight: 600,
      color: "#000",
      label: "เลขที่ใบอนุญาต",
      required: true,
    },
    expiryDate: {
      top: "290px",
      left: "560px",
      fontSize: "20px",
      fontWeight: 500,
      color: "#000",
      label: "วันหมดอายุ",
      required: true,
    },
    photo: {
      top: "130px",
      left: "70px",
      width: "120px",
      height: "150px",
      fontSize: "0",
      label: "รูปถ่าย",
      required: true,
    },
  },
};

/**
 * ข้อมูลจำลองของผู้ถือใบอนุญาต
 */
export const mockDriverLicenseData: DriverLicenseData = {
  fullName: "สมชาย ใจดี",
  idNumber: "1-2345-67890-12-3",
  dob: "01/01/1990",
  licenseNumber: "DL-123456789",
  expiryDate: "31/12/2029",
  photo: "/assets/sample-driver-photo.jpg",
};
