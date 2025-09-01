// src/hooks/useAuth.tsx
"use client";

import { FC, ReactNode, createContext, useContext, useState, useEffect } from "react";

// --------------------
// Types
// --------------------
export type UserRole = "admin" | "manager" | "user";

export type User = {
  username: string;
  email?: string;
  role: UserRole;
};

// อ่าน user จาก localStorage
export const parseUserFromStorage = (): User | null => {
  const raw = localStorage.getItem("user");
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      typeof parsed.username === "string" &&
      ["admin", "manager", "user"].includes(parsed.role)
    ) {
      return parsed as User;
    }
  } catch (err) {
    console.error("parseUserFromStorage error:", err);
  }

  return null;
};

// Context type
export type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  hasRole: (roles: UserRole | UserRole[]) => boolean;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
};

// --------------------
// Context
// --------------------
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

// --------------------
// Provider
// --------------------
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = parseUserFromStorage();
    if (stored) setUser(stored);
  }, []);

  const isAuthenticated = !!user;

  const hasRole = (roles: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    if (Array.isArray(roles)) return roles.includes(user.role);
    return roles === user.role;
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (data: Partial<User>): void => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, hasRole, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
