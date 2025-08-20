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