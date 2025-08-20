"use client";

import { FC, memo } from "react";
import { MedicalCertificateData } from "./types/medicalCertificate";

interface MedicalCertificateProps {
  data: MedicalCertificateData;
}

const defaultText = "—";
const withFallback = (value?: string) => value?.trim() || defaultText;

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
    <div className="w-full h-full p-6 rounded-xl shadow-md bg-white relative overflow-hidden" style={{ minHeight: 400 }}>
      <h2 className="text-xl font-bold mb-4">ใบรับรองแพทย์</h2>

      <div className="space-y-2 text-gray-700">
        <p><strong>เลขที่อ้างอิง:</strong> {withFallback(referenceNo)}</p>
        <p><strong>โรงพยาบาล:</strong> {withFallback(hospital)}</p>
        <p><strong>สำนักงานกระทรวง:</strong> {withFallback(ministryOffice)}</p>
        <p><strong>วันที่ออก:</strong> {withFallback(date)}</p>
        <p><strong>ชื่อแพทย์:</strong> {withFallback(doctorName)}</p>
        <p><strong>หมายเลขใบอนุญาต:</strong> {withFallback(doctorLicenseNo)}</p>
        <p><strong>ชื่อผู้ป่วย:</strong> {withFallback(patientTitle)} {withFallback(patientName)}</p>
        <p><strong>ที่อยู่:</strong> {withFallback(address)}</p>
        <p><strong>หมายเลขบัตรประชาชน:</strong> {withFallback(citizenId)}</p>
        <p><strong>วันที่ตรวจ:</strong> {withFallback(examinedDate)}</p>
        <p><strong>การวินิจฉัย:</strong> {withFallback(diagnosis)}</p>
        <p><strong>สรุปความเห็นแพทย์:</strong> {withFallback(doctorSummary)}</p>
        <p><strong>หยุดพัก:</strong> ตั้งแต่ {withFallback(restFromDate)} ถึง {withFallback(restToDate)}</p>
        {otherNote && <p><strong>อื่นๆ:</strong> {withFallback(otherNote)}</p>}

        {/* Signatures */}
        <p><strong>แพทย์ลงชื่อ:</strong> {withFallback(doctorSigner)}</p>
        <p><strong>ผู้ป่วยลงชื่อ:</strong> {withFallback(patientSigner)}</p>
      </div>
    </div>
  );
};

export default memo(MedicalCertificate);