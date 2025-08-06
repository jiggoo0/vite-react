// src/Home/SecretPage.tsx

import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SecretHeader from "@/Home/components/SecretSection/SecretHeader";
import SecretDescription from "@/Home/components/SecretSection/SecretDescription";
import SecretActions from "@/Home/components/SecretSection/SecretActions";
import RegistrationPreview from "./SecretPage/RegistrationPreview";
import BlurContact from "./SecretPage/BlurContact";
import DocumentDownload from "@/Home/components/SecretSection/DocumentDownload";

type User = {
  username: string;
  role: "admin" | "user";
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
      const parsedUser: unknown = JSON.parse(storedUser);

      if (
        typeof parsedUser === "object" &&
        parsedUser !== null &&
        "username" in parsedUser &&
        "role" in parsedUser &&
        typeof (parsedUser as any).username === "string" &&
        ((parsedUser as any).role === "admin" || (parsedUser as any).role === "user")
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
        <span
          role="status"
          aria-label="Loading"
          className="loading loading-spinner loading-lg text-primary"
        />
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-base-200 text-base-content flex flex-col p-4 sm:p-6 md:p-8">
      {/* Header */}
      <header className="max-w-5xl mx-auto w-full mb-10">
        <div className="bg-base-100 rounded-2xl shadow-lg p-8">
          <SecretHeader />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto w-full mb-10 space-y-10">
        {/* Description */}
        <section className="bg-base-100 rounded-2xl shadow-lg p-8">
          {user && <SecretDescription user={user} />}
        </section>

        {/* Document Download */}
        <section className="bg-base-100 rounded-2xl shadow-lg p-8">
          <DocumentDownload />
        </section>

        {/* Admin Only Section */}
        {user?.role === "admin" && (
          <section className="bg-base-100 rounded-2xl shadow-lg p-8">
            <RegistrationPreview
              businessName="บริษัท ทดสอบ จำกัด"
              ownerName="นายสมชาย ใจดี"
              registrationNumber="1234567890"
              address={{
                houseNumber: "123",
                villageNo: "4",
                alley: "สุขุมวิท 101",
                subDistrict: "บางนา",
                district: "พระโขนง",
                province: "กรุงเทพมหานคร",
              }}
              issuedDate="12 สิงหาคม 2568"
              registrarPosition="เจ้าหน้าที่ทะเบียน"
              registrarName="นางสาวจันทร์เพ็ญ สวัสดิ์ศรี"
            />
          </section>
        )}

        {/* Support Contact */}
        <section className="bg-base-100 rounded-2xl shadow-lg p-8">
          <BlurContact
            imageUrl="/images/admin-contact.jpg"
            contactText="ติดต่อแอดมินฝ่ายสนับสนุน"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full">
        <div className="bg-base-100 rounded-2xl shadow-lg p-6">
          {user && <SecretActions role={user.role} />}
        </div>
      </footer>
    </section>
  );
};

export default SecretPage;