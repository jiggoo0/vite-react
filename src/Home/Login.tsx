import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

import { users } from "@/data/users";

/**
 * 🔐 Login Page — สำหรับเข้าสู่ระบบด้วยอีเมล + รหัสผ่าน (mock-only)
 */
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  /**
   * 🧠 handleLogin — ตรวจสอบผู้ใช้และบันทึกลง localStorage
   */
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = users.find((u) => u.email === email);
    if (!user) {
      setError("ไม่พบผู้ใช้นี้ในระบบ");
      return;
    }

    // 🚫 แทนที่ comparePassword เพราะไม่ใช้ bcryptjs ใน frontend
    if (password !== user.password) {
      setError("รหัสผ่านไม่ถูกต้อง");
      return;
    }

    // ✅ Auth success: Save to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    setError(null);

    // 🧭 Navigate by role
    navigate(user.role === "admin" ? "/admin" : "/secret");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-base-100 text-base-content">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-primary">เข้าสู่ระบบ</h1>

        {error && (
          <div className="flex items-center gap-2 p-3 text-red-700 bg-red-100 rounded-md">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* 📧 Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="your@email.com"
            />
          </div>

          {/* 🔒 Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              placeholder="********"
            />
          </div>

          {/* 🔐 Login Button */}
          <button type="submit" className="btn btn-primary w-full">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
