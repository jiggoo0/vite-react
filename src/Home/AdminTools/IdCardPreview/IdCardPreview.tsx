"use client";

import { FC } from "react";
import type { IdCardData } from "../../types/idCard";
import { idCardFields } from "@/config/idCardConfig";

interface Props {
  data: IdCardData;
  className?: string; // optional container styling
}

const IdCardPreview: FC<Props> = ({ data, className = "" }) => {
  return (
    <div className={`${className} p-4 border rounded-lg shadow-md bg-white space-y-2`}>
      <h2 className="text-xl font-semibold">ตัวอย่างบัตรประชาชน</h2>

      {data.photo && (
        <img src={data.photo} alt="ID Photo" className="w-32 h-32 object-cover rounded-md border" />
      )}

      <div className="space-y-1 text-sm">
        {idCardFields
          .filter((f) => f.id !== "photo")
          .map((field) => {
            const value = data[field.id as keyof IdCardData]; // ✅ properly typed
            return (
              <p key={field.id}>
                <strong>{field.label || field.id}:</strong> {value}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default IdCardPreview;
