"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { users } from "@/data/users";
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        const trimmedUsername = username.trim();
        try {
            const userData = users[trimmedUsername];
            const user = userData
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
            localStorage.setItem("user", JSON.stringify({ username: user.username, role: user.role }));
            // นำทางไปหน้า secret หลัง login สำเร็จ
            navigate("/secret", { replace: true });
        }
        catch (err) {
            console.error("Login error:", err);
            setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("section", { className: "min-h-screen flex items-center justify-center px-4 bg-base-100 text-base-content", children: _jsxs("div", { className: "w-full max-w-md bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-8 space-y-6", children: [_jsx("h1", { className: "text-2xl font-bold text-center text-primary", children: "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A" }), error && (_jsx("div", { className: "p-3 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-md", children: error })), _jsxs("form", { onSubmit: handleLogin, className: "space-y-5", noValidate: true, children: [_jsx("input", { type: "text", placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49", value: username, onChange: (e) => setUsername(e.target.value), className: "input input-bordered w-full", required: true, disabled: loading, autoComplete: "username", "aria-label": "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49", spellCheck: false }), _jsx("input", { type: "password", placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19", value: password, onChange: (e) => setPassword(e.target.value), className: "input input-bordered w-full", required: true, disabled: loading, autoComplete: "current-password", "aria-label": "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19" }), _jsx("button", { type: "submit", className: "btn btn-primary w-full", disabled: loading, children: loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ" })] })] }) }));
};
export default Login;
