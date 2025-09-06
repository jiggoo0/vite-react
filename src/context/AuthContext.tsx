"use client";

import { createContext, useContext } from "react";

/** 👤 User Roles */
export type UserRole = "admin" | "manager" | "user";

/** 👤 User Object */
export type User = {
  username: string;
  role: UserRole;
};

/**
 * 📝 Parse user data from localStorage
 *
 * Returns a User object or null if none is found or invalid.
 */
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

/** 🔐 Auth Context Type */
export type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  hasRole: (roles: UserRole | UserRole[]) => boolean;
  logout: () => void;
};

/** ⚡ Auth Context */
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

/** 🪝 Hook to consume AuthContext */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
