"use client";

import { FC, Suspense, lazy } from "react";

import SecretHeader from "@home/components/SecretSection/SecretHeader";
import SecretDescription from "@home/components/SecretSection/SecretDescription";
import SecretActions from "@home/components/SecretSection/SecretActions";
import DocumentDownload from "@home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@home/components/SecretSection/KbankNotificationCard";
import { kbankMockData } from "@home/components/SecretSection/KbankIOSNotification.mock";
import BlurContact from "@home/components/SecretSection/BlurContact/BlurContact";
import { useProtectedAuth } from "@hooks/useProtectedAuth";
import { mockRegistrationData } from "@home/SecretPage/RegistrationPreview/mockRegistrationData";
import {
  CardWrapper,
  A4CardWrapper,
} from "@home/SecretPage/common/CardWrapper";

const RegistrationPreview = lazy(
  () => import("@home/SecretPage/RegistrationPreview/RegistrationPreview")
);
const SalaryCertificate = lazy(
  () => import("@home/SecretPage/SalaryCertificate/SalaryCertificate")
);

const LoadingSpinner: FC<{ size?: "lg" | "md" | "sm" }> = ({ size = "lg" }) => {
  const sizeClass =
    size === "lg" ? "loading-lg" : size === "md" ? "loading-md" : "loading-sm";

  return (
    <div className="flex justify-center items-center py-8">
      <span className={`loading loading-spinner text-primary ${sizeClass}`} />
    </div>
  );
};

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
  const isAdmin = effectiveRole === "admin";
  const canViewKbank = isAdmin;

  return (
    <section className="min-h-screen bg-base-200 text-base-content px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="container max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        <header>
          <CardWrapper>
            <SecretHeader />
          </CardWrapper>
        </header>

        <main className="space-y-8 sm:space-y-10 lg:space-y-12">
          <CardWrapper>
            <SecretDescription user={{ ...user, role: effectiveRole }} />
          </CardWrapper>

          <CardWrapper>
            <DocumentDownload />
          </CardWrapper>

          {isAdmin && (
            <Suspense fallback={<LoadingSpinner size="md" />}>
              <A4CardWrapper>
                <RegistrationPreview {...mockRegistrationData} />
              </A4CardWrapper>
            </Suspense>
          )}

          {isAdmin && (
            <Suspense fallback={<LoadingSpinner size="md" />}>
              <A4CardWrapper>
                <SalaryCertificate />
              </A4CardWrapper>
            </Suspense>
          )}

          {canViewKbank && (
            <CardWrapper>
              <div className="space-y-5">
                {kbankMockData.map((item) => (
                  <KbankNotificationCard key={item.id} data={item} />
                ))}
              </div>
            </CardWrapper>
          )}

          <CardWrapper>
            <BlurContact
              imageUrl="/images/admin-contact.jpg"
              contactText="ติดต่อแอดมินฝ่ายสนับสนุน"
            />
          </CardWrapper>
        </main>

        <footer>
          <CardWrapper>
            <SecretActions role={effectiveRole} />
          </CardWrapper>
        </footer>
      </div>
    </section>
  );
};

export default SecretPage;
