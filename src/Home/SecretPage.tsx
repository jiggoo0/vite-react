"use client";

import { FC, ReactNode, lazy, Suspense, memo } from "react";
import clsx from "clsx";

// ---------------------- Components ----------------------
import SecretHeader from "@home/components/SecretSection/SecretHeader";
import SecretDescription from "@home/components/SecretSection/SecretDescription";
import SecretActions from "@home/components/SecretSection/SecretActions";
import DocumentDownload from "@home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@home/components/SecretSection/KbankNotificationCard";
import BlurContact from "@home/components/SecretSection/BlurContact/BlurContact";
import DriverLicenseFormPage from "@home/SecretPage/DriverLicense/DriverLicenseForm";
import IdCardForm from "@home/IdCardForm";

// ---------------------- Hooks ----------------------
import { useProtectedAuth } from "@hooks/useProtectedAuth";

// ---------------------- Mock Data ----------------------
import { mockRegistrationData } from "@home/SecretPage/RegistrationPreview/mockRegistrationData";
import { kbankMockData } from "@home/components/SecretSection/KbankIOSNotification.mock";
import { mockMedicalCertificate } from "@home/SecretPage/MedicalCertificate/mockMedicalCertificate";

// ---------------------- Styles ----------------------
import "@styles/driverLicense.css";

// ---------------------- Lazy Components ----------------------
const RegistrationPreview = lazy(
  () => import("@home/SecretPage/RegistrationPreview/RegistrationPreview")
);
const SalaryCertificate = lazy(
  () => import("@home/SecretPage/SalaryCertificate/SalaryCertificate")
);
const MedicalCertificate = lazy(
  () => import("@home/SecretPage/MedicalCertificate/MedicalCertificate")
);

// ---------------------- Shared Components ----------------------
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
        "animate-spin border-4 border-t-4 border-gray-300 rounded-full",
        {
          "w-6 h-6": size === "sm",
          "w-10 h-10": size === "md",
          "w-16 h-16": size === "lg",
        }
      )}
    />
  )
);
LoadingSpinner.displayName = "LoadingSpinner";

// ---------------------- HOC สำหรับ blur ----------------------
interface WithBlurProps {
  isNormalUser: boolean;
  children: ReactNode;
}

const WithBlurIfUser: FC<WithBlurProps> = memo(({ isNormalUser, children }) =>
  isNormalUser ? (
    <div className="blur-sm pointer-events-none select-none">{children}</div>
  ) : (
    <>{children}</>
  )
);
WithBlurIfUser.displayName = "WithBlurIfUser";

// ---------------------- Sections ----------------------
const AllUserSection: FC<{ isNormalUser: boolean }> = ({ isNormalUser }) => (
  <Suspense fallback={<LoadingSpinner size="md" />}>
    <CardWrapper className="animate-fadeInUp">
      <WithBlurIfUser isNormalUser={isNormalUser}>
        <RegistrationPreview {...mockRegistrationData} />
      </WithBlurIfUser>
    </CardWrapper>

    <CardWrapper className="animate-fadeInUp delay-100">
      <WithBlurIfUser isNormalUser={isNormalUser}>
        <SalaryCertificate />
      </WithBlurIfUser>
    </CardWrapper>

    <CardWrapper className="animate-fadeInUp delay-200">
      <WithBlurIfUser isNormalUser={isNormalUser}>
        <MedicalCertificate data={mockMedicalCertificate} />
      </WithBlurIfUser>
    </CardWrapper>

    <CardWrapper className="animate-fadeInUp delay-300">
      <h2 className="text-xl font-semibold mb-4">ฟอร์มบัตรประชาชน</h2>
      <WithBlurIfUser isNormalUser={isNormalUser}>
        <IdCardForm />
      </WithBlurIfUser>
    </CardWrapper>

    <CardWrapper className="animate-fadeInUp delay-400">
      <div className="space-y-5">
        {kbankMockData.map((item) => (
          <WithBlurIfUser key={item.id} isNormalUser={isNormalUser}>
            <KbankNotificationCard data={item} />
          </WithBlurIfUser>
        ))}
      </div>
    </CardWrapper>
  </Suspense>
);

const DriverLicenseSection: FC<{ isNormalUser: boolean }> = ({
  isNormalUser,
}) => (
  <CardWrapper className="animate-fadeInUp delay-200">
    <h2 className="text-xl font-semibold mb-4">ฟอร์มใบขับขี่</h2>
    <WithBlurIfUser isNormalUser={isNormalUser}>
      <DriverLicenseFormPage />
    </WithBlurIfUser>
  </CardWrapper>
);

// ---------------------- Secret Page ----------------------
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

  const effectiveRole = user.role === "temp" ? "user" : user.role;
  const isNormalUser = effectiveRole === "user";

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

          <DriverLicenseSection isNormalUser={isNormalUser} />
          <AllUserSection isNormalUser={isNormalUser} />

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
