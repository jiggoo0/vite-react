// src/Router/ProtectedRoute.tsx
"use client";

import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { parseUserFromStorage, User } from "@/utils/auth";

export interface ProtectedRouteProps {
  children: ReactNode;
  /** Roles ที่สามารถเข้าถึงเส้นทางนี้ได้ */
  allowedRoles: readonly User["role"][];
}

/**
 * ProtectedRoute:
 * - ตรวจสอบการ login
 * - ตรวจสอบ role ของ user
 * - redirect ไปหน้า 403 หรือ login ตามกรณี
 */
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const user: User | null = parseUserFromStorage();

  if (!user) {
    // ยังไม่ login → redirect ไปหน้า login
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // role ไม่ตรง → redirect ไปหน้า 403
    return <Navigate to="/403" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
