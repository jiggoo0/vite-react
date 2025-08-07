// src/Home/SecretPage.tsx
import { FC } from "react";
import SecretHeader from "@/Home/components/SecretSection/SecretHeader";
import SecretDescription from "@/Home/components/SecretSection/SecretDescription";
import SecretActions from "@/Home/components/SecretSection/SecretActions";
import DocumentDownload from "@/Home/components/SecretSection/DocumentDownload";
import RegistrationPreview from "./SecretPage/RegistrationPreview";
import BlurContact from "./SecretPage/BlurContact";
import KbankNotificationCard from "@/Home/components/SecretSection/KbankNotificationCard";

import { kbankMockData } from "@/Home/components/SecretSection/KbankIOSNotification.mock";
import { mockRegistrationData } from "./SecretPage/mockRegistrationPreview";

import { useProtectedAuth } from "@/hooks/useProtectedAuth";

const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary" />
      </section>
    );
  }

  if (!user) {
    return null;
  }

  // สำหรับ role temp ให้มองเป็น user เพื่อแสดงข้อมูลบางส่วน
  const effectiveRole = user.role === "temp" ? "user" : user.role;

  return (
    <section className="min-h-screen bg-base-200 text-base-content flex flex-col p-4 md:p-8">
      <header className="max-w-4xl mx-auto w-full mb-8">
        <div className="bg-base-100 rounded-xl shadow-md p-6">
          <SecretHeader />
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full mb-8 space-y-8">
        <div className="bg-base-100 rounded-xl shadow-md p-6">
          <SecretDescription user={{ ...user, role: effectiveRole }} />
        </div>

        <div className="bg-base-100 rounded-xl shadow-md p-6">
          <DocumentDownload />
        </div>

        {effectiveRole === "admin" && (
          <div className="bg-base-100 rounded-xl shadow-md p-6">
            <RegistrationPreview {...mockRegistrationData} />
          </div>
        )}

        {(effectiveRole === "admin" || effectiveRole === "user") && (
          <div className="bg-base-100 rounded-xl shadow-md p-6 space-y-4">
            {kbankMockData.map((item) => (
              <KbankNotificationCard key={item.id} data={item} />
            ))}
          </div>
        )}

        <div className="bg-base-100 rounded-xl shadow-md p-6">
          <BlurContact
            imageUrl="/images/admin-contact.jpg"
            contactText="ติดต่อแอดมินฝ่ายสนับสนุน"
          />
        </div>
      </main>

      <footer className="max-w-4xl mx-auto w-full">
        <div className="bg-base-100 rounded-xl shadow-md p-6">
          <SecretActions role={effectiveRole} />
        </div>
      </footer>
    </section>
  );
};

export default SecretPage;