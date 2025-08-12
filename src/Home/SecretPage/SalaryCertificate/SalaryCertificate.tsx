// src/Home/SecretPage/SalaryCertificate.tsx
import React from "react";
import { mockSalaryCertificate } from "./mockSalaryCertificate";

const SalaryCertificate: React.FC = () => {
  const data = mockSalaryCertificate;

  return (
    <div
      className="
        font-[THSarabunNew] text-[16pt] leading-[1.6] text-black bg-white
        w-[210mm] h-[297mm] max-w-full overflow-auto p-10 mx-auto
        shadow print:shadow-none print:border print:m-0 print:p-8
      "
    >
      {/* ─── Header ─────────────────────────────── */}
      <div className="flex justify-between items-start">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="w-[3cm] h-[3cm] object-contain"
        />
        <div className="text-right leading-tight">
          <p className="text-[18pt] font-bold">{data.companyName}</p>
          <p className="text-[16pt] font-bold">{data.companyNameEn}</p>
          <p>เลขที่ {data.certificateNumber}</p>
        </div>
      </div>

      {/* ─── Title ─────────────────────────────── */}
      <h1 className="text-center text-[20pt] font-bold my-6 underline">
        หนังสือรับรองเงินเดือน
      </h1>

      {/* ─── Body ─────────────────────────────── */}
      <div className="whitespace-pre-line text-justify tracking-wide">
        บริษัทฯ ขอรับรองว่า{" "}
        <strong>นาย {data.employeeName}</strong>{" "}
        เป็นพนักงานของบริษัทฯ โดยเริ่มปฏิบัติงานตั้งแต่วันที่ {data.startDate}{" "}
        จนถึงปัจจุบัน ดำรงตำแหน่ง {data.position} สังกัดแผนก {data.department}
        <br />
        <br />
        โดยมีรายได้ประจำดังนี้:
        <ul className="ml-8 list-disc">
          <li>เงินเดือนประจำ: {data.salary.toLocaleString()} บาท / เดือน</li>
          <li>ค่าตำแหน่ง: {data.positionAllowance.toLocaleString()} บาท / เดือน</li>
          <li>ค่าครองชีพ: {data.costOfLiving.toLocaleString()} บาท / เดือน</li>
        </ul>
        <br />
        ออกให้ ณ วันที่ {data.issueDate}
        <br />
        เพื่อใช้เป็นหลักฐานประกอบการยืนยันการเป็นพนักงานของบริษัทฯ เท่านั้น
      </div>

      {/* ─── Signature ─────────────────────────── */}
      <div className="mt-16 text-right">
        <p>ลงชื่อ.......................................................</p>
        <p>(นาย {data.employeeName})</p>
        <p>{data.signPosition}</p>
      </div>

      {/* ─── Notes ─────────────────────────────── */}
      <div className="mt-10 text-[14pt]">
        <p className="underline font-bold">หมายเหตุ</p>
        <ol className="list-decimal ml-6">
          <li>หนังสือรับรองนี้ให้ไว้เพื่อยืนยันการเป็นพนักงานของบริษัทเท่านั้น</li>
          <li>
            หนังสือรับรองฉบับนี้ต้องไม่มีรอยขูด ขีด ลบ แต่อย่างใด จึงจะถือว่าสมบูรณ์
          </li>
        </ol>
      </div>

      {/* ─── Contact Info ──────────────────────── */}
      <div className="mt-6 text-[14pt]">
        <p className="mb-1 font-bold">ติดต่อฝ่ายทรัพยากรบุคคล</p>
        <p>โทรศัพท์: {data.phone}</p>
        <p className="mt-1">ที่อยู่บริษัท:</p>
        <p>{data.addressLine1}</p>
        <p>{data.addressLine2}</p>
      </div>
    </div>
  );
};

export default SalaryCertificate;