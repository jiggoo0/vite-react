import type { SalaryCertificateData } from "@home/AdminTools/SalaryCertificate/types/salaryCertificate";

export const mockSalaryCertificate: SalaryCertificateData = {
  companyName: "บริษัท ตัวอย่าง จำกัด",
  companyNameEn: "Example Co., Ltd.",
  certificateNumber: "SC-00123",
  employeeName: "สมชาย ใจดี",
  startDate: "01/01/2565",
  position: "โปรแกรมเมอร์",
  department: "IT",
  salary: 50000,
  positionAllowance: 5000,
  costOfLiving: 2000,
  issueDate: "01/08/2566",
  signPosition: "ผู้จัดการฝ่ายบุคคล",
  phone: "02-123-4567",
  addressLine1: "123 ถนนสุขุมวิท",
  addressLine2: "แขวงบางจาก เขตพระโขนง กรุงเทพฯ 10260",
};

export default mockSalaryCertificate;
