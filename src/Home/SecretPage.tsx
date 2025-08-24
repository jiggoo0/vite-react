"use client";

import { FC, useState } from "react";
import { useProtectedAuth } from "../hooks/useProtectedAuth";
import LazyA4Card from "./components/common/LazyA4Card";
import PageSection from "./components/common/PageSection";
import { getLazyCards, EffectiveRole } from "../config/secretCards.config";
import IdCardForm from "./IdCardForm";
import IdCardPreview from "./SecretPage/IdCardPreview/IdCardPreview";
import { IdCardData } from "@/Home/types/idCard"; // path ต้องตรงไฟล์จริง

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

  const effectiveRole: EffectiveRole = ["admin", "manager", "user"].includes(user.role)
    ? (user.role as EffectiveRole)
    : "user";

  const lazyCards = getLazyCards(user, effectiveRole);

  const sectionTitles = [
    "Header Section",
    "Registration Section",
    "Salary Certificate",
    "Medical Certificate",
    "ID Card",
    "Kbank Notifications",
    "Special Branch",
    "Footer / Actions",
  ] as const;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {lazyCards.map(({ component, delay, isBlurred, fallback }, idx) => (
        <PageSection
          key={idx}
          id={`section-${idx}`}
          title={sectionTitles[idx] ?? `Section ${idx + 1}`}
        >
          <LazyA4Card delay={delay} isBlurred={isBlurred} fallback={fallback}>
            {component}
          </LazyA4Card>
        </PageSection>
      ))}

      <PageSection id="section-idcard" title="ID Card">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <IdCardForm
              className="w-full"
              onChange={(partialData) =>
                setIdCardData({
                  fullName: partialData.fullName || "",
                  idNumber: partialData.idNumber || "",
                  birthDate: partialData.birthDate || "",
                  address: partialData.address || "",
                  photo: partialData.photo || "",
                })
              }
            />
          </div>
          <div className="flex-1">
            <IdCardPreview data={idCardData} />
          </div>
        </div>
      </PageSection>
    </main>
  );
};

export default SecretPage;