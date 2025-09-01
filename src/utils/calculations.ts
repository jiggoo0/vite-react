// src/utils/calculations.ts

import { ApplicantData } from "../data/applicantData";
import { AssessmentConfig } from "../config/assessmentConfig";

/**
 * คำนวณ DTI (Debt-to-Income Ratio)
 * @param data - ข้อมูลผู้ขอสินเชื่อ
 * @returns DTI %
 */
export function calculateDTI(data: ApplicantData): number {
  const totalDebt = data.debts.reduce((acc, debt) => acc + debt, 0);
  return data.income > 0 ? (totalDebt / data.income) * 100 : 0;
}

/**
 * คำนวณคะแนนเครดิตเบื้องต้น
 * @param data - ข้อมูลผู้ขอสินเชื่อ
 * @param config - เกณฑ์การประเมิน
 * @returns Credit Score 0-100
 */
export function calculateCreditScore(data: ApplicantData, config: AssessmentConfig): number {
  const dti = calculateDTI(data);

  // คะแนนจาก DTI
  let debtScore = 0;
  if (dti <= config.maxDTI) debtScore = config.weights.debtRatio;
  else if (dti <= config.maxDTI + 10) debtScore = config.weights.debtRatio * 0.7;
  else debtScore = config.weights.debtRatio * 0.4;

  // คะแนนจากเงินออม / หลักประกัน
  const savingsScore =
    data.savings >= data.income * 6
      ? config.weights.savings
      : data.savings >= data.income * 3
        ? config.weights.savings * 0.5
        : 0;

  // คะแนนรวม
  const score =
    data.paymentHistoryScore + // ประวัติชำระหนี้
    debtScore +
    savingsScore +
    data.incomeStabilityScore; // ความเสถียรของรายได้

  return Math.min(score, 100);
}

/**
 * ประเมินสถานะผู้ขอสินเชื่อ (ผ่าน/ไม่ผ่าน)
 * @param creditScore - คะแนนเครดิตรวม
 * @param threshold - คะแนนขั้นต่ำที่อนุมัติ
 * @returns Status string
 */
export function assessCreditStatus(creditScore: number, threshold: number = 70): string {
  return creditScore >= threshold ? "ผ่าน" : "ไม่ผ่าน";
}

/**
 * ตัวอย่างเรียกใช้งาน
 */
export function exampleUsage(data: ApplicantData, config: AssessmentConfig) {
  const dti = calculateDTI(data);
  const score = calculateCreditScore(data, config);
  const status = assessCreditStatus(score);

  return {
    dti: dti.toFixed(2) + "%",
    creditScore: score,
    status,
  };
}
