// src/Home/Profile.tsx
"use client";

import React, { FC, useState, useEffect, FormEvent } from "react";
import PageSection from "@/Home/components/common/PageSection";
import { useAuth } from "@/hooks/useAuth";

const Profile: FC = () => {
  const { user, updateUser } = useAuth();

  const [username, setUsername] = useState(user?.username ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [message, setMessage] = useState("");

  // Sync state when user data changes
  useEffect(() => {
    if (!user) return;
    setUsername(user.username ?? "");
    setEmail(user.email ?? "");
  }, [user]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !email.trim()) {
      setMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    updateUser?.({ username, email });
    setMessage("บันทึกข้อมูลเรียบร้อย ✅");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <PageSection title="ข้อมูลผู้ใช้">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md space-y-4"
          >
            {/* Username */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                ชื่อผู้ใช้
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                อีเมล
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              บันทึกข้อมูล
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

export default Profile;
