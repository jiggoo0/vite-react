"use client";

import { FC } from "react";
import { IdCardData } from "@/Home/types/idCard";
import { idCardCardConfig, idCardFields } from "@/config/idCardConfig";

interface Props {
  data: IdCardData;
}

const IdCardPreview: FC<Props> = ({ data }) => {
  return (
    <div
      className="relative border rounded-md overflow-hidden"
      style={{ width: idCardCardConfig.cardWidth, height: idCardCardConfig.cardHeight, backgroundImage: `url(${idCardCardConfig.bgDefault})`, backgroundSize: "cover" }}
    >
      {idCardFields.map(field => {
        const value = field.id === "photo" ? <img src={data.photo} alt="ID Photo" className="w-full h-full object-cover rounded" /> : data[field.id];
        return (
          <div
            key={String(field.id)}
            style={{ position: "absolute", top: field.top, left: field.left, width: field.width, height: field.height, fontSize: field.fontSize, fontWeight: field.fontWeight, color: field.color }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default IdCardPreview;