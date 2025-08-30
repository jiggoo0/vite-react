// src/__mocks__/kbankIOSNotification.ts
"use client";

// ==============================
// Types & Interfaces
// ==============================
export interface KbankIOSNotification {
  id: string;
  title: string;
  subtitle?: string;
  message: string;
  amount?: string;
  category: "success" | "warning" | "info" | "error";
  time: string;
  transactionId: string;
  balanceAfter?: string;
  channel?: string;
  type: "incoming" | "outgoing" | "failed";
  qrCodeUrl?: string;
}

// ==============================
// PromptPay QR Generator
// ==============================
export function generatePromptPayQR(payee: string, amount: string): string {
  const isPhone = /^0\d{9}$/.test(payee);
  const payeeValue = isPhone ? `0066${payee.slice(1)}` : payee;

  const idField = isPhone
    ? `0113${payeeValue}` // เบอร์โทร (ID 01)
    : `0213${payeeValue}`; // บัญชี (ID 02)

  const payload =
    "000201" + // Payload Format Indicator
    "010211" + // Point of Initiation Method
    "2937" + // Merchant Account Info Length 37
    "0016A000000677010111" + // Globally Unique Identifier
    idField +
    "5303764" + // Currency: THB
    `54${amount.length}${amount}` + // Transaction Amount
    "6304"; // CRC placeholder

  return payload + computeCRC16(payload);
}

function computeCRC16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) !== 0 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

// ==============================
// Mock Notification Data
// ==============================
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
    balanceAfter: "28520.75",
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
    balanceAfter: "13880.75",
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
    balanceAfter: "12981.75",
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
