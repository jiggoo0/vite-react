import { useState, useEffect } from "react";

type Role = "admin" | "user";
type User = { username: string; role: Role };

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (
          typeof parsed === "object" &&
          parsed !== null &&
          typeof parsed.username === "string" &&
          ["admin", "user"].includes(parsed.role)
        ) {
          setUser(parsed);
        } else {
          localStorage.removeItem("user");
        }
      } catch {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {
    loading,
    isAuthenticated: !!user,
    role: user?.role ?? "user",
    user,
    logout,
  };
};