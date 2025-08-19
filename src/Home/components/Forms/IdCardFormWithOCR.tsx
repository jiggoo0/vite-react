// src/Home/components/Forms/IdCardFormWithOCR.tsx
import { FC, useState } from "react";
import IdCardPreview, { IdCardData } from "./IdCardPreview";

const IdCardFormWithOCR: FC = () => {
  const [formData, setFormData] = useState<IdCardData>({
    name: "",
    surname: "",
    idNumber: "",
    dob: "",
    issueDate: "",
    expiryDate: "",
  });

  // แก้ any เป็น type จริง
  interface OCRData {
    firstName: string;
    lastName: string;
    idNumber: string;
    dob: string;
    issueDate: string;
    expiryDate: string;
  }

  const mapDriverLicenseToForm = (ocrData: OCRData): IdCardData => ({
    name: ocrData.firstName,
    surname: ocrData.lastName,
    idNumber: ocrData.idNumber,
    dob: ocrData.dob,
    issueDate: ocrData.issueDate,
    expiryDate: ocrData.expiryDate,
  });

  const handleOCRResult = (ocrData: OCRData) => {
    const mappedData = mapDriverLicenseToForm(ocrData);
    setFormData(mappedData);
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() =>
          handleOCRResult({
            firstName: "John",
            lastName: "Doe",
            idNumber: "123456789",
            dob: "1990-01-01",
            issueDate: "2020-01-01",
            expiryDate: "2030-01-01",
          })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Simulate OCR
      </button>

      <IdCardPreview data={formData} className="mx-auto" />
    </div>
  );
};

export default IdCardFormWithOCR;
