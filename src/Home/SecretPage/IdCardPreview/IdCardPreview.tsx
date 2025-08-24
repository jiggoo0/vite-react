"use client";

import { FC } from "react";
import type { IdCardData } from "../../types/idCard";

interface Props {
  data: IdCardData;
  className?: string; // optional
}

const IdCardPreview: FC<Props> = ({ data, className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold">ตัวอย่างบัตรประชาชน</h2>
      {data.photo && (
        <img src={data.photo} alt="ID Photo" className="w-32 h-32 object-cover rounded-md" />
      )}
      <p><strong>ชื่อ-สกุล:</strong> {data.fullName}</p>
      <p><strong>เลขบัตรประชาชน:</strong> {data.idNumber}</p>
      <p><strong>วันเกิด:</strong> {data.birthDate}</p>
      <p><strong>ที่อยู่:</strong> {data.address}</p>
    </div>
  );
};

export default IdCardPreview;