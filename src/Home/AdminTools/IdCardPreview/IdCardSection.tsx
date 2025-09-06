"use client";

import React, { FC } from "react";
import clsx from "clsx";
import { IdCardData } from "@/Home/types/idCard";

interface Props {
  data: IdCardData;
  className?: string;
  onChange?: (data: IdCardData) => void;
}

const IdCardSection: FC<Props> = ({ data, className, onChange }) => {
  const handleInputChange = (field: keyof IdCardData, value: string) => {
    onChange?.({ ...data, [field]: value });
  };

  return (
    <div className={clsx("bg-white p-4 rounded-xl shadow-md space-y-4", className)}>
      <h3 className="text-lg font-semibold">แสดงข้อมูลบัตรประชาชน</h3>

      <div className="space-y-3">
        {/* ชื่อ-สกุล */}
        <div>
          <label className="font-medium">ชื่อ-สกุล</label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* เลขบัตรประชาชน */}
        <div>
          <label className="font-medium">เลขบัตรประชาชน</label>
          <input
            type="text"
            value={data.idNumber}
            onChange={(e) => handleInputChange("idNumber", e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* วันเกิด */}
        <div>
          <label className="font-medium">วันเกิด</label>
          <input
            type="date"
            value={data.birthDate}
            onChange={(e) => handleInputChange("birthDate", e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* ที่อยู่ */}
        <div>
          <label className="font-medium">ที่อยู่</label>
          <textarea
            value={data.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* รูปบัตรประชาชน */}
        <div>
          <label className="font-medium">รูปบัตรประชาชน</label>
          {data.photo ? (
            <img
              src={data.photo}
              alt="ID Card"
              className="mt-2 max-h-40 object-contain rounded-md border"
            />
          ) : (
            <p className="text-gray-500 mt-2">ยังไม่มีรูปบัตรประชาชน</p>
          )}
        </div>
      </div>
    </div>
  );
};

IdCardSection.displayName = "IdCardSection";
export default IdCardSection;
