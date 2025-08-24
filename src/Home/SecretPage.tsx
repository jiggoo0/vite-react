"use client";

import { FC, useState } from "react";
import { useProtectedAuth } from "@/hooks/useProtectedAuth";
import { getLazyCards, EffectiveRole, LazyCard } from "@/config/secretCards.config";

// ถ้าไม่มี module จริง ให้สร้าง mock type ไว้ชั่วคราว
export interface IdCardData {
  fullName: string;
  idNumber: string;
  birthDate: string;
  address: string;
  photo?: string;
}

// Mock component ถ้ายังไม่มีไฟล์จริง
const IdCardPreview: FC<{ data: IdCardData; className?: string }> = ({ data, className }) => (
  <div className={className}>
    <h3>ID Card Preview</h3>
    <p>{data.fullName}</p>
  </div>
);

const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  const [idCardData, setIdCardData] = useState<IdCardData>({
    fullName: "",
    idNumber: "",
    birthDate: "",
    address: "",
    photo: "",
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
        <span className="text-lg font-medium">Loading...</span>
      </div>
    );
  }

  if (!user) return null;

  // แปลง role ให้ตรงกับ EffectiveRole
  const effectiveRole: EffectiveRole =
    ["admin", "manager", "user"].includes(user.role)
      ? (user.role as EffectiveRole)
      : "user";

  // สร้าง safeUser แบบ type-safe ตรงกับ type User ของ getLazyCards
  const safeUser = {
    username: user.username || "unknown",
    role: effectiveRole,
  };

  const lazyCards: LazyCard[] = getLazyCards(safeUser, effectiveRole);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Lazy Cards Sections */}
      {lazyCards.map(({ title, component }, idx) => (
        <section
          key={idx}
          id={`section-${idx}`}
          className="space-y-4 border p-4 rounded-md bg-white shadow"
        >
          <h2 className="text-lg font-semibold">{title}</h2>
          <div>{component}</div>
        </section>
      ))}

      {/* ID Card Section */}
      <section
        id="section-idcard"
        className="space-y-4 border p-4 rounded-md bg-white shadow"
      >
        <h2 className="text-lg font-semibold">ID Card</h2>
        <IdCardPreview data={idCardData} className="flex-1" />
      </section>
    </main>
  );
};

export default SecretPage;