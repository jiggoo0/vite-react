// src/Home/SecretPage.tsx

import { FC, Suspense, lazy } from "react";

import SecretHeader from "@/Home/components/SecretSection/SecretHeader";
import SecretDescription from "@/Home/components/SecretSection/SecretDescription";
import SecretActions from "@/Home/components/SecretSection/SecretActions";
import DocumentDownload from "@/Home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@/Home/components/SecretSection/KbankNotificationCard";
import { kbankMockData } from "@/Home/components/SecretSection/KbankIOSNotification.mock";
import BlurContact from "./SecretPage/BlurContact";

import { useProtectedAuth } from "@/hooks/useProtectedAuth";

// Lazy Load Component ใหญ่
const RegistrationPreview = lazy(() => import("./SecretPage/RegistrationPreview/RegistrationPreview"));
const SalaryCertificate = lazy(() => import("./SecretPage/SalaryCertificate/SalaryCertificate"));
import { mockRegistrationData } from "./SecretPage/RegistrationPreview/mockRegistrationPreview";

// CardWrapper ช่วยลดโค้ดซ้ำ
const CardWrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-6 transition hover:shadow-lg">
    {children}
  </div>
);

const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary" />
      </section>
    );
  }

  if (!user) return null;

  const effectiveRole = user.role === "temp" ? "user" : user.role;
  const isAdmin = effectiveRole === "admin";
  const canViewKbank = ["admin", "user"].includes(effectiveRole);

  return (
    <section className="min-h-screen bg-base-200 text-base-content flex flex-col px-4 sm:px-6 md:px-8 py-6">
      <div className="container mx-auto space-y-8">
        <header>
          <CardWrapper>
            <SecretHeader />
          </CardWrapper>
        </header>

        <main className="space-y-8">
          <CardWrapper>
            <SecretDescription user={{ ...user, role: effectiveRole }} />
          </CardWrapper>

          <CardWrapper>
            <DocumentDownload />
          </CardWrapper>

          {isAdmin && (
            <Suspense fallback={<span className="loading loading-spinner text-primary" />}>
              <CardWrapper>
                <RegistrationPreview {...mockRegistrationData} />
              </CardWrapper>
            </Suspense>
          )}

          {isAdmin && (
            <Suspense fallback={<span className="loading loading-spinner text-primary" />}>
              <CardWrapper>
                <SalaryCertificate />
              </CardWrapper>
            </Suspense>
          )}

          {canViewKbank && (
            <CardWrapper>
              <div className="space-y-4">
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