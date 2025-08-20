"use client";

import { FC, memo } from "react";
import { SalaryCertificateData } from "./types/salaryCertificate";

interface SalaryCertificateProps {
  data: SalaryCertificateData;
}

const SalaryCertificate: FC<SalaryCertificateProps> = ({ data }) => {
  const {
    companyName = "",
    companyNameEn = "",
    certificateNumber = "",
    employeeName = "",
    startDate = "",
    position = "",
    department = "",
    salary = 0,
    positionAllowance = 0,
    costOfLiving = 0,
    issueDate = "",
    signPosition = "",
    phone = "",
    addressLine1 = "",
    addressLine2 = "",
  } = data;

  return (
    <div className="font-[THSarabunNew] text-[16pt] leading-[1.6] text-black bg-white w-[210mm] h-[297mm] max-w-full overflow-auto p-10 mx-auto shadow print:shadow-none print:border print:m-0 print:p-8">

      {/* Header */}
      <header className="flex justify-between items-start mb-6">
        <div className="text-right leading-tight">
          <p className="text-[18pt] font-bold">{companyName}</p>
          <p className="text-[16pt] font-bold">{companyNameEn}</p>
          <p>เลขที่ {certificateNumber}</p>
        </div>
      </header>

      {/* Title */}
      <h1 className="text-center text-[20pt] font-bold my-6 underline">
        หนังสือรับรองเงินเดือน
      </h1>

      {/* Main Content */}
      <main className="whitespace-pre-line text-justify tracking-wide">
        บริษัทฯ ขอรับรองว่า <strong>นาย {employeeName}</strong> เป็นพนักงานของบริษัทฯ
        โดยเริ่มปฏิบัติงานตั้งแต่วันที่ {startDate} จนถึงปัจจุบัน
        ดำรงตำแหน่ง {position} สังกัดแผนก {department}.
        <br />
        <br />
        โดยมีรายได้ประจำดังนี้:
        <ul className="ml-8 list-disc">
          <li>เงินเดือนประจำ: {salary.toLocaleString()} บาท / เดือน</li>
          <li>ค่าตำแหน่ง: {positionAllowance.toLocaleString()} บาท / เดือน</li>
          <li>ค่าครองชีพ: {costOfLiving.toLocaleString()} บาท / เดือน</li>
        </ul>
        <br />
        ออกให้ ณ วันที่ {issueDate} เพื่อใช้เป็นหลักฐานประกอบการยืนยันการเป็นพนักงานของบริษัทฯ เท่านั้น
      </main>

      {/* Signature */}
      <section className="mt-16 text-right">
        <p>ลงชื่อ.......................................................</p>
        <p>(นาย {employeeName})</p>
        <p>{signPosition}</p>
      </section>

      {/* Notes */}
      <section className="mt-10 text-[14pt]">
        <p className="underline font-bold">หมายเหตุ</p>
        <ol className="list-decimal ml-6">
          <li>หนังสือรับรองนี้ให้ไว้เพื่อยืนยันการเป็นพนักงานของบริษัทเท่านั้น</li>
          <li>หนังสือรับรองฉบับนี้ต้องไม่มีรอยขูด ขีด ลบ แต่อย่างใด จึงจะถือว่าสมบูรณ์</li>
        </ol>
      </section>

      {/* Contact Info */}
      <section className="mt-6 text-[14pt]">
        <p className="mb-1 font-bold">ติดต่อฝ่ายทรัพยากรบุคคล</p>
        <p>โทรศัพท์: {phone}</p>
        <p className="mt-1">ที่อยู่บริษัท:</p>
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
      </section>
    </div>
  );
};

SalaryCertificate.displayName = "SalaryCertificate";

export default memo(SalaryCertificate);