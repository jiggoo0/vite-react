import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  username: string;
  role: "admin" | "user";
};

const Secret: React.FC = () => {
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
      const parsed = JSON.parse(storedUser);
      if (
        typeof parsed === "object" &&
        parsed !== null &&
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
        <div className="loading loading-spinner loading-lg text-primary" />
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-base-100 text-base-content">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-primary">🎯 พื้นที่รับงานเฉพาะสมาชิก</h1>
        <p className="text-gray-600">
          ยินดีต้อนรับ <span className="font-semibold">{user?.username}</span> 👋
        </p>
        <p className="text-gray-700">
          หน้านี้เปิดให้เฉพาะผู้ใช้ที่ผ่านการยืนยันตัวตนแล้ว คุณสามารถจัดการงานของคุณจากที่นี่
        </p>
        <div className="text-sm text-gray-500">
          🔐 สิทธิ์:
          <span className="badge badge-outline capitalize ml-2">{user?.role}</span>
        </div>
      </div>
    </section>
  );
};

export default Secret;