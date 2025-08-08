import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/Layout/partials/Footer/Footer";
import ChatWidget from "@/utils/common/ChatWidget";
import DisclaimerModal from "@/utils/common/DisclaimerModal";
import BackToTop from "@/utils/common/BackToTop";

/**
 * Layout Component
 * - ครอบโครงสร้างหลักของแอป
 * - แสดง Navbar, Footer และ Utilities ทั่วไป
 * - รองรับการส่ง children หรือใช้ React Router Outlet
 * - ใช้ Tailwind Theme สำหรับสีพื้นและข้อความ
 */
const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      {/* Navbar: ติดบน viewport */}
      <header className="sticky top-0 z-50 bg-base-100 shadow-sm">
        <Navbar />
      </header>

      {/* Main content: กินพื้นที่ที่เหลือ */}
      <main
        role="main"
        tabIndex={-1}
        className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-live="polite"
      >
        {/* children มี priority, ถ้าไม่มีแสดง Outlet */}
        {children ?? <Outlet />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Utilities */}
      <ChatWidget />
      <BackToTop />
      <DisclaimerModal />
    </div>
  );
};

export default Layout;
