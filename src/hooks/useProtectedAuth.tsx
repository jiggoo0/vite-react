// src/context/AuthProvider.tsx
"use client";

import React, { ReactNode, useState, useEffect, useCallback } from "react";
import { AuthContext, parseUserFromStorage, User } from "@/hooks/useAuth";

/** 🛡️ AuthProvider
 * - ครอบ component ด้วย context สำหรับจัดการ authentication
 * - ให้ `useAuth` ใช้งานได้
 */
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // โหลด user จาก localStorage เมื่อ mount
  useEffect(() => {
    const storedUser = parseUserFromStorage();
    setUser(storedUser);
  }, []);

  const isAuthenticated = !!user;

  const hasRole = useCallback(
    (roles: User["role"] | User["role"][]) => {
      if (!user) return false;
      if (Array.isArray(roles)) return roles.includes(user.role);
      return user.role === roles;
    },
    [user]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, hasRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
