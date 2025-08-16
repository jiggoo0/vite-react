"use client";

import { FC } from "react";
import { useNavigate } from "react-router-dom";

type SecretActionsProps = {
  /** กำหนดสิทธิ์ผู้ใช้งาน: "admin" หรือ "user" */
  role: "admin" | "user";
};

/**
 * SecretActions
 * ปุ่ม action สำหรับผู้ใช้ที่เข้าสู่ระบบแล้ว
 * - จัดการงานของฉัน
 * - เข้าสู่แผงควบคุม Admin (เฉพาะ admin)
 * - ออกจากระบบ
 */
const SecretActions: FC<SecretActionsProps> = ({ role }) => {
  const navigate = useNavigate();

  // ออกจากระบบ ลบ localStorage และ redirect ไปหน้า login
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {/* จัดการงานของฉัน */}
      <button
        type="button"
        className="btn btn-primary flex-1 md:flex-none transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onClick={() => alert("Manage your jobs feature coming soon!")}
        aria-label="จัดการงานของฉัน"
      >
        จัดการงานของฉัน
      </button>

      {/* Admin Panel สำหรับ admin */}
      {role === "admin" && (
        <button
          type="button"
          className="btn btn-secondary flex-1 md:flex-none transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          onClick={() => navigate("/admin")}
          aria-label="เข้าสู่แผงควบคุม Admin"
        >
          เข้าสู่แผงควบคุม Admin
        </button>
      )}

      {/* ออกจากระบบ */}
      <button
        type="button"
        className="btn btn-outline btn-error flex-1 md:flex-none transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2"
        onClick={handleLogout}
        aria-label="ออกจากระบบ"
      >
        ออกจากระบบ
      </button>
    </div>
  );
};

export default SecretActions;
