// ======================= SpecialBranchCertificate.tsx =======================
"use client";

import { FC } from "react";
import clsx from "clsx";
import { useProtectedAuth } from "@hooks/useProtectedAuth";
import {
  CertificateData,
  mockCertificateData,
} from "./SpecialBranchCertificate.mock";

const SpecialBranchCertificate: FC = () => {
  const { user } = useProtectedAuth();
  if (!user) return null;

  const effectiveRole = user.role === "temp" ? "user" : user.role;
  const isAdmin = effectiveRole === "admin";
  const isManager = effectiveRole === "manager";

  if (!(isAdmin || isManager)) {
    return (
      <p className="text-center text-red-500 font-medium">
        ❌ คุณไม่มีสิทธิ์เข้าถึงข้อมูลนี้
      </p>
    );
  }

  const data: CertificateData = mockCertificateData;

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-xl bg-white p-6 shadow-md space-y-4 animate-fadeInUp"
      )}
    >
      {/* พื้นหลัง Certificate เต็มใบ */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/certificate-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* เนื้อหา Certificate */}
      <div className="relative z-10">
        {/* โลโก้ครุฑ */}
        <div className="mb-4 flex justify-center">
          <img
            src="/assets/images/krut.webp"
            alt="Royal Thai Police Emblem"
            className="h-28 w-auto object-contain"
          />
        </div>

        <h2 className="mb-4 text-center text-3xl font-bold">
          Special Branch Certificate
        </h2>

        <div className="space-y-2 text-base leading-relaxed">
          <InfoRow label="Authority" value={data.authority} />
          <InfoRow label="Location" value={data.location} />
          <InfoRow label="Date" value={data.date} />
          <InfoRow label="Recipient" value={data.recipient} />
          <InfoRow label="Note" value={data.note} />
          <InfoRow label="Passport No" value={data.passportNo} />
          <InfoRow label="Behavior Statement" value={data.behaviorStatement} />
          <InfoRow
            label="Officer"
            value={`${data.officerRank} ${data.officerName}`}
          />
          <InfoRow label="Document No" value={data.docNo} />
          <InfoRow label="File No" value={data.fileNo} />
        </div>

        {/* หมายเหตุด้านล่าง */}
        <p className="mt-4 text-sm text-red-500 italic text-center">
          หมายเหตุ: รายละเอียดเนื้อหาทั้งหมดเป็นการจัดวาง ยังไม่รีทัช ในส่วนนี้
          หากเนื้อหาไม่ตรงให้ลูกค้าทักแชทแจ้งทันที
          กรณีที่ทางเราทำตามรายละเอียดที่ให้มา
          เมื่อรีทัชแล้วไม่สามารถแก้ไขได้ทุกกรณี
        </p>

        {/* รูปประกอบตัวอย่าง */}
        <div className="mt-6 flex justify-center">
          <img
            src="/images/test.jpg"
            alt="ตัวอย่างประกอบ"
            className="h-150 w-auto object-contain rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: FC<InfoRowProps> = ({ label, value }) => (
  <p>
    <strong>{label}:</strong> {value}
  </p>
);

export default SpecialBranchCertificate;
