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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const trimmedUsername = username.trim();

    try {
      const userData = users[trimmedUsername];
      const user: AuthUser | undefined = userData
        ? { ...userData, username: trimmedUsername }
        : undefined;

      if (!user) {
        setError("ไม่พบผู้ใช้นี้ในระบบ");
        return;
      }

      const match = await bcrypt.compare(password, user.hash);
      if (!match) {
        setError("รหัสผ่านไม่ถูกต้อง");
        return;
      }

      // เก็บข้อมูลผู้ใช้ใน localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ username: user.username, role: user.role })
      );

      // นำทางไปหน้า secret หลัง login สำเร็จ
      navigate("/secret", { replace: true });
    } catch (err) {
      console.error("Login error:", err);
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
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
          <div className="p-3 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-md">
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

          <input
            type="password"
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
