"use client";

import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { parseUserFromStorage, User } from "@/utils/auth";

export interface RoleGuardProps {
  children: ReactNode;
  allowedRoles: readonly User["role"][];
}

const RoleGuard: FC<RoleGuardProps> = ({ children, allowedRoles }) => {
  const user: User | null = parseUserFromStorage();

  if (!user) {
    // ยังไม่ login → redirect ไปหน้า login
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // role ไม่ตรง → redirect ไป 403
    return <Navigate to="/403" replace />;
  }

  return <>{children}</>;
};

export default RoleGuard;
