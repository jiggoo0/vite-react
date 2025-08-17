"use client";

import { FC, memo } from "react";
import { idCardConfig } from "@/config/idCardConfig";

interface IdCardPreviewProps {
  data: Record<string, string | undefined>;
  className?: string;
}

const IdCardPreview: FC<IdCardPreviewProps> = ({ data, className }) => {
  return (
    <div
      className={`relative bg-gray-100 ${className}`}
      style={{ width: idCardConfig.cardWidth, height: idCardConfig.cardHeight }}
    >
      <img
        src={idCardConfig.bgDefault}
        alt="ID Card Background"
        className="absolute w-full h-full object-cover rounded-lg"
      />
      {Object.entries(idCardConfig.fields).map(([key, field]) => {
        const value = data[key];
        if (!value) return null;
        return (
          <span
            key={key}
            className="absolute whitespace-nowrap"
            style={{
              top: field.top,
              left: field.left,
              fontSize: field.fontSize,
              fontWeight: field.fontWeight ?? "normal",
            }}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
};

IdCardPreview.displayName = "IdCardPreview";
export default memo(IdCardPreview);
