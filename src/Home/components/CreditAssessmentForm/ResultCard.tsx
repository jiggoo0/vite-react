// src/Home/components/CreditAssessmentForm/ResultCard.tsx
"use client";

import React from "react";

interface ResultCardProps {
  dti: number; // อัตราส่วนหนี้ต่อรายได้ (%)
  score: number; // คะแนนเครดิตรวม
  status: string; // ผลการประเมิน ("ผ่าน" / "ไม่ผ่าน")
}

const ResultCard: React.FC<ResultCardProps> = ({ dti, score, status }) => {
  // กำหนดสีพื้นหลังและตัวอักษรตามสถานะ
  const statusColor = status === "ผ่าน" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800";

  return (
    <div className="p-4 border rounded-lg shadow-md mt-4 space-y-2">
      <h3 className="text-lg font-semibold">ผลการประเมินเครดิต</h3>

      <div>
        <span className="font-semibold">DTI:</span> {dti.toFixed(2)}%
      </div>

      <div>
        <span className="font-semibold">Credit Score:</span> {score}
      </div>

      <div className={`p-2 rounded ${statusColor} font-bold text-center`}>{status}</div>
    </div>
  );
};

export default ResultCard;
