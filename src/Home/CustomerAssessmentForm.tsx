// src/Home/CustomerAssessmentForm.tsx
"use client";

import React, { useState, useMemo } from "react";
import CreditProfileForm, {
  CreditProfileData,
} from "./components/CreditAssessmentForm/CreditProfileForm";
import { ApplicantData, exampleApplicant } from "@/data/applicantData";
import { defaultConfig } from "@/config/assessmentConfig";
import { calculateDTI, calculateCreditScore, assessCreditStatus } from "@/utils/calculations";
import ResultCard from "./components/CreditAssessmentForm/ResultCard";

const CustomerAssessmentForm: React.FC = () => {
  const [profileData, setProfileData] = useState<CreditProfileData | null>(null);
  const [applicant, setApplicant] = useState<ApplicantData>(exampleApplicant);

  const dti = useMemo(() => calculateDTI(applicant), [applicant]);

  // คืนค่า object
  const scoreDetails = useMemo(() => calculateCreditScore(applicant, defaultConfig), [applicant]);
  const score = scoreDetails.totalScore; // ใช้ totalScore เป็น number
  const status = useMemo(() => assessCreditStatus(score, defaultConfig.creditThreshold), [score]);

  const handleProfileSubmit = (data: CreditProfileData) => {
    setProfileData(data);
    console.log("Submitted Profile Data:", data);
  };

  const handleDebtChange = (index: number, value: number) => {
    setApplicant((prev) => {
      const newDebts = [...prev.debts];
      newDebts[index] = value;
      return { ...prev, debts: newDebts };
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <CreditProfileForm onSubmit={handleProfileSubmit} />

      <div className="p-4 border-l-4 border-red-500 bg-red-50 text-red-700 text-sm">
        <strong>หมายเหตุ:</strong> แบบฟอร์มในการประเมินใช้เทคนิคการคำนวณจาก DTI (Debt-to-Income
        Ratio) ซึ่งเป็นข้อมูลปัจจุบันที่เชื่อถือได้ 100%. ผลลัพธ์ที่คุณเห็นคือผลการประเมินของคุณ
        สิ่งที่เราทำให้คุณประเมินฟรีเพื่อไม่ให้คุณเสียเงินเสียทองกับเรื่องที่ไม่ควรเสีย.
      </div>

      <div className="p-6 border rounded-lg shadow-md space-y-4 bg-white">
        <h2 className="text-xl font-bold text-center">แบบประเมินความสามารถทางการเงิน</h2>

        <InputField
          label="รายได้รวม (บาท/เดือน)"
          description="กรอกจำนวนรายได้สุทธิที่ได้รับต่อเดือน เช่น เงินเดือน ค่าคอมมิชชั่น หรือรายได้เสริม"
          value={applicant.income}
          onChange={(val) => setApplicant((prev) => ({ ...prev, income: val }))}
        />

        {applicant.debts.map((debt, idx) => (
          <InputField
            key={idx}
            label={`หนี้รายการ ${idx + 1} (บาท/เดือน)`}
            description="กรอกภาระหนี้สินที่ต้องชำระต่อเดือน เช่น ค่างวดรถ, ค่าบัตรเครดิต, ค่ากู้ยืม"
            value={debt}
            onChange={(val) => handleDebtChange(idx, val)}
          />
        ))}

        <InputField
          label="เงินออม / หลักประกัน (บาท)"
          description="ระบุจำนวนเงินออมรวม หรือมูลค่าหลักประกันเพื่อยืนยันความมั่นคงทางการเงิน"
          value={applicant.savings}
          onChange={(val) => setApplicant((prev) => ({ ...prev, savings: val }))}
        />

        <InputField
          label="คะแนนประวัติชำระหนี้ (0-35)"
          description="ประเมินจากประวัติการชำระหนี้ที่ผ่านมา เช่น ชำระตรงเวลา ไม่มีค้างชำระ"
          value={applicant.paymentHistoryScore}
          onChange={(val) => setApplicant((prev) => ({ ...prev, paymentHistoryScore: val }))}
          min={0}
          max={35}
        />

        <InputField
          label="คะแนนความเสถียรของรายได้ (0-15)"
          description="ประเมินความมั่นคงของรายได้ เช่น งานประจำ ระยะเวลาการทำงาน รายได้คงที่"
          value={applicant.incomeStabilityScore}
          onChange={(val) => setApplicant((prev) => ({ ...prev, incomeStabilityScore: val }))}
          min={0}
          max={15}
        />

        <ResultCard
          dti={dti}
          score={score} // number
          status={status}
          debtScore={scoreDetails.debtScore} // optional ถ้าต้องแสดง
          savingsScore={scoreDetails.savingsScore} // optional
        />
      </div>

      {profileData && (
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <h3 className="font-semibold mb-2">ข้อมูลโปรไฟล์ลูกค้าที่บันทึก</h3>
          <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(profileData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

interface InputFieldProps {
  label: string;
  description?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  description,
  value,
  onChange,
  min,
  max,
}) => (
  <div className="mb-4">
    <label className="block mb-1 font-semibold">{label}</label>
    {description && <p className="text-sm text-gray-500 mb-1 leading-snug">{description}</p>}
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

export default CustomerAssessmentForm;
