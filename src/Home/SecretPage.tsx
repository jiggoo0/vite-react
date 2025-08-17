"use client";

import { FC, ReactNode, lazy, Suspense, memo } from "react";
import clsx from "clsx";

// ======================= Components =======================
import SecretHeader from "@home/components/SecretSection/SecretHeader";
import SecretDescription from "@home/components/SecretSection/SecretDescription";
import SecretActions from "@home/components/SecretSection/SecretActions";
import DocumentDownload from "@home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@home/components/SecretSection/KbankNotificationCard";
import BlurContact from "@home/components/SecretSection/BlurContact/BlurContact";
import DriverLicenseFormPage from "@home/SecretPage/DriverLicense/DriverLicenseForm";
import IdCardFormWithOCR from "@home/components/Forms/IdCardFormWithOCR";
import ErrorBoundary from "@utils/common/ErrorBoundary";

// ======================= Hooks =======================
import { useProtectedAuth } from "@hooks/useProtectedAuth";

// ======================= Mock Data =======================
import { mockRegistrationData } from "@home/SecretPage/RegistrationPreview/mockRegistrationData";
import { mockSalaryCertificate } from "@home/SecretPage/SalaryCertificate/mockSalaryCertificate";
import { mockMedicalCertificate } from "@home/SecretPage/MedicalCertificate/mockMedicalCertificate";
import { kbankMockData } from "@home/components/SecretSection/KbankIOSNotification.mock";

// ======================= Styles =======================
import "@styles/driverLicense.css";

// ======================= Lazy-loaded Components =======================
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

// ======================= Shared Components =======================
interface CardWrapperProps {
  children: ReactNode;
  className?: string;
}

const CardWrapper: FC<CardWrapperProps> = memo(({ children, className }) => (
  <div
    className={clsx(
      "bg-white rounded-xl shadow-md p-6 w-full transition-all duration-500",
      className
    )}
  >
    {children}
  </div>
));
CardWrapper.displayName = "CardWrapper";

const LoadingSpinner: FC<{ size?: "sm" | "md" | "lg" }> = memo(
  ({ size = "md" }) => (
    <div
      className={clsx(
        "animate-spin border-4 border-t-4 border-gray-300 rounded-full mx-auto",
        {
          "w-6 h-6": size === "sm",
          "w-10 h-10": size === "md",
          "w-16 h-16": size === "lg",
        }
      )}
      role="status"
      aria-label="Loading content..."
    />
  )
);
LoadingSpinner.displayName = "LoadingSpinner";

interface WithBlurProps {
  isBlurred: boolean;
  children: ReactNode;
}

const WithBlur: FC<WithBlurProps> = memo(({ isBlurred, children }) =>
  isBlurred ? (
    <div className="blur-sm pointer-events-none select-none">{children}</div>
  ) : (
    <>{children}</>
  )
);
WithBlur.displayName = "WithBlur";

// ======================= Sections =======================
interface SectionProps {
  isBlurred: boolean;
  delay?: number;
}

const AllUserSection: FC<SectionProps> = memo(({ isBlurred, delay = 0 }) => (
  <div className="space-y-6">
    <CardWrapper className={clsx("animate-fadeInUp", `delay-${delay}`)}>
      <WithBlur isBlurred={isBlurred}>
        <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดใน Registration Preview">
          <Suspense fallback={<LoadingSpinner size="md" />}>
            <RegistrationPreview {...mockRegistrationData} />
          </Suspense>
        </ErrorBoundary>
      </WithBlur>
    </CardWrapper>

    <CardWrapper className={clsx("animate-fadeInUp", `delay-${delay + 100}`)}>
      <WithBlur isBlurred={isBlurred}>
        <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดใน Salary Certificate">
          <Suspense fallback={<LoadingSpinner size="md" />}>
            <SalaryCertificate data={mockSalaryCertificate} />
          </Suspense>
        </ErrorBoundary>
      </WithBlur>
    </CardWrapper>

    <CardWrapper className={clsx("animate-fadeInUp", `delay-${delay + 200}`)}>
      <WithBlur isBlurred={isBlurred}>
        <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดใน Medical Certificate">
          <Suspense fallback={<LoadingSpinner size="md" />}>
            <MedicalCertificate data={mockMedicalCertificate} />
          </Suspense>
        </ErrorBoundary>
      </WithBlur>
    </CardWrapper>

    <CardWrapper className={clsx("animate-fadeInUp", `delay-${delay + 300}`)}>
      <WithBlur isBlurred={isBlurred}>
        <IdCardFormWithOCR />
      </WithBlur>
    </CardWrapper>

    <CardWrapper className={clsx("animate-fadeInUp", `delay-${delay + 400}`)}>
      <div className="space-y-5">
        {kbankMockData.map((item) => (
          <WithBlur key={item.id} isBlurred={isBlurred}>
            <KbankNotificationCard data={item} />
          </WithBlur>
        ))}
      </div>
    </CardWrapper>
  </div>
));
AllUserSection.displayName = "AllUserSection";

const DriverLicenseSection: FC<SectionProps> = memo(
  ({ isBlurred, delay = 200 }) => (
    <CardWrapper className={clsx("animate-fadeInUp", `delay-${delay}`)}>
      <h2 className="text-xl font-semibold mb-4">ฟอร์มใบขับขี่</h2>
      <WithBlur isBlurred={isBlurred}>
        <DriverLicenseFormPage />
      </WithBlur>
    </CardWrapper>
  )
);
DriverLicenseSection.displayName = "DriverLicenseSection";

// ======================= Secret Page =======================
const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-base-100">
        <LoadingSpinner size="lg" />
      </section>
    );
  }

  if (!user) return null;

  type EffectiveRole = "admin" | "user" | "manager";

  const effectiveRole: EffectiveRole =
    user.role === "temp" ? "user" : (user.role as EffectiveRole);

  const isAdmin = effectiveRole === "admin";
  const isManager = effectiveRole === "manager";

  const shouldBlur = !isAdmin;

  return (
    <section className="min-h-screen bg-base-200 text-base-content px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="container max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        <CardWrapper className="animate-fadeInUp">
          <SecretHeader />
        </CardWrapper>

        <main className="space-y-8 sm:space-y-10 lg:space-y-12">
          <CardWrapper className="animate-fadeInUp delay-50">
            <SecretDescription user={{ ...user, role: effectiveRole }} />
          </CardWrapper>

          <CardWrapper className="animate-fadeInUp delay-100">
            <DocumentDownload />
          </CardWrapper>

          <DriverLicenseSection isBlurred={shouldBlur} />
          <AllUserSection isBlurred={shouldBlur} />

          {(isManager || isAdmin) && (
            <CardWrapper className="animate-fadeInUp delay-450">
              <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดใน Special Branch Certificate">
                <Suspense fallback={<LoadingSpinner size="md" />}>
                  <SpecialBranchCertificate />
                </Suspense>
              </ErrorBoundary>
            </CardWrapper>
          )}

          <CardWrapper className="animate-fadeInUp delay-500">
            <BlurContact
              imageUrl="/images/admin-contact.jpg"
              contactText="ติดต่อฝ่ายสนับสนุน"
            />
          </CardWrapper>
        </main>

        <CardWrapper className="animate-fadeInUp delay-600">
          <SecretActions role={effectiveRole} />
        </CardWrapper>
      </div>
    </section>
  );
};

SecretPage.displayName = "SecretPage";
export default SecretPage;