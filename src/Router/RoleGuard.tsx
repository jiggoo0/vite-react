import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface RoleGuardProps {
  allowedRoles: string[];
  children: ReactNode;
}

/**
 * 🛡️ RoleGuard — ป้องกัน route ตามสิทธิ์ผู้ใช้
 *
 * - ใช้ร่วมกับ `useAuth()` hook
 * - หากไม่ได้ login → redirect ไป /login
 * - หากสิทธิ์ไม่ถูกต้อง → redirect ไป /403 หรือแสดงข้อความปฏิเสธ
 */
const RoleGuard: FC<RoleGuardProps> = ({ allowedRoles, children }) => {
  const { isAuthenticated, role, loading } = useAuth();
  const location = useLocation();

  // 🌀 ระหว่างโหลดข้อมูล auth
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-primary" />
      </div>
    );
  }

  // 🚫 ไม่ได้ login → ไป /login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ⛔ ไม่มีสิทธิ์ → ไปหน้า 403 (หรือ redirect กลับหน้าแรกก็ได้)
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/403" replace />;
    // หรือใช้ return <Navigate to="/" replace /> เพื่อไปหน้าแรกแทน
  }

  // ✅ มีสิทธิ์ → render route
  return <>{children}</>;
};

export default RoleGuard;