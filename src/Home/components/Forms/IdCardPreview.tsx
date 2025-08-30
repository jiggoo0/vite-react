// src/Home/components/Forms/IdCardPreview.tsx
import { FC } from "react";

export interface IdCardData {
  name: string;
  surname: string;
  idNumber: string;
  dob: string;
  issueDate: string;
  expiryDate: string;
}

interface IdCardPreviewProps {
  data: IdCardData;
  className?: string;
}

const IdCardPreview: FC<IdCardPreviewProps> = ({ data, className }) => {
  return (
    <div className={`max-w-sm p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md ${className}`}>
      <h2 className="text-xl font-bold mb-2">
        {data.name} {data.surname}
      </h2>
      <p>ID: {data.idNumber}</p>
      <p>วันเกิด: {data.dob}</p>
      <p>วันที่ออกบัตร: {data.issueDate}</p>
      <p>วันหมดอายุ: {data.expiryDate}</p>
    </div>
  );
};

export default IdCardPreview;
