"use client";

import React, { ReactNode, useState, useCallback } from "react";
import { AuthContext, User } from "@/hooks/useAuth";

interface ProtectedAuthProviderProps {
  children: ReactNode;
}

/**
 * ProtectedAuthProvider
 * ---------------------
 * Context provider สำหรับผู้ใช้ที่ต้องมี authentication
 * ให้ useAuth สามารถเรียกใช้งานได้
 */
export const ProtectedAuthProvider: React.FC<ProtectedAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  const hasRole = useCallback(
    (roles: User["role"] | User["role"][]) => {
      if (!user) return false;
      if (Array.isArray(roles)) return roles.includes(user.role);
      return roles === user.role;
    },
    [user]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
  }, []);

  /** ฟังก์ชัน updateUser เพื่อแก้ไขข้อมูลผู้ใช้ และเก็บใน localStorage */
  const updateUser = useCallback(
    (data: Partial<User>) => {
      if (!user) return;
      const updated = { ...user, ...data };
      setUser(updated);
      localStorage.setItem("user", JSON.stringify(updated));
    },
    [user]
  );

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, hasRole, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
