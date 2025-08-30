"use client";

import React, { ReactNode, useState, useEffect, useCallback } from "react";
import { AuthContext, User, UserRole, parseUserFromStorage } from "@/hooks/useAuth";

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * AuthProvider
 * -------------------------
 * ครอบแอปเพื่อให้ useAuth() ทำงานได้
 * - เก็บ state ของผู้ใช้
 * - ตรวจสอบการยืนยันตัวตน
 * - ฟังก์ชัน logout
 * - ตรวจสอบ role
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // โหลด user จาก localStorage ตอน mount
  useEffect(() => {
    const storedUser = parseUserFromStorage();
    setUser(storedUser);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");
  }, []);

  const hasRole = useCallback(
    (roles: UserRole | UserRole[]) => {
      if (!user) return false;
      const roleArray = Array.isArray(roles) ? roles : [roles];
      return roleArray.includes(user.role);
    },
    [user]
  );

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, hasRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};