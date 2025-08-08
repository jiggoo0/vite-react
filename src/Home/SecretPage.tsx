// src/Home/SecretPage.tsx
import { FC, Suspense, lazy } from "react";

import SecretHeader from "@/Home/components/SecretSection/SecretHeader";
import SecretDescription from "@/Home/components/SecretSection/SecretDescription";
import SecretActions from "@/Home/components/SecretSection/SecretActions";
import DocumentDownload from "@/Home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@/Home/components/SecretSection/KbankNotificationCard";
import { kbankMockData } from "@/Home/components/SecretSection/KbankIOSNotification.mock";
import BlurContact from "@/Home/components/SecretSection/BlurContact/BlurContact";
import { useProtectedAuth } from "@/hooks/useProtectedAuth";
import { mockRegistrationData } from "@/Home/SecretPage/RegistrationPreview/mockRegistrationData";

const RegistrationPreview = lazy(
  () => import("@/Home/SecretPage/RegistrationPreview/RegistrationPreview")
);
const SalaryCertificate = lazy(
  () => import("@/Home/SecretPage/SalaryCertificate/SalaryCertificate")
);

const CardWrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white dark:bg-base-100 rounded-2xl shadow-sm p-5 sm:p-6 border border-base-300 transition-all hover:shadow-md">
    {children}
  </div>
);

const LoadingSpinner: FC<{ size?: "lg" | "md" | "sm" }> = ({ size = "lg" }) => (
  <div className="flex justify-center items-center py-8">
    <span
      className={`loading loading-spinner text-primary ${
        size === "lg"
          ? "loading-lg"
          : size === "md"
            ? "loading-md"
            : "loading-sm"
      }`}
    />
  </div>
);

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
  const canViewKbank = effectiveRole === "admin"; // ✅ แก้ตรงนี้

  return (
    <section className="min-h-screen bg-base-200 text-base-content px-4 sm:px-6 md:px-8 py-10">
      <div className="container max-w-7xl mx-auto space-y-12">
        <header>
          <CardWrapper>
            <SecretHeader />
          </CardWrapper>
        </header>

        <main className="space-y-10 md:space-y-12">
          <CardWrapper>
            <SecretDescription user={{ ...user, role: effectiveRole }} />
          </CardWrapper>

          <CardWrapper>
            <DocumentDownload />
          </CardWrapper>

          {isAdmin && (
            <Suspense fallback={<LoadingSpinner size="md" />}>
              <CardWrapper>
                <RegistrationPreview {...mockRegistrationData} />
              </CardWrapper>
            </Suspense>
          )}

          {isAdmin && (
            <Suspense fallback={<LoadingSpinner size="md" />}>
              <CardWrapper>
                <SalaryCertificate />
              </CardWrapper>
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