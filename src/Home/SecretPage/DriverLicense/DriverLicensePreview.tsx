"use client";

import { FC } from "react"; // ตัด React ที่ไม่ได้ใช้
import { driverLicenseConfig } from "./types/driverLicenseConfig";
import {
  DriverLicenseData,
  DriverLicenseFieldKeys,
} from "./types/driverLicense";
import "@/styles/driverLicense.css";

interface DriverLicensePreviewProps {
  data: DriverLicenseData;
}

const DriverLicensePreview: FC<DriverLicensePreviewProps> = ({ data }) => (
  <div
    id="driver-license-preview"
    className="border rounded-lg shadow relative overflow-hidden"
    style={{
      width: driverLicenseConfig.cardWidth,
      height: driverLicenseConfig.cardHeight,
      backgroundImage: `url(${driverLicenseConfig.bgDefault})`,
      backgroundSize: "cover",
    }}
  >
    {(Object.keys(driverLicenseConfig.fields) as DriverLicenseFieldKeys[]).map(
      (key) => {
        const cfg = driverLicenseConfig.fields[key];
        const value = data[key];

        if (key === "photo" && value) {
          return (
            <img
              key={key}
              src={value}
              alt="Photo"
              className="absolute"
              style={{
                top: cfg.top,
                left: cfg.left,
                width: cfg.width,
                height: cfg.height,
                objectFit: "cover",
              }}
            />
          );
        }

        return (
          <span
            key={key}
            className="absolute whitespace-pre-line"
            style={{
              top: cfg.top,
              left: cfg.left,
              fontSize: cfg.fontSize,
              fontWeight: cfg.fontWeight ?? "normal",
              color: cfg.color ?? "#000",
            }}
          >
            {value ?? ""}
          </span>
        );
      }
    )}
  </div>
);

DriverLicensePreview.displayName = "DriverLicensePreview";
export default DriverLicensePreview;
