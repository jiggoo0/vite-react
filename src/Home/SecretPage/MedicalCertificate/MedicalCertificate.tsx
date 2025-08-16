'use client';

import { FC } from 'react';

// Type ของข้อมูลใบความเห็นแพทย์
export interface MedicalCertificateData {
  referenceNo: string;
  hospital: string;
  ministryOffice: string;
  date: string;
  doctorName: string;
  doctorLicenseNo: string;
  patientTitle: string;
  patientName: string;
  address: string;
  citizenId: string;
  examinedDate: string;
  diagnosis: string;
  doctorSummary: string;
  attendedToday: boolean;
  restFromDate: string;
  restToDate: string;
  otherNote?: string;
  doctorSigner: string;
  patientSigner: string;
}

// Card wrapper ปกติ
export const CardWrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="
      bg-white dark:bg-base-100
      rounded-2xl shadow-sm border border-base-300
      p-4 sm:p-6 lg:p-8
      transition-all hover:shadow-md
      mx-auto w-full
    "
  >
    {children}
  </div>
);

// A4 wrapper สำหรับ print
export const A4CardWrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="
      a4-card-wrapper
      bg-white dark:bg-base-100
      rounded-2xl shadow-sm border border-base-300
      p-4 sm:p-6 lg:p-8
      transition-all hover:shadow-md
      mx-auto w-full
      max-w-[210mm] min-h-[297mm]
      sm:max-w-full sm:min-h-auto
    "
    style={{
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: "'Krut', sans-serif",
    }}
  >
    {children}
  </div>
);

// คอมโพเนนต์ Medical Certificate พร้อม print A4
export const MedicalCertificate: FC<{ data: MedicalCertificateData }> = ({ data }) => {
  return (
    <A4CardWrapper>
      {/* Header */}
      <div className="text-center mb-6">
        <img src="/fonts/krut.webp" alt="Krut Logo" className="mx-auto mb-2 w-20 h-auto" />
        <h1 className="text-xl font-bold mb-1">ใบความเห็นแพทย์</h1>
        <p className="text-sm text-gray-600">{data.hospital}</p>
        <p className="text-sm text-gray-600">{data.ministryOffice}</p>
      </div>

      {/* Document info */}
      <div className="mb-4 text-sm">
        <p>
          <strong>เลขที่:</strong> {data.referenceNo}
        </p>
        <p>
          <strong>วันที่:</strong> {data.date}
        </p>
      </div>

      {/* Doctor info */}
      <div className="mb-4 text-sm">
        <p>
          <strong>ข้าพเจ้า:</strong> {data.doctorName}
        </p>
        <p>
          <strong>ใบอนุญาตประกอบวิชาชีพเวชกรรมเลขที่:</strong> {data.doctorLicenseNo}
        </p>
      </div>

      {/* Patient info */}
      <div className="mb-4 text-sm">
        <p>
          <strong>ได้ตรวจร่างกาย:</strong> {data.patientTitle} {data.patientName}
        </p>
        <p>
          <strong>สถานที่อยู่:</strong> {data.address}
        </p>
        <p>
          <strong>หมายเลขบัตรประชาชน:</strong> {data.citizenId}
        </p>
        <p>
          <strong>แล้วเมื่อวันที่:</strong> {data.examinedDate}
        </p>
      </div>

      {/* Diagnosis & summary */}
      <div className="mb-4 text-sm">
        <p>
          <strong>สันนิษฐานว่าเป็น:</strong> {data.diagnosis}
        </p>
        <p>
          <strong>สรุปความเห็นและข้อแนะนำของแพทย์:</strong> {data.doctorSummary}
        </p>
      </div>

      {/* Attendance */}
      <div className="mb-4 text-sm">
        <p>
          <strong>ผู้ป่วยได้มารับการตรวจรักษาในวันนี้จริง:</strong> {data.attendedToday ? '✓' : '✗'}
        </p>
      </div>

      {/* Rest period */}
      <div className="mb-4 text-sm">
        <p>
          <strong>ให้หยุดพัก:</strong> ตั้งแต่วันที่ {data.restFromDate} ถึงวันที่ {data.restToDate}
        </p>
        {data.otherNote && (
          <p>
            <strong>อื่นๆ (ระบุ):</strong> {data.otherNote}
          </p>
        )}
      </div>

      {/* Signatures */}
      <div className="flex justify-between mt-8 text-sm">
        <div className="text-center">
          <p>ลงชื่อ</p>
          <p className="font-semibold">{data.doctorSigner}</p>
          <p>แพทย์ผู้ตรวจ</p>
        </div>
        <div className="text-center">
          <p>ข้าพเจ้าได้รับการตรวจรักษาจากแพทย์จริง</p>
          <p className="font-semibold mt-2">{data.patientSigner}</p>
          <p>ผู้รับการตรวจ</p>
        </div>
      </div>
    </A4CardWrapper>
  );
};

export default MedicalCertificate;
