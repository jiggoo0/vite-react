"use client";

import { FC, memo } from "react";
import clsx from "clsx";
import { useProtectedAuth } from "@hooks/useProtectedAuth";
import mockCertificateData, {
  SpecialBranchCertificateData,
} from "@/__mocks__/specialBranchCertificate";

// Reusable row component
const InfoRow: FC<{ label: string; value: string }> = memo(({ label, value }) => (
  <p className="flex justify-between text-gray-700">
    <span className="font-medium">{label}:</span>
    <span>{value}</span>
  </p>
));
InfoRow.displayName = "InfoRow";

const SpecialBranchCertificate: FC = () => {
  const { user } = useProtectedAuth();
  if (!user) return null;

  const effectiveRole = user.role === "temp" ? "user" : user.role;
  const isAuthorized = effectiveRole === "admin" || effectiveRole === "manager";

  if (!isAuthorized)
    return (
      <p className="text-center text-red-500 font-medium">
        ❌ คุณไม่มีสิทธิ์เข้าถึงข้อมูลนี้
      </p>
    );

  const data: SpecialBranchCertificateData = mockCertificateData;

  return (
    <div className={clsx("relative overflow-hidden rounded-xl bg-white p-6 shadow-md space-y-6 animate-fadeInUp")}>
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/certificate-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <img src="/assets/images/krut.webp" alt="Royal Thai Police Emblem" className="h-28 w-auto object-contain" />
        <h2 className="text-3xl font-bold text-center">Special Branch Certificate</h2>

        <div className="w-full max-w-md space-y-2 text-base leading-relaxed">
          {Object.entries(data).map(([key, value]) => (
            <InfoRow key={key} label={key} value={value as string} />
          ))}
        </div>

        <p className="text-sm text-red-500 italic text-center">
          หมายเหตุ: รายละเอียดเนื้อหาทั้งหมดเป็นการจัดวาง ยังไม่รีทัช
          หากเนื้อหาไม่ตรงให้ลูกค้าทักแชทแจ้งทันที
          เมื่อรีทัชแล้วไม่สามารถแก้ไขได้ทุกกรณี
        </p>

        <img src="/images/test.jpg" alt="ตัวอย่างประกอบ" className="h-[150px] w-auto object-contain rounded-md shadow-sm" />
      </div>
    </div>
  );
};

SpecialBranchCertificate.displayName = "SpecialBranchCertificate";

export default memo(SpecialBranchCertificate);