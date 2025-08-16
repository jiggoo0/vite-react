"use client";

import { FC } from "react";
import { MedicalCertificateData } from "./types/medicalCertificate";

interface MedicalCertificateProps {
  data: MedicalCertificateData;
}

export const MedicalCertificate: FC<MedicalCertificateProps> = ({ data }) => {
  return (
    <div
      className="w-full h-full p-6 rounded-xl shadow-md bg-white relative overflow-hidden"
      style={{ minHeight: 400 }}
    >
      <h2 className="text-xl font-bold mb-4">ใบรับรองแพทย์</h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>เลขที่อ้างอิง:</strong> {data.referenceNo}
        </p>
        <p>
          <strong>โรงพยาบาล:</strong> {data.hospital}
        </p>
        <p>
          <strong>สำนักงานกระทรวง:</strong> {data.ministryOffice}
        </p>
        <p>
          <strong>วันที่ออก:</strong> {data.date}
        </p>

        <p>
          <strong>ชื่อแพทย์:</strong> {data.doctorName}
        </p>
        <p>
          <strong>หมายเลขใบอนุญาต:</strong> {data.doctorLicenseNo}
        </p>

        <p>
          <strong>ชื่อผู้ป่วย:</strong> {data.patientTitle} {data.patientName}
        </p>
        <p>
          <strong>ที่อยู่:</strong> {data.address}
        </p>
        <p>
          <strong>หมายเลขบัตรประชาชน:</strong> {data.citizenId}
        </p>
        <p>
          <strong>วันที่ตรวจ:</strong> {data.examinedDate}
        </p>

        <p>
          <strong>การวินิจฉัย:</strong> {data.diagnosis}
        </p>
        <p>
          <strong>สรุปความเห็นแพทย์:</strong> {data.doctorSummary}
        </p>

        <p>
          <strong>หยุดพัก:</strong> ตั้งแต่ {data.restFromDate} ถึง{" "}
          {data.restToDate}
        </p>

        {data.otherNote && (
          <p>
            <strong>อื่นๆ:</strong> {data.otherNote}
          </p>
        )}

        <p>
          <strong>แพทย์ลงชื่อ:</strong> {data.doctorSigner}
        </p>
        <p>
          <strong>ผู้ป่วยลงชื่อ:</strong> {data.patientSigner}
        </p>
      </div>
    </div>
  );
};

MedicalCertificate.displayName = "MedicalCertificate";
export default MedicalCertificate;
