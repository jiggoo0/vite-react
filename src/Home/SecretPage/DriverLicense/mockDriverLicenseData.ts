import { DriverLicenseData } from "@home/SecretPage/DriverLicense/types/driverLicense";

const mockDriverLicenseData: DriverLicenseData = {
  photo: "/images/mock-driver.jpg",
  fullName: "นายสมชาย ใจดี", // ชื่อเต็ม
  idNumber: "1-2345-67890-12-3", // เลขบัตรประชาชน
  dob: "01/01/2530", // วันเกิด
  issueDate: "01/01/2560", // วันออกใบขับขี่
  expiryDate: "01/01/2565", // วันหมดอายุ
  address: "123/45 ซอยสุขุมวิท 50 แขวงบางจาก เขตพระโขนง กรุงเทพมหานคร",
  licenseType: "รถยนต์ส่วนบุคคล", // ประเภทใบขับขี่
  bloodType: "O", // หมู่เลือด
};

export default mockDriverLicenseData;