"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { users } from "@/data/users";

interface AuthUser {
  username: string;
  hash: string;
  role: "admin" | "user" | "manager";
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const trimmedUsername = username.trim();
      const userData = users[trimmedUsername];

      if (!userData) throw new Error("ไม่พบผู้ใช้นี้ในระบบ");

      const match = await bcrypt.compare(password, userData.hash);
      if (!match) throw new Error("รหัสผ่านไม่ถูกต้อง");

      localStorage.setItem(
        "user",
        JSON.stringify({ username: trimmedUsername, role: userData.role })
      );

      navigate("/secret", { replace: true });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-base-100 text-base-content">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-primary">
          เข้าสู่ระบบ
        </h1>

        {error && (
          <div
            className="p-3 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-md"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </div>
        )}

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
            aria-label="ชื่อผู้ใช้"
            spellCheck={false}
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
              aria-label="รหัสผ่าน"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-300"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? "ซ่อน" : "แสดง"}
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;