"use client";

import { FC } from "react";
import { MedicalCertificateData } from "./types/medicalCertificate";

interface MedicalCertificateProps {
  data: MedicalCertificateData;
}

const MedicalCertificate: FC<MedicalCertificateProps> = ({ data }) => {
  const {
    referenceNo,
    hospital,
    ministryOffice,
    date,
    doctorName,
    doctorLicenseNo,
    patientTitle,
    patientName,
    address,
    citizenId,
    examinedDate,
    diagnosis,
    doctorSummary,
    restFromDate,
    restToDate,
    otherNote,
    doctorSigner,
    patientSigner,
  } = data;

  return (
    <div
      className="w-full h-full p-6 rounded-xl shadow-md bg-white relative overflow-hidden"
      style={{ minHeight: 400 }}
    >
      <h2 className="text-xl font-bold mb-4">ใบรับรองแพทย์</h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>เลขที่อ้างอิง:</strong> {referenceNo}
        </p>
        <p>
          <strong>โรงพยาบาล:</strong> {hospital}
        </p>
        <p>
          <strong>สำนักงานกระทรวง:</strong> {ministryOffice}
        </p>
        <p>
          <strong>วันที่ออก:</strong> {date}
        </p>
        <p>
          <strong>ชื่อแพทย์:</strong> {doctorName}
        </p>
        <p>
          <strong>หมายเลขใบอนุญาต:</strong> {doctorLicenseNo}
        </p>
        <p>
          <strong>ชื่อผู้ป่วย:</strong> {patientTitle} {patientName}
        </p>
        <p>
          <strong>ที่อยู่:</strong> {address}
        </p>
        <p>
          <strong>หมายเลขบัตรประชาชน:</strong> {citizenId}
        </p>
        <p>
          <strong>วันที่ตรวจ:</strong> {examinedDate}
        </p>
        <p>
          <strong>การวินิจฉัย:</strong> {diagnosis}
        </p>
        <p>
          <strong>สรุปความเห็นแพทย์:</strong> {doctorSummary}
        </p>
        <p>
          <strong>หยุดพัก:</strong> ตั้งแต่ {restFromDate} ถึง {restToDate}
        </p>
        {otherNote && (
          <p>
            <strong>อื่นๆ:</strong> {otherNote}
          </p>
        )}
        <p>
          <strong>แพทย์ลงชื่อ:</strong> {doctorSigner}
        </p>
        <p>
          <strong>ผู้ป่วยลงชื่อ:</strong> {patientSigner}
        </p>
      </div>
    </div>
  );
};

MedicalCertificate.displayName = "MedicalCertificate";
export default MedicalCertificate;
