// ประกาศ type สำหรับข้อมูล Notification
export type NotificationData = {
  amount: number; // ยอดเงินอนุมัติ
  accountName: string; // ชื่อบัญชีผู้รับเงิน
  approvalDate: string; // วันที่อนุมัติ (รูปแบบตัวอย่าง "6 สิงหาคม 2568")
  transactionId: string; // หมายเลขรายการธุรกรรม
};

// Mock data สำหรับการทดสอบหรือพัฒนา
const KbankIOSNotificationMock: NotificationData = {
  amount: 125000, // ตัวอย่างยอดเงิน 125,000 บาท
  accountName: "นายสมชาย ใจดี", // ตัวอย่างชื่อบัญชี
  approvalDate: "6 สิงหาคม 2568", // ตัวอย่างวันที่อนุมัติ
  transactionId: "TXN1234567890", // ตัวอย่างหมายเลขรายการ
};

export default KbankIOSNotificationMock;
