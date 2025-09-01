// src/Home/components/CreditAssessmentForm/CreditAssessmentForm.tsx
"use client";

import React, { useState, useMemo } from "react";
import { ApplicantData, exampleApplicant } from "@/data/applicantData";
import { defaultConfig } from "@/config/assessmentConfig";
import { calculateDTI, calculateCreditScore, assessCreditStatus } from "@/utils/calculations";
import ResultCard from "./ResultCard";

const CreditAssessmentForm: React.FC = () => {
  const [applicant, setApplicant] = useState<ApplicantData>(exampleApplicant);

  // คำนวณ DTI และคะแนนเครดิต
  const dti = useMemo(() => calculateDTI(applicant), [applicant]);
  const score = useMemo(() => calculateCreditScore(applicant, defaultConfig), [applicant]);
  const status = useMemo(() => assessCreditStatus(score, defaultConfig.creditThreshold), [score]);

  // อัปเดตค่า debts
  const handleDebtChange = (index: number, value: number) => {
    const newDebts = [...applicant.debts];
    newDebts[index] = value;
    setApplicant({ ...applicant, debts: newDebts });
  };

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-md mx-auto space-y-4 bg-white">
      <h2 className="text-xl font-bold text-center">Credit Assessment Form</h2>

      {/* รายได้ */}
      <InputField
        label="รายได้รวม (บาท/เดือน)"
        value={applicant.income}
        onChange={(val) => setApplicant({ ...applicant, income: val })}
      />

      {/* หนี้ */}
      {applicant.debts.map((debt, idx) => (
        <InputField
          key={idx}
          label={`หนี้รายการ ${idx + 1} (บาท/เดือน)`}
          value={debt}
          onChange={(val) => handleDebtChange(idx, val)}
        />
      ))}

      {/* เงินออม */}
      <InputField
        label="เงินออม / หลักประกัน (บาท)"
        value={applicant.savings}
        onChange={(val) => setApplicant({ ...applicant, savings: val })}
      />

      {/* คะแนนประวัติชำระหนี้ */}
      <InputField
        label="คะแนนประวัติชำระหนี้ (0-35)"
        value={applicant.paymentHistoryScore}
        onChange={(val) => setApplicant({ ...applicant, paymentHistoryScore: val })}
        min={0}
        max={35}
      />

      {/* คะแนนความเสถียรของรายได้ */}
      <InputField
        label="คะแนนความเสถียรของรายได้ (0-15)"
        value={applicant.incomeStabilityScore}
        onChange={(val) => setApplicant({ ...applicant, incomeStabilityScore: val })}
        min={0}
        max={15}
      />

      {/* แสดงผลลัพธ์ */}
      <ResultCard dti={dti} score={score} status={status} />
    </div>
  );
};

// Component InputField
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
