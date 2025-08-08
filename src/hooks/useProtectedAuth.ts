import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type User = {
  username: string;
  role: "admin" | "user" | "temp";
};

export const useProtectedAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setLoading(false);
      navigate("/login", { replace: true });
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      if (
        parsedUser &&
        typeof parsedUser === "object" &&
        typeof parsedUser.username === "string" &&
        (parsedUser.role === "admin" ||
          parsedUser.role === "user" ||
          parsedUser.role === "temp")
      ) {
        setUser(parsedUser);
      } else {
        throw new Error("Invalid user data");
      }
    } catch {
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login", { replace: true });
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    logout,
  };
};
