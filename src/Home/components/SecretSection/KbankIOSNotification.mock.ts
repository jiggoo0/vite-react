// types & interfaces
export interface KbankIOSNotification {
  /** รหัสแจ้งเตือน */
  id: string;
  /** หัวข้อแจ้งเตือน */
  title: string;
  /** ข้อความรอง (เช่น ชื่อผู้ส่ง หรือ ประเภทบัตร) */
  subtitle?: string;
  /** เนื้อความหลักของแจ้งเตือน */
  message: string;
  /** จำนวนเงินที่เกี่ยวข้อง (ถ้ามี) เป็น string */
  amount?: string;
  /** ประเภทของแจ้งเตือน */
  category: "success" | "warning" | "info" | "error";
  /** เวลาที่เกิดแจ้งเตือน (ISO 8601) */
  time: string;
  /** รหัสธุรกรรม */
  transactionId: string;
  /** ยอดเงินคงเหลือหลังธุรกรรม (ถ้ามี) */
  balanceAfter?: string;
  /** ช่องทางที่เกิดธุรกรรม (ถ้ามี) */
  channel?: string;
  /** ประเภทธุรกรรม */
  type: "incoming" | "outgoing" | "failed";
  /** QR Code PromptPay (ถ้ามี) */
  qrCodeUrl?: string;
}

/**
 * สร้าง PromptPay QR Payload string ตามสเปค EMV® QR Code
 * @param payee เบอร์โทรศัพท์ (0XXXXXXXXX) หรือ หมายเลขบัญชีพร้อมเพย์
 * @param amount จำนวนเงิน (รูปแบบ string เช่น "15000.00")
 * @returns string Payload พร้อม CRC16 checksum สำหรับ QR code
 */
export function generatePromptPayQR(payee: string, amount: string): string {
  // ตรวจสอบว่าเป็นเบอร์โทร 0 นำหน้า 10 หลักหรือไม่
  const isPhone = /^0\d{9}$/.test(payee);

  // แปลงเบอร์โทรเป็นรูปแบบ 66xxxxxxxxx (ตัด 0 ตัวหน้า เปลี่ยนเป็น 66)
  const payeeValue = isPhone ? `0066${payee.slice(1)}` : payee;

  // สร้างฟิลด์ ID สำหรับเบอร์โทรหรือบัญชี (ตามสเปค PromptPay)
  const idField = isPhone
    ? `0113${payeeValue}` // เบอร์โทร (ID 01, length 13)
    : `0213${payeeValue}`; // บัญชี (ID 02, length 13)

  // สร้าง Payload เบื้องต้น (ตาม EMV QR)
  const payload =
    "000201" + // Payload Format Indicator
    "010211" + // Point of Initiation Method (static QR)
    "2937" + // Merchant Account Info Length 37 bytes
    "0016A000000677010111" + // Globally Unique Identifier สำหรับ PromptPay
    idField + // เบอร์โทรหรือบัญชีพร้อมเพย์
    "5303764" + // สกุลเงิน THB (764)
    `54${amount.length}${amount}` + // จำนวนเงิน พร้อมความยาว (length ของ amount)
    "6304"; // CRC Placeholder (4 ตัว)

  // คำนวณ CRC16 checksum และเติมท้าย Payload
  const crc = computeCRC16(payload);

  return payload + crc;
}

/**
 * คำนวณ CRC16-CCITT (0xFFFF) สำหรับตรวจสอบความถูกต้อง
 * ใช้ตรวจสอบและเติมข้อมูล CRC ใน Payload QR code
 */
function computeCRC16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

// Mock data ตัวอย่างแจ้งเตือน พร้อม QR Code แบบไดนามิก
export const kbankMockData: KbankIOSNotification[] = [
  {
    id: "noti-001",
    title: "โอนเงินเข้า",
    subtitle: "พร้อมเพย์จาก: สมชาย ใจดี",
    message: "คุณได้รับเงินจำนวน 15,000.00 บาท ผ่านบัญชีพร้อมเพย์",
    amount: "15000.00",
    category: "success",
    time: "2025-08-06T13:45:00+07:00",
    transactionId: "TRX20250806134501",
    balanceAfter: "28,520.75",
    channel: "Mobile Banking",
    type: "incoming",
    qrCodeUrl: generatePromptPayQR("0831234567", "15000.00"),
  },
  {
    id: "noti-002",
    title: "รายการใช้จ่าย",
    subtitle: "KBank Credit Card",
    message: "คุณใช้จ่ายจำนวน 1,290.00 บาท ที่ Starbucks",
    amount: "-1290.00",
    category: "warning",
    time: "2025-08-06T10:32:00+07:00",
    transactionId: "TRX20250806103202",
    balanceAfter: "13,880.75",
    channel: "Credit Card POS",
    type: "outgoing",
  },
  {
    id: "noti-003",
    title: "ชำระค่าบริการสำเร็จ",
    subtitle: "TrueMove H",
    message: "คุณได้ชำระค่าบริการ 899.00 บาท สำหรับหมายเลข 099-xxx-xxxx",
    amount: "-899.00",
    category: "info",
    time: "2025-08-05T20:10:00+07:00",
    transactionId: "TRX20250805201003",
    balanceAfter: "12,981.75",
    channel: "Bill Payment",
    type: "outgoing",
  },
  {
    id: "noti-004",
    title: "ธุรกรรมล้มเหลว",
    subtitle: "QR PromptPay",
    message: "การโอนเงินไปยัง 099-xxx-xxxx ล้มเหลว โปรดลองอีกครั้ง",
    amount: "0",
    category: "error",
    time: "2025-08-05T18:15:00+07:00",
    transactionId: "TRX20250805181504",
    channel: "QR Payment",
    type: "failed",
  },
];
