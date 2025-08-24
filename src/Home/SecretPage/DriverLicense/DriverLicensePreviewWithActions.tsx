"use client";

import { FC, memo } from "react";
import FieldDraggable from "./ui/FieldDraggable"; // ปรับ path ให้ตรง
import { DriverLicenseData } from "./types/driverLicense";
import { driverLicenseFields, driverLicenseCardConfig } from "@/config/driverLicenseConfig";
import "@/styles/driverLicense.css";

interface Props {
  data: DriverLicenseData;
  positions?: Record<string, { top: string; left: string }>;
  onPositionChange?: (fieldId: string, top: string, left: string) => void;
}

const DriverLicensePreview: FC<Props> = ({ data, positions, onPositionChange }) => {
  const { cardWidth, cardHeight, bgDefault } = driverLicenseCardConfig;

  return (
    <div
      id="driver-license-preview"
      className="relative overflow-hidden border border-gray-300 rounded-md shadow-md bg-white"
      style={{
        width: cardWidth,
        height: cardHeight,
        backgroundImage: bgDefault ? `url(${bgDefault})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {driverLicenseFields.map((field) => {
        const value = data[field.id as keyof DriverLicenseData];
        if (!value) return null;

        const pos = positions?.[field.id] ?? { top: field.top, left: field.left };

        if (field.type === "photo") {
          return (
            <FieldDraggable
              key={field.id}
              top={pos.top}
              left={pos.left}
              onPositionChange={(t: string, l: string) => onPositionChange?.(field.id, t, l)}
            >
              <img
                src={value as string}
                alt="Driver Photo"
                draggable={false}
                className="object-cover rounded-md"
                style={{
                  width: field.width,
                  height: field.height,
                }}
              />
            </FieldDraggable>
          );
        }

        return (
          <FieldDraggable
            key={field.id}
            top={pos.top}
            left={pos.left}
            onPositionChange={(t: string, l: string) => onPositionChange?.(field.id, t, l)}
          >
            <span
              className="absolute font-sans whitespace-nowrap"
              style={{
                fontSize: field.fontSize,
                fontWeight: field.fontWeight,
                color: field.color ?? "#000",
                width: field.width ?? "auto",
                height: field.height ?? "auto",
              }}
            >
              {value}
            </span>
          </FieldDraggable>
        );
      })}
    </div>
  );
};

DriverLicensePreview.displayName = "DriverLicensePreview";

export default memo(DriverLicensePreview);