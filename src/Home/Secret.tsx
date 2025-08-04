// ✅ src/Home/Secret.tsx — พื้นที่เฉพาะผู้ใช้ที่เข้าสู่ระบบ

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * 🌐 ประเภทข้อมูลผู้ใช้จากระบบ Auth (จำลองจาก localStorage)
 */
type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
};

/**
 * 🔐 Secret — แสดงเฉพาะผู้ใช้ที่เข้าสู่ระบบเท่านั้น
 */
const Secret: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      redirectToLogin();
      return;
    }

    try {
      const parsed = JSON.parse(storedUser);
      if (isValidUser(parsed)) {
        setUser(parsed);
      } else {
        throw new Error("Invalid user object");
      }
    } catch (err) {
      console.warn("⚠️ Invalid user object in localStorage:", err);
      localStorage.removeItem("user");
      redirectToLogin();
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * 🔎 Type Guard — ตรวจสอบความถูกต้องของ object ที่โหลดมา
   */
  const isValidUser = (data: any): data is User => {
    return (
      typeof data === "object" &&
      data !== null &&
      typeof data.id === "number" &&
      typeof data.name === "string" &&
      typeof data.email === "string" &&
      ["admin", "user", "guest"].includes(data.role)
    );
  };

  const redirectToLogin = () => {
    navigate("/login", { replace: true });
  };

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
          ยินดีต้อนรับ <span className="font-semibold">{user?.name}</span> 👋
        </p>
        <p className="text-gray-700">
          หน้านี้เปิดให้เฉพาะผู้ใช้ที่ผ่านการยืนยันตัวตนแล้ว คุณสามารถจัดการงานของคุณจากที่นี่
        </p>
        <div className="text-sm text-gray-500">
          📧 <span className="font-medium">{user?.email}</span> / 🔐 สิทธิ์:{" "}
          <span className="badge badge-outline capitalize">{user?.role}</span>
        </div>
      </div>
    </section>
  );
};

export default Secret;
