// src/Home/types/auditTrail.ts

export interface AuditTrailEntry {
  id: string | number; // รหัสเอกลักษณ์ของรายการ
  ผู้ใช้: string; // ชื่อผู้ใช้
  การกระทำ: string; // การกระทำที่ทำ
  เวลา: string; // เวลาในรูปแบบ ISO string
  รายละเอียด?: string; // ข้อมูลเพิ่มเติม (optional)
}

// Mock data สำหรับทดสอบ AuditTrailViewer
export const mockAuditTrail: AuditTrailEntry[] = [
  {
    id: 1,
    ผู้ใช้: "จอห์น โด",
    การกระทำ: "เข้าสู่ระบบ",
    เวลา: "2025-08-24T09:00:00Z",
    รายละเอียด: "IP: 192.168.0.1",
  },
  {
    id: 2,
    ผู้ใช้: "เจน สมิธ",
    การกระทำ: "ส่งเอกสาร",
    เวลา: "2025-08-24T10:30:00Z",
    รายละเอียด: "อัปโหลดรูปบัตรประชาชน",
  },
];
