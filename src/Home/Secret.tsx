// ✅ src/Home/Secret.tsx — พื้นที่เฉพาะผู้ใช้ที่เข้าสู่ระบบ
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * 🌐 ประเภทข้อมูลผู้ใช้ตามโครงสร้างจริงจาก users.ts
 */
type User = {
  username: string;
  role?: "admin" | "user";
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
      typeof data.username === "string"
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
          ยินดีต้อนรับ <span className="font-semibold">{user?.username}</span> 👋
        </p>
        <p className="text-gray-700">
          หน้านี้เปิดให้เฉพาะผู้ใช้ที่ผ่านการยืนยันตัวตนแล้ว คุณสามารถจัดการงานของคุณจากที่นี่
        </p>
        <div className="text-sm text-gray-500">
          🔐 สิทธิ์:
          <span className="badge badge-outline capitalize ml-2">
            {user?.role ?? "user"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Secret;