"use client";

import { FC, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Config และ Types
import { driverLicenseCardConfig, driverLicenseFields, DriverLicenseFormData } from "@config/driverLicenseConfig";

// Component
import Card from "../ui/Card/Card";
import Button from "../ui/Button/Button";

// Mock Data
import mockDriverLicenseData from "@__mocks__/mockDriverLicenseData";

interface SecureExportConsoleProps {
  data?: DriverLicenseFormData;
}

const SecureExportConsole: FC<SecureExportConsoleProps> = ({
  data = mockDriverLicenseData,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const exportPNG = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, { scale: 2 });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "driver_license.png";
    link.click();
  };

  const exportPDF = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("l", "px", [
      parseInt(driverLicenseCardConfig.cardWidth, 10),
      parseInt(driverLicenseCardConfig.cardHeight, 10),
    ]);

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      parseInt(driverLicenseCardConfig.cardWidth, 10),
      parseInt(driverLicenseCardConfig.cardHeight, 10)
    );
    pdf.save("driver_license.pdf");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Card
        ref={cardRef}
        className="relative overflow-hidden shadow-xl"
        style={{
          width: driverLicenseCardConfig.cardWidth,
          height: driverLicenseCardConfig.cardHeight,
          backgroundImage: `url(${driverLicenseCardConfig.bgDefault})`,
          backgroundSize: "cover",
        }}
      >
        {driverLicenseFields.map((field: typeof driverLicenseFields[number]) => {
          const value = data[field.id as keyof DriverLicenseFormData] || "";

          if (field.type === "photo" && typeof value === "string" && value) {
            return (
              <img
                key={field.id}
                src={value}
                alt="photo"
                style={{
                  position: "absolute",
                  top: field.top,
                  left: field.left,
                  width: field.width,
                  height: field.height,
                  objectFit: "cover",
                }}
              />
            );
          }

          return (
            <span
              key={field.id}
              style={{
                position: "absolute",
                top: field.top,
                left: field.left,
                fontSize: field.fontSize,
                fontWeight: field.fontWeight,
                width: field.width,
              }}
            >
              {String(value)}
            </span>
          );
        })}
      </Card>

      <div className="flex gap-3">
        <Button onClick={exportPNG}>Export PNG</Button>
        <Button onClick={exportPDF}>Export PDF</Button>
      </div>
    </div>
  );
};

export default SecureExportConsole;