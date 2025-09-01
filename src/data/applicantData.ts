// src/data/applicantData.ts

/**
 * ApplicantData - ข้อมูลผู้ขอสินเชื่อ
 */
export interface ApplicantData {
  income: number; // รายได้รวมต่อเดือน
  debts: number[]; // รายจ่ายผ่อนชำระต่อเดือน (บ้าน, รถ, บัตรเครดิต ฯลฯ)
  savings: number; // เงินออม / หลักประกัน
  paymentHistoryScore: number; // คะแนนประวัติชำระหนี้ (0-35)
  incomeStabilityScore: number; // คะแนนความเสถียรของรายได้ (0-15)
}

/**
 * ตัวอย่างข้อมูลผู้ขอสินเชื่อ
 */
export const exampleApplicant: ApplicantData = {
  income: 50000, // รายได้ต่อเดือน 50,000 บาท
  debts: [15000, 5000, 3000], // ผ่อนบ้าน 15k, รถ 5k, เครดิตการ์ด 3k
  savings: 100000, // เงินออม 100k
  paymentHistoryScore: 35, // ประวัติชำระหนี้ดีเต็ม 35 คะแนน
  incomeStabilityScore: 15, // รายได้ประจำต่อเนื่องเต็ม 15 คะแนน
};

/**
 * ตัวอย่างเพิ่มเติม (optional)
 */
export const sampleApplicants: ApplicantData[] = [
  {
    income: 40000,
    debts: [12000, 4000, 2000],
    savings: 50000,
    paymentHistoryScore: 30,
    incomeStabilityScore: 12,
  },
  {
    income: 60000,
    debts: [20000, 7000, 5000],
    savings: 200000,
    paymentHistoryScore: 35,
    incomeStabilityScore: 15,
  },
];
