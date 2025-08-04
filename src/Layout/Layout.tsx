// ✅ src/Layout/Layout.tsx — Layout หลักของแอปพลิเคชัน

import { FC } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/Layout/partials/Footer/Footer";
import ChatWidget from "@/utils/common/ChatWidget";
import DisclaimerModal from "@/utils/common/DisclaimerModal";
import BackToTop from "@/utils/common/BackToTop";

/**
 * 🧱 Layout — โครงสร้างพื้นฐานของแอป
 *
 * - รวม Navbar, Footer, Modals
 * - รองรับ Outlet สำหรับ Routing
 * - จัด Layout Responsive และ Maintainable
 */
const Layout: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      {/* 🔝 Header */}
      <Navbar />

      {/* 📄 Main Content */}
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* 👣 Footer */}
      <Footer />

      {/* 💬 Chat Widget */}
      <ChatWidget />

      {/* ⬆️ Back to Top Button */}
      <BackToTop />

      {/* ⚠️ Disclaimer Modal */}
      <DisclaimerModal />
    </div>
  );
};

export default Layout;