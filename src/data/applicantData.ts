// src/data/applicantData.ts
import { z } from "zod";

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
 * Runtime validation schema
 */
export const ApplicantDataSchema = z.object({
  income: z.number().min(0),
  debts: z.array(z.number().min(0)),
  savings: z.number().min(0),
  paymentHistoryScore: z.number().min(0).max(35),
  incomeStabilityScore: z.number().min(0).max(15),
});

export type ApplicantDataValidated = z.infer<typeof ApplicantDataSchema>;

/**
 * Utility functions
 */
export const getTotalDebt = (applicant: ApplicantData): number =>
  applicant.debts.reduce((sum, debt) => sum + debt, 0);

export const getDebtToIncomeRatio = (applicant: ApplicantData): number =>
  applicant.income > 0 ? getTotalDebt(applicant) / applicant.income : 0;

export const getCreditworthinessScore = (applicant: ApplicantData): number =>
  applicant.paymentHistoryScore + applicant.incomeStabilityScore;

/**
 * ตัวอย่างข้อมูลผู้ขอสินเชื่อ
 */
export const exampleApplicant: ApplicantData = {
  income: 50000,
  debts: [15000, 5000, 3000],
  savings: 100000,
  paymentHistoryScore: 35,
  incomeStabilityScore: 15,
};

/**
 * Precomputed metrics for example applicant
 */
export const exampleApplicantWithMetrics = {
  ...exampleApplicant,
  totalDebt: getTotalDebt(exampleApplicant),
  debtToIncomeRatio: getDebtToIncomeRatio(exampleApplicant),
  creditworthinessScore: getCreditworthinessScore(exampleApplicant),
};

/**
 * ตัวอย่างเพิ่มเติม
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

/**
 * Precomputed metrics for sample applicants
 */
export const sampleApplicantsWithMetrics = sampleApplicants.map((applicant) => ({
  ...applicant,
  totalDebt: getTotalDebt(applicant),
  debtToIncomeRatio: getDebtToIncomeRatio(applicant),
  creditworthinessScore: getCreditworthinessScore(applicant),
}));
