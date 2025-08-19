"use client";

import { FC, lazy, ReactNode } from "react";
import { useProtectedAuth } from "@hooks/useProtectedAuth";

// Components
import SecretHeader from "@home/components/SecretSection/SecretHeader";
import SecretDescription from "@home/components/SecretSection/SecretDescription";
import SecretActions from "@home/components/SecretSection/SecretActions";
import DocumentDownload from "@home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@home/components/SecretSection/KbankNotificationCard";
import BlurContact from "@home/components/SecretSection/BlurContact/BlurContact";
import DriverLicenseFormPage from "@home/SecretPage/DriverLicense/DriverLicenseForm";
import IdCardFormWithOCR from "@home/components/Forms/IdCardFormWithOCR";
import LazyA4Card from "@home/components/common/LazyA4Card";

// Mock Data
import { mockRegistrationData } from "@home/SecretPage/RegistrationPreview/mockRegistrationData";
import { mockSalaryCertificate } from "@home/SecretPage/SalaryCertificate/mockSalaryCertificate";
import { mockMedicalCertificate } from "@home/SecretPage/MedicalCertificate/mockMedicalCertificate";
import { kbankMockData } from "@home/components/SecretSection/KbankIOSNotification.mock";

// Lazy-loaded components
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
    import("@home/SecretPage/SpecialBranchCertificate/SpecialBranchCertificate")
);

type LazyCard = {
  component: ReactNode;
  delay: number;
  isBlurred?: boolean;
  fallback?: ReactNode;
};

const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (!user) return null;

  type EffectiveRole = "admin" | "user" | "manager";
  const effectiveRole: EffectiveRole = ["admin", "manager", "user"].includes(
    user.role
  )
    ? (user.role as EffectiveRole)
    : "user";

  const shouldBlur = effectiveRole !== "admin";
  const isAdminOrManager =
    effectiveRole === "admin" || effectiveRole === "manager";

  const lazyCards: LazyCard[] = [
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
    ...(isAdminOrManager
      ? [
          {
            component: <SpecialBranchCertificate />,
            delay: 650,
            fallback: <div>Loading Special Branch...</div>,
          },
        ]
      : []),
    {
      component: (
        <BlurContact
          imageUrl="/images/admin-contact.jpg"
          contactText="ติดต่อฝ่ายสนับสนุน"
        />
      ),
      delay: 700,
    },
    { component: <SecretActions role={effectiveRole} />, delay: 750 },
  ];

  return (
    <section className="min-h-screen bg-base-200 text-base-content px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="container max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        {lazyCards.map(({ component, delay, isBlurred, fallback }, idx) => (
          <LazyA4Card
            key={idx}
            delay={delay}
            isBlurred={isBlurred}
            fallback={fallback}
          >
            {component}
          </LazyA4Card>
        ))}
      </div>
    </section>
  );
};

SecretPage.displayName = "SecretPage";
export default SecretPage;
