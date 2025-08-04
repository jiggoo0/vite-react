// ✅ src/Router/GuardRoutes.tsx — Route Guard สำหรับผู้ใช้ที่เข้าสู่ระบบเท่านั้น

import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface GuardRoutesProps {
  children: ReactNode;
}

/**
 * 🔐 GuardRoutes
 *
 * - ตรวจสอบว่าเข้าสู่ระบบหรือยัง
 * - ถ้ายังไม่ login → redirect ไป /login พร้อมเก็บ path ปัจจุบันไว้
 * - รองรับ loading UX ขณะรอ auth state
 */
const GuardRoutes: FC<GuardRoutesProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // ⏳ รอ auth ตรวจสอบ
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-primary" />
      </div>
    );
  }

  // 🚫 ไม่ได้ login → ส่งไป /login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // ✅ login แล้ว → render children
  return <>{children}</>;
};

export default GuardRoutes;