"use client";

import { ReactNode, lazy } from "react";
import SecretHeader from "@home/components/SecretSection/SecretHeader";
import SecretDescription from "@home/components/SecretSection/SecretDescription";
import SecretActions from "@home/components/SecretSection/SecretActions";
import DocumentDownload from "@home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@home/components/SecretSection/KbankNotificationCard";
import BlurContact from "@home/components/SecretSection/BlurContact/BlurContact";
import DriverLicenseFormPage from "@home/SecretPage/DriverLicense/DriverLicenseForm";
import IdCardFormWithOCR from "@home/components/Forms/IdCardFormWithOCR";

import mockRegistrationData from "@__mocks__/mockRegistrationData";
import mockSalaryCertificate from "@__mocks__/mockSalaryCertificate";
import mockMedicalCertificate from "@__mocks__/mockMedicalCertificate";
import { kbankMockData } from "@__mocks__/kbankIOSNotification";

const RegistrationPreview = lazy(
  () => import("@home/SecretPage/RegistrationPreview/RegistrationPreview")
);
const SalaryCertificate = lazy(
  () => import("@home/SecretPage/SalaryCertificate/SalaryCertificate")
);
const MedicalCertificate = lazy(
  () => import("@home/SecretPage/MedicalCertificate/MedicalCertificate")
);
const SpecialBranchCertificate = lazy(
  () =>
    import(
      "@home/SecretPage/SpecialBranchCertificate/SpecialBranchCertificate"
    )
);

export type EffectiveRole = "admin" | "user" | "manager";

export type LazyCard = {
  component: ReactNode;
  delay: number;
  isBlurred?: boolean;
  fallback?: ReactNode;
};

export const getLazyCards = (
  user: { username: string; role: string },
  effectiveRole: EffectiveRole
): LazyCard[] => {
  const shouldBlur = effectiveRole !== "admin";
  const isAdminOrManager = effectiveRole === "admin" || effectiveRole === "manager";

  const cards: LazyCard[] = [
    { component: <SecretHeader />, delay: 0 },
    {
      component: <SecretDescription user={{ ...user, role: effectiveRole }} />,
      delay: 50,
    },
    { component: <DocumentDownload />, delay: 100 },
    { component: <DriverLicenseFormPage />, delay: 150, isBlurred: shouldBlur },
    {
      component: <RegistrationPreview {...mockRegistrationData} />,
      delay: 200,
      isBlurred: shouldBlur,
      fallback: <div>Loading Registration...</div>,
    },
    {
      component: <SalaryCertificate data={mockSalaryCertificate} />,
      delay: 300,
      isBlurred: shouldBlur,
      fallback: <div>Loading Salary Certificate...</div>,
    },
    {
      component: <MedicalCertificate data={mockMedicalCertificate} />,
      delay: 400,
      isBlurred: shouldBlur,
      fallback: <div>Loading Medical Certificate...</div>,
    },
    { component: <IdCardFormWithOCR />, delay: 500, isBlurred: shouldBlur },
    {
      component: (
        <>
          {kbankMockData.map((item) => (
            <KbankNotificationCard key={item.id} data={item} />
          ))}
        </>
      ),
      delay: 600,
      isBlurred: shouldBlur,
    },
  ];

  if (isAdminOrManager) {
    cards.push({
      component: <SpecialBranchCertificate />,
      delay: 650,
      fallback: <div>Loading Special Branch...</div>,
    });
  }

  cards.push(
    {
      component: (
        <BlurContact
          imageUrl="/images/admin-contact.jpg"
          contactText="ติดต่อฝ่ายสนับสนุน"
        />
      ),
      delay: 700,
    },
    { component: <SecretActions role={effectiveRole} />, delay: 750 }
  );

  return cards;
};