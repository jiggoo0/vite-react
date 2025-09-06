// src/utils/calculations.ts
import { ApplicantData } from "../data/applicantData";
import { AssessmentConfig } from "../config/assessmentConfig";

/**
 * คำนวณ DTI (Debt-to-Income Ratio)
 */
export function calculateDTI(data: ApplicantData): number {
  const totalDebt = data.debts.reduce((sum, d) => sum + d, 0);
  return data.income > 0 ? (totalDebt / data.income) * 100 : 0;
}

/**
 * คำนวณคะแนนเครดิตและแยกเป็นส่วน
 */
export function calculateCreditScore(data: ApplicantData, config: AssessmentConfig) {
  const dti = calculateDTI(data);

  let debtScore = 0;
  if (dti <= config.maxDTI) debtScore = config.weights.debtRatio;
  else if (dti <= config.maxDTI + 10) debtScore = config.weights.debtRatio * 0.7;
  else debtScore = config.weights.debtRatio * 0.4;

  const savingsScore =
    data.savings >= data.income * 6
      ? config.weights.savings
      : data.savings >= data.income * 3
        ? config.weights.savings * 0.5
        : 0;

  const totalScore =
    data.paymentHistoryScore + data.incomeStabilityScore + debtScore + savingsScore;

  return { totalScore, debtScore, savingsScore };
}

/**
 * ประเมินสถานะผู้ขอสินเชื่อ
 */
export function assessCreditStatus(
  creditScore: number,
  threshold: number = 70
): "ผ่าน" | "ไม่ผ่าน" {
  return creditScore >= threshold ? "ผ่าน" : "ไม่ผ่าน";
}

/**
 * ตัวอย่างเรียกใช้งาน
 */
export function exampleUsage(data: ApplicantData, config: AssessmentConfig) {
  const dti = calculateDTI(data);
  const score = calculateCreditScore(data, config);
  const status = assessCreditStatus(score.totalScore, config.creditThreshold);

  return {
    dti: dti.toFixed(2) + "%",
    totalScore: score.totalScore,
    debtScore: score.debtScore,
    savingsScore: score.savingsScore,
    status,
  };
}
