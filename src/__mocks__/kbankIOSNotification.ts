import type { KbankNotificationData } from "@home/components/SecretSection/KbankNotificationCard";

export const kbankMockData: KbankNotificationData[] = [
  {
    id: "kb001",
    transactionId: "TX1001",
    time: "2025-08-19T09:00:00Z",
    title: "รายการฝากเงิน",
    message: "คุณได้รับเงิน 5,000 บาท จาก นายสมชาย",
    amount: "5000",
    balanceAfter: "15000",
    type: "incoming",
    channel: "K PLUS",
  },
  {
    id: "kb002",
    transactionId: "TX1002",
    time: "2025-08-18T14:30:00Z",
    title: "แจ้งเตือนการใช้จ่าย",
    message: "คุณใช้จ่าย 1,200 บาท ที่ร้าน ABC",
    amount: "-1200",
    balanceAfter: "13800",
    type: "outgoing",
    channel: "K PLUS",
  },
  {
    id: "kb003",
    transactionId: "TX1003",
    time: "2025-08-17T12:00:00Z",
    title: "ยอดบัญชีเดือนนี้",
    message: "ยอดเงินคงเหลือ 15,000 บาท",
    amount: "0",
    balanceAfter: "15000",
    type: "incoming",
    channel: "K PLUS",
  },
];

export default kbankMockData;
