// src/Home/Settings.tsx
"use client";

import React, { FC, useState, FormEvent } from "react";
import PageSection from "@/Home/components/common/PageSection";

const Settings: FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!password.trim() || !confirmPassword.trim()) {
      setMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("รหัสผ่านไม่ตรงกัน ❌");
      return;
    }

    // ✅ Mock update password
    // ใน production: เรียก API เพื่ออัปเดตรหัสผ่าน
    setMessage("บันทึกรหัสผ่านเรียบร้อย ✅");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <PageSection title="ตั้งค่าผู้ใช้">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md space-y-4"
          >
            {/* New Password */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                รหัสผ่านใหม่
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                ยืนยันรหัสผ่าน
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              บันทึกการตั้งค่า
            </button>

            {/* Feedback Message */}
            {message && (
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">{message}</p>
            )}
          </form>
        </PageSection>
      </div>
    </main>
  );
};

export default Settings;
