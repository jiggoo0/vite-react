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
    paymentHistory: 35, // คะแนนเต็มประวัติชำระหนี้
    debtRatio: 30, // คะแนนเต็มจาก DTI
    savings: 20, // คะแนนเต็มจากเงินออม / หลักประกัน
    incomeStability: 15, // คะแนนเต็มจากความเสถียรของรายได้
  },
  creditThreshold: 70, // คะแนนขั้นต่ำ 70 ผ่านการอนุมัติ
};

/**
 * ตัวอย่างการใช้งาน Config
 *
 * import { defaultConfig } from "../config/assessmentConfig";
 * import { calculateCreditScore, assessCreditStatus } from "../utils/calculations";
 *
 * const score = calculateCreditScore(applicantData, defaultConfig);
 * const status = assessCreditStatus(score, defaultConfig.creditThreshold);
 */
