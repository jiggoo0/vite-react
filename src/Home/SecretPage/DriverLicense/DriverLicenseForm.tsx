"use client";

import { FC, useState } from "react";
import { DriverLicenseData } from "./types/driverLicense";
import DriverLicensePreview from "./DriverLicensePreview";
import "@/styles/driverLicense.css";

const defaultData: DriverLicenseData = {
  fullName: "",
  idNumber: "",
  dob: "",
  issueDate: "",
  expiryDate: "",
  address: "",
  photo: "",
  licenseType: "",
  bloodType: "",
};

const DriverLicenseForm: FC = () => {
  const [formData, setFormData] = useState<DriverLicenseData>(defaultData);

  const handleChange = (field: keyof DriverLicenseData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(formData).map(([key, value]) => {
          const inputId = `dl-${key}`;
          return (
            <div key={key}>
              <label
                htmlFor={inputId}
                className="block font-medium mb-1 capitalize"
              >
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                id={inputId}
                type={
                  ["dob", "issueDate", "expiryDate"].includes(key)
                    ? "date"
                    : "text"
                }
                value={value}
                onChange={(e) =>
                  handleChange(key as keyof DriverLicenseData, e.target.value)
                }
                className="w-full border rounded px-3 py-2"
              />
            </div>
          );
        })}
      </div>

      <h3 className="text-lg font-semibold">Preview</h3>
      <DriverLicensePreview data={formData} />
    </div>
  );
};

DriverLicenseForm.displayName = "DriverLicenseForm";
export default DriverLicenseForm;
