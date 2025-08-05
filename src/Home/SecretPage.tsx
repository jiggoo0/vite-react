// src/Home/SecretPage.tsx

import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SecretHeader from "@/Home/components/SecretSection/SecretHeader";
import SecretDescription from "@/Home/components/SecretSection/SecretDescription";
import SecretActions from "@/Home/components/SecretSection/SecretActions";

type User = {
  username: string;
  role: "admin" | "user";
};

const SecretPage: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      navigate("/login", { replace: true });
      return;
    }
    try {
      const parsed = JSON.parse(stored);
      if (
        parsed &&
        typeof parsed === "object" &&
        typeof parsed.username === "string" &&
        ["admin", "user"].includes(parsed.role)
      ) {
        setUser(parsed);
      } else {
        throw new Error("Invalid user object");
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
    <section className="min-h-screen bg-base-200 text-base-content flex flex-col">
      <header className="py-8 px-6 border-b border-base-300">
        <SecretHeader />
      </header>

      <main className="flex-grow px-6 py-8 max-w-4xl mx-auto w-full space-y-8">
        {user && <SecretDescription user={user} />}
      </main>

      <footer className="py-6 px-6 border-t border-base-300 max-w-4xl mx-auto w-full">
        {user && <SecretActions role={user.role} />}
      </footer>
    </section>
  );
};

export default SecretPage;