// src/config/assessmentConfig.ts

/**
 * AssessmentConfig - เก็บค่ากำหนดสำหรับการประเมินเครดิต
 */
export interface AssessmentConfig {
  maxDTI: number; // DTI สูงสุดที่อนุมัติ (%)
  weights: {
    paymentHistory: number; // น้ำหนักคะแนนประวัติชำระหนี้
    debtRatio: number; // น้ำหนักคะแนนจาก DTI
    savings: number; // น้ำหนักคะแนนจากเงินออม / หลักประกัน
    incomeStability: number; // น้ำหนักคะแนนจากความเสถียรของรายได้
  };
  creditThreshold: number; // คะแนนขั้นต่ำสำหรับการอนุมัติ
}

/**
 * defaultConfig - ค่ากำหนดเริ่มต้นสำหรับการประเมิน
 */
export const defaultConfig: AssessmentConfig = {
  maxDTI: 40, // DTI สูงสุด 40%
  weights: {
    paymentHistory: 35,
    debtRatio: 30,
    savings: 20,
    incomeStability: 15,
  },
  creditThreshold: 70,
};

/**
 * ApplicantData - ข้อมูลผู้สมัครที่ใช้ในการคำนวณ
 */
export interface ApplicantData {
  paymentHistory: number; // 0–100 (เปอร์เซ็นต์ความตรงต่อเวลา)
  debtRatio: number; // DTI (%) = หนี้ / รายได้
  savings: number; // 0–100 (ดัชนีเงินออม/หลักประกัน)
  incomeStability: number; // 0–100 (ดัชนีเสถียรภาพรายได้)
}

/**
 * validateConfig - ตรวจสอบความถูกต้องของ config
 */
export const validateConfig = (config: AssessmentConfig): boolean => {
  const totalWeight = Object.values(config.weights).reduce((a, b) => a + b, 0);
  return totalWeight === 100;
};

/**
 * calculateCreditScore - คำนวณคะแนนเครดิตจากข้อมูลผู้สมัคร
 */
export const calculateCreditScore = (
  data: ApplicantData,
  config: AssessmentConfig = defaultConfig
): number => {
  const { paymentHistory, debtRatio, savings, incomeStability } = data;
  const { maxDTI, weights } = config;

  // Normalize DTI: ถ้า DTI เกิน maxDTI → ได้ 0 คะแนน
  const normalizedDTI = debtRatio <= maxDTI ? (1 - debtRatio / maxDTI) * 100 : 0;

  const score =
    (paymentHistory * weights.paymentHistory) / 100 +
    (normalizedDTI * weights.debtRatio) / 100 +
    (savings * weights.savings) / 100 +
    (incomeStability * weights.incomeStability) / 100;

  return Math.round(score);
};

/**
 * assessCreditStatus - ประเมินผลว่าผ่านหรือไม่
 */
export const assessCreditStatus = (
  score: number,
  threshold: number = defaultConfig.creditThreshold
): "APPROVED" | "REJECTED" => {
  return score >= threshold ? "APPROVED" : "REJECTED";
};

/**
 * 🔹 Example usage:
 *
 * const applicant: ApplicantData = {
 *   paymentHistory: 80,
 *   debtRatio: 35,
 *   savings: 60,
 *   incomeStability: 70,
 * };
 *
 * if (!validateConfig(defaultConfig)) {
 *   throw new Error("Invalid config: weights must sum to 100");
 * }
 *
 * const score = calculateCreditScore(applicant, defaultConfig);
 * const status = assessCreditStatus(score, defaultConfig.creditThreshold);
 *
 * console.log("Score:", score, "Status:", status);
 */
