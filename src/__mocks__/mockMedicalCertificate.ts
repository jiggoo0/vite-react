/**
 * 🔹 Type สำหรับข้อมูลใบรับรองแพทย์
 */
export interface MedicalCertificateData {
  referenceNo: string;          // เลขที่อ้างอิง
  hospital: string;             // โรงพยาบาล
  ministryOffice: string;       // สำนักงานกระทรวง
  date: string;                 // วันที่ออก
  doctorName: string;           // ชื่อแพทย์
  doctorLicenseNo: string;      // หมายเลขใบอนุญาตแพทย์
  patientTitle: string;         // คำนำหน้าชื่อผู้ป่วย
  patientName: string;          // ชื่อผู้ป่วย
  address: string;              // ที่อยู่ผู้ป่วย
  citizenId: string;            // หมายเลขบัตรประชาชน
  examinedDate: string;         // วันที่ตรวจ
  diagnosis: string;            // การวินิจฉัย
  doctorSummary: string;        // สรุปความเห็นแพทย์
  restFromDate: string;         // เริ่มวันหยุดพัก
  restToDate: string;           // สิ้นสุดวันหยุดพัก
  otherNote?: string;           // หมายเหตุเพิ่มเติม (ไม่บังคับ)
  doctorSigner: string;         // แพทย์ผู้ลงชื่อ
  patientSigner: string;        // ผู้ป่วยลงชื่อ
}

/**
 * 🔹 Mock ข้อมูลใบรับรองแพทย์
 */
const mockMedicalCertificate: MedicalCertificateData = {
  referenceNo: "MC-2025-001",
  hospital: "โรงพยาบาลสมเด็จพระปิ่นเกล้า",
  ministryOffice: "สำนักงานกระทรวงสาธารณสุข",
  date: "01/08/2568",
  doctorName: "นพ.สมชาย ใจดี",
  doctorLicenseNo: "MD123456",
  patientTitle: "นาย",
  patientName: "สมหมาย ดีมาก",
  address: "123/45 ซอยสุขุมวิท 50 แขวงบางจาก เขตพระโขนง กรุงเทพมหานคร",
  citizenId: "1234567890123",
  examinedDate: "31/07/2568",
  diagnosis: "เป็นไข้หวัดธรรมดา",
  doctorSummary: "แนะนำพักผ่อนและดื่มน้ำมากๆ",
  restFromDate: "01/08/2568",
  restToDate: "03/08/2568",
  otherNote: "ไม่มีข้อจำกัดการทำงาน",
  doctorSigner: "นพ.สมชาย ใจดี",
  patientSigner: "สมหมาย ดีมาก",
};

export default mockMedicalCertificate;