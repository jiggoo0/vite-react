// src/Home/components/SecretSection/SecretActions.tsx
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
    <div className="flex flex-wrap gap-3">
      {/* ปุ่มจัดการงานของฉัน */}
      <button
        type="button"
        className="btn btn-primary transition-transform duration-200 hover:scale-105"
        onClick={() => alert("Manage your jobs feature coming soon!")}
      >
        จัดการงานของฉัน
      </button>

      {/* ปุ่ม Admin เฉพาะ role = admin */}
      {role === "admin" && (
        <button
          type="button"
          className="btn btn-secondary transition-transform duration-200 hover:scale-105"
          onClick={() => navigate("/admin")}
        >
          เข้าสู่แผงควบคุม Admin
        </button>
      )}

      {/* ปุ่มออกจากระบบ */}
      <button
        type="button"
        className="btn btn-outline btn-error transition-transform duration-200 hover:scale-105"
        onClick={handleLogout}
      >
        ออกจากระบบ
      </button>
    </div>
  );
};

export default SecretActions;
