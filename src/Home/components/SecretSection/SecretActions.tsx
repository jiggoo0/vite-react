"use client";

import { FC } from "react";
import { useNavigate } from "react-router-dom";

type SecretActionsProps = {
  role: "admin" | "user" | "manager";
};

/**
 * SecretActions
 * -------------------------
 * ปุ่ม action สำหรับผู้ใช้ในหน้าลับ
 * - จัดการงานของฉัน
 * - เข้าสู่แผง Admin (เฉพาะ admin/manager)
 * - ออกจากระบบ
 * - Responsive, Accessible, Professional UI
 */
const SecretActions: FC<SecretActionsProps> = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {/* ปุ่มจัดการงานของฉัน */}
      <button
        type="button"
        className="btn btn-primary flex-1 md:flex-none
                   transition-transform duration-200 hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onClick={() => alert("Manage your jobs feature coming soon!")}
        aria-label="จัดการงานของฉัน"
      >
        จัดการงานของฉัน
      </button>

      {/* ปุ่มเข้าสู่แผง Admin (เฉพาะ admin/manager) */}
      {(role === "admin" || role === "manager") && (
        <button
          type="button"
          className="btn btn-secondary flex-1 md:flex-none
                     transition-transform duration-200 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          onClick={() => navigate("/admin")}
          aria-label="เข้าสู่แผงควบคุม Admin"
        >
          เข้าสู่แผงควบคุม Admin
        </button>
      )}

      {/* ปุ่มออกจากระบบ */}
      <button
        type="button"
        className="btn btn-outline btn-error flex-1 md:flex-none
                   transition-transform duration-200 hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2"
        onClick={handleLogout}
        aria-label="ออกจากระบบ"
      >
        ออกจากระบบ
      </button>
    </div>
  );
};

SecretActions.displayName = "SecretActions";

export default SecretActions;