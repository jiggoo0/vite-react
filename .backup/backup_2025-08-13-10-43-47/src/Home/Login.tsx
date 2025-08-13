// src/Home/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { users } from "@/data/users";
import { useTempCodeAuth } from "@/hooks/useTempCodeAuth";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { login: loginWithTempCode, error: tempError } = useTempCodeAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const trimmedUsername = username.trim();

    try {
      const user = users.find((u) => u.username === trimmedUsername);

      if (user) {
        const match = await bcrypt.compare(password, user.passwordHash);
        if (match) {
          localStorage.setItem(
            "user",
            JSON.stringify({ username: user.username, role: user.role })
          );
          navigate("/secret", { replace: true });
          return;
        } else {
          setError("รหัสผ่านไม่ถูกต้อง");
          return;
        }
      }

      // ถ้าไม่พบ user ใน users, ตรวจสอบ temp code login
      const tempLoginSuccess = await loginWithTempCode(
        trimmedUsername,
        password
      );

      if (tempLoginSuccess) {
        localStorage.setItem(
          "user",
          JSON.stringify({ username: trimmedUsername, role: "temp" })
        );
        navigate("/secret", { replace: true });
        return;
      }

      setError(tempError || "ไม่พบผู้ใช้นี้ในระบบ หรือรหัสผ่านไม่ถูกต้อง");
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-base-100 text-base-content">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-primary">
          เข้าสู่ระบบ
        </h1>

        {error && (
          <div
            className="p-3 text-red-700 bg-red-100 rounded-md"
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
            aria-busy={loading}
          >
            {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
