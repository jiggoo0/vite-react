// src/Home/SecretPage.tsx

import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import SecretHeader from "@/Home/components/SecretSection/SecretHeader";
import SecretDescription from "@/Home/components/SecretSection/SecretDescription";
import SecretActions from "@/Home/components/SecretSection/SecretActions";
import DocumentDownload from "@/Home/components/SecretSection/DocumentDownload";
import RegistrationPreview from "./SecretPage/RegistrationPreview";
import BlurContact from "./SecretPage/BlurContact";
import KbankNotificationCard from "@/Home/components/SecretSection/KbankNotificationCard";

// Mock Data
import { kbankMockData } from "@/Home/components/SecretSection/KbankIOSNotification.mock";
import { mockRegistrationData } from "./SecretPage/mockRegistrationPreview";

type UserRole = "admin" | "user";

type User = {
  username: string;
  role: UserRole;
};

const SecretPage: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/login", { replace: true });
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      if (
        typeof parsedUser === "object" &&
        parsedUser !== null &&
        "username" in parsedUser &&
        "role" in parsedUser &&
        typeof parsedUser.username === "string" &&
        (parsedUser.role === "admin" || parsedUser.role === "user")
      ) {
        setUser(parsedUser as User);
      } else {
        throw new Error("Invalid user data format.");
      }
    } catch {
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary" />
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-base-200 text-base-content flex flex-col p-4 md:p-8">
      <header className="max-w-4xl mx-auto w-full mb-8">
        <div className="bg-base-100 rounded-xl shadow-md p-6">
          <SecretHeader />
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full mb-8 space-y-8">
        <div className="bg-base-100 rounded-xl shadow-md p-6">
          {user && <SecretDescription user={user} />}
        </div>

        <div className="bg-base-100 rounded-xl shadow-md p-6">
          <DocumentDownload />
        </div>

        {user?.role === "admin" && (
          <>
            <div className="bg-base-100 rounded-xl shadow-md p-6">
              <RegistrationPreview {...mockRegistrationData} />
            </div>

            <div className="bg-base-100 rounded-xl shadow-md p-6 space-y-4">
              {kbankMockData.map((item) => (
                <KbankNotificationCard key={item.id} data={item} />
              ))}
            </div>
          </>
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
          {user && <SecretActions role={user.role} />}
        </div>
      </footer>
    </section>
  );
};

export default SecretPage;
