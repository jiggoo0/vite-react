// src/Home/components/CreditAssessmentForm/ResultCard.tsx
"use client";

import React from "react";

interface ResultCardProps {
  dti: number; // อัตราส่วนหนี้ต่อรายได้ (%)
  score: number; // คะแนนเครดิตรวม (totalScore)
  status: string; // ผลการประเมิน ("ผ่าน" / "ไม่ผ่าน")
  debtScore?: number; // คะแนนจาก DTI (optional)
  savingsScore?: number; // คะแนนจากเงินออม/หลักประกัน (optional)
}

const ResultCard: React.FC<ResultCardProps> = ({ dti, score, status, debtScore, savingsScore }) => {
  // กำหนดสีพื้นหลังและตัวอักษรตามสถานะ
  const statusColor = status === "ผ่าน" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800";

  return (
    <div className="p-4 border rounded-lg shadow-md mt-4 space-y-3 bg-white">
      <h3 className="text-lg font-semibold">ผลการประเมินเครดิต</h3>

      <div>
        <span className="font-semibold">DTI:</span> {dti.toFixed(2)}%
      </div>

      <div>
        <span className="font-semibold">Credit Score (รวม):</span> {score}
      </div>

      {debtScore !== undefined && (
        <div>
          <span className="font-semibold">คะแนนจาก DTI:</span> {debtScore.toFixed(2)}
        </div>
      )}

      {savingsScore !== undefined && (
        <div>
          <span className="font-semibold">คะแนนจากเงินออม/หลักประกัน:</span>{" "}
          {savingsScore.toFixed(2)}
        </div>
      )}

      <div className={`p-2 rounded ${statusColor} font-bold text-center`}>{status}</div>
    </div>
  );
};

export default ResultCard;
