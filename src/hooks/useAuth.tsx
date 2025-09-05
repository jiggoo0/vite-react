"use client";

import { FC, ReactNode, createContext, useContext, useState, useEffect, useCallback } from "react";

// -------------------- Types --------------------
export type UserRole = "admin" | "manager" | "user";

export type User = {
  username: string;
  email?: string;
  role: UserRole;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  hasRole: (roles: UserRole | UserRole[]) => boolean;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
};

// -------------------- Helpers --------------------
export const parseUserFromStorage = (): User | null => {
  if (typeof window === "undefined") return null; // SSR safe
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

// -------------------- Context --------------------
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

// -------------------- Provider --------------------
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = parseUserFromStorage();
    if (storedUser) setUserState(storedUser);
  }, []);

  const setUser = useCallback((u: User | null) => {
    setUserState(u);
    if (u) localStorage.setItem("user", JSON.stringify(u));
    else localStorage.removeItem("user");
  }, []);

  const isAuthenticated = !!user;

  const hasRole = useCallback(
    (roles: UserRole | UserRole[]): boolean => {
      if (!user) return false;
      return Array.isArray(roles) ? roles.includes(user.role) : roles === user.role;
    },
    [user]
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const updateUser = useCallback(
    (data: Partial<User>) => {
      if (!user) return;
      const updated = { ...user, ...data };
      setUser(updated);
    },
    [user, setUser]
  );

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, hasRole, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
