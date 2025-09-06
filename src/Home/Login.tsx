"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { users, UserData } from "@/data/users";
import { useAuth } from "@/hooks/useAuth";

const adminRoutes = [
  { label: "Dashboard", path: "/admin/dashboard" },
  { label: "Secret Page", path: "/admin/secret" },
];

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [adminRedirect, setAdminRedirect] = useState(adminRoutes[0].path);
  const [showAdminChoice, setShowAdminChoice] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const trimmedUsername = username.trim();
      const userData: UserData | undefined = users[trimmedUsername];
      if (!userData) throw new Error("ไม่พบผู้ใช้นี้ในระบบ");

      const match = await bcrypt.compare(password, userData.hash);
      if (!match) throw new Error("รหัสผ่านไม่ถูกต้อง");

      const authUser = {
        username: trimmedUsername,
        role: userData.role as "admin" | "manager" | "user",
      };

      // Admin จะยังไม่ redirect อัตโนมัติ
      if (authUser.role === "admin") {
        setShowAdminChoice(true);
        setUser(authUser); // เก็บใน context แต่ยังไม่เซฟ localStorage
      } else {
        localStorage.setItem("user", JSON.stringify(authUser));
        setUser(authUser);
        navigate(authUser.role === "manager" ? "/manager" : "/user", { replace: true });
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  const handleAdminConfirm = () => {
    const authUser = users[username.trim()];
    if (!authUser) return;
    const user = { username: username.trim(), role: "admin" as const };
    localStorage.setItem("user", JSON.stringify(user));
    navigate(adminRedirect, { replace: true });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-base-100 text-base-content">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-primary">เข้าสู่ระบบ</h1>

        {error && (
          <div className="p-3 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-md">
            {error}
          </div>
        )}

        {!showAdminChoice ? (
          <form onSubmit={handleLogin} className="space-y-5" noValidate>
            <input
              type="text"
              placeholder="ชื่อผู้ใช้"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered w-full"
              required
              disabled={loading}
              autoComplete="username"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                required
                disabled={loading}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-300"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "ซ่อน" : "แสดง"}
              </button>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-center">เลือกหน้าที่ต้องการเข้า (Admin)</p>
            <select
              className="input input-bordered w-full"
              value={adminRedirect}
              onChange={(e) => setAdminRedirect(e.target.value)}
            >
              {adminRoutes.map((route) => (
                <option key={route.path} value={route.path}>
                  {route.label}
                </option>
              ))}
            </select>
            <button className="btn btn-primary w-full" onClick={handleAdminConfirm}>
              เข้า
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
