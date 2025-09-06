"use client";

import React, { useState, useMemo } from "react";
import { ApplicantData, exampleApplicant } from "@/data/applicantData";
import { defaultConfig } from "@/config/assessmentConfig";
import { calculateDTI, calculateCreditScore, assessCreditStatus } from "@/utils/calculations";
import ResultCard from "./ResultCard";

const CreditAssessmentForm: React.FC = () => {
  const [applicant, setApplicant] = useState<ApplicantData>(exampleApplicant);

  // Memoized calculations
  const dti = useMemo(() => calculateDTI(applicant), [applicant]);
  const score = useMemo(() => calculateCreditScore(applicant, defaultConfig), [applicant]);
  const status = useMemo(
    () => assessCreditStatus(score.totalScore, defaultConfig.creditThreshold),
    [score]
  );

  // Update debts
  const handleDebtChange = (index: number, value: number) =>
    setApplicant((prev) => {
      const newDebts = [...prev.debts];
      newDebts[index] = value;
      return { ...prev, debts: newDebts };
    });

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-md mx-auto space-y-4 bg-white">
      <h2 className="text-xl font-bold text-center">Credit Assessment Form</h2>

      {/* Income */}
      <InputField
        label="รายได้รวม (บาท/เดือน)"
        value={applicant.income}
        onChange={(val) => setApplicant((prev) => ({ ...prev, income: val }))}
      />

      {/* Debts */}
      {applicant.debts.map((debt, idx) => (
        <InputField
          key={idx}
          label={`หนี้รายการ ${idx + 1} (บาท/เดือน)`}
          value={debt}
          onChange={(val) => handleDebtChange(idx, val)}
        />
      ))}

      {/* Savings */}
      <InputField
        label="เงินออม / หลักประกัน (บาท)"
        value={applicant.savings}
        onChange={(val) => setApplicant((prev) => ({ ...prev, savings: val }))}
      />

      {/* Payment History Score */}
      <InputField
        label="คะแนนประวัติชำระหนี้ (0-35)"
        value={applicant.paymentHistoryScore}
        onChange={(val) => setApplicant((prev) => ({ ...prev, paymentHistoryScore: val }))}
        min={0}
        max={35}
      />

      {/* Income Stability Score */}
      <InputField
        label="คะแนนความเสถียรของรายได้ (0-15)"
        value={applicant.incomeStabilityScore}
        onChange={(val) => setApplicant((prev) => ({ ...prev, incomeStabilityScore: val }))}
        min={0}
        max={15}
      />

      {/* Result */}
      <ResultCard
        dti={dti}
        score={score.totalScore} // ใช้ totalScore เท่านั้น
        debtScore={score.debtScore} // แสดงแยกได้
        savingsScore={score.savingsScore}
        status={status}
      />
    </div>
  );
};

// InputField Component
interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, min, max }) => (
  <div className="mb-4">
    <label className="block mb-1 font-semibold">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      min={min}
      max={max}
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default CreditAssessmentForm;
