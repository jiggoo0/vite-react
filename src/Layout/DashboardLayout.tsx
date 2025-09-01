// src/Layout/DashboardLayout.tsx
// ==============================
// Layout สำหรับ Dashboard Page
// รองรับ Header, Sidebar (Responsive), และ Content
// ==============================

"use client";

import React, { FC, ReactNode, useState } from "react";
import ThemeToggle from "@/Home/components/common/ThemeToggle";
import LogoutButton from "@/Home/components/common/LogoutButton";
import TabPanel from "@/Home/components/common/TabPanel";
import { Menu } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarContent = (
    <nav className="flex flex-col gap-2">
      <a href="/user" className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700">
        Dashboard
      </a>
      <a
        href="/user/profile"
        className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700"
      >
        Profile
      </a>
      <a
        href="/user/settings"
        className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700"
      >
        Settings
      </a>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Mobile sidebar toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">แดชบอร์ด</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LogoutButton />
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar Desktop */}
        <aside className="hidden lg:block w-60 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 p-4">
          <TabPanel isActive={true}>{sidebarContent}</TabPanel>
        </aside>

        {/* Sidebar Mobile (Drawer style) */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-30 flex lg:hidden">
            {/* Overlay */}
            <div className="flex-1 bg-black/40" onClick={() => setIsSidebarOpen(false)} />
            {/* Sidebar content */}
            <div className="w-64 bg-white dark:bg-slate-800 p-4 shadow-lg">
              <TabPanel isActive={true}>{sidebarContent}</TabPanel>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
