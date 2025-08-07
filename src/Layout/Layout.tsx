import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/Layout/partials/Footer/Footer";
import ChatWidget from "@/utils/common/ChatWidget";
import DisclaimerModal from "@/utils/common/DisclaimerModal";
import BackToTop from "@/utils/common/BackToTop";

/**
 * 🌟 Layout Component
 *
 * - แสดง Navbar, Footer และองค์ประกอบ utility อื่นๆ
 * - รองรับ children หรือ Outlet สำหรับ React Router
 * - รองรับ Tailwind Theme (bg/text)
 */
const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      {/* 🧭 Navbar */}
      <header className="sticky top-0 z-50 bg-base-100 shadow-sm">
        <Navbar />
      </header>

      {/* 🧱 Main Content */}
      <main
        role="main"
        tabIndex={-1}
        className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* children ถ้าไม่มี ใช้ Outlet */}
        {children ?? <Outlet />}
      </main>

      {/* 📦 Footer */}
      <Footer />

      {/* 🛠️ Utilities */}
      <ChatWidget />
      <BackToTop />
      <DisclaimerModal />
    </div>
  );
};

export default Layout;
