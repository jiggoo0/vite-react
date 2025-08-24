"use client";

import { FC, useState } from "react";
import { useProtectedAuth } from "@/hooks/useProtectedAuth";
import {
  getLazyCards,
  EffectiveRole,
  LazyCard,
} from "@/config/secretCards.config";
import PageSection from "@/Home/components/common/PageSection";

// Type สำหรับ ID Card
export interface IdCardData {
  fullName: string;
  idNumber: string;
  birthDate: string;
  address: string;
  photo?: string;
}

// Mock ID Card Preview component
const IdCardPreview: FC<{ data: IdCardData; className?: string }> = ({
  data,
  className,
}) => (
  <div className={className}>
    <h3>ID Card Preview</h3>
    <p>{data.fullName}</p>
    <p>{data.idNumber}</p>
    <p>{data.birthDate}</p>
    <p>{data.address}</p>
  </div>
);

const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  const [idCardData, setIdCardData] = useState<IdCardData>({
    fullName: "",
    idNumber: "",
    birthDate: "",
    address: "",
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
        <span className="text-lg font-medium">Loading...</span>
      </div>
    );
  }

  if (!user) return null;

  const effectiveRole: EffectiveRole = ["admin", "manager", "user"].includes(
    user.role
  )
    ? (user.role as EffectiveRole)
    : "user";

  const safeUser = {
    username: user.username || "unknown",
    role: effectiveRole,
  };

  const lazyCards: LazyCard[] = getLazyCards(safeUser, effectiveRole);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Lazy Cards Sections ปิดชื่อ section */}
      {lazyCards.map(({ component }, idx) => (
        <PageSection key={idx} hideTitle>
          {component}
        </PageSection>
      ))}

      {/* ID Card Section ปิดชื่อ section */}
      <PageSection hideTitle>
        <IdCardPreview data={idCardData} className="flex-1" />
      </PageSection>
    </main>
  );
};

export default SecretPage;
