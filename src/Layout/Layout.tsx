import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@layout/Navbar";
import Footer from "@layout/partials/Footer";
import ChatWidget from "@utils/common/ChatWidget";
import DisclaimerModal from "@utils/common/DisclaimerModal";
import BackToTop from "@utils/common/BackToTop";

const Layout: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
    <header
      className="sticky top-0 z-50 bg-base-100 shadow-sm"
      role="banner"
      aria-label="เว็บไซต์ส่วนหัว"
    >
      <Navbar />
    </header>

    <main
      role="main"
      tabIndex={-1}
      className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-live="polite"
      aria-atomic="true"
    >
      {children || <Outlet />}
    </main>

    <Footer />
    <ChatWidget />
    <BackToTop />
    <DisclaimerModal />
  </div>
);

export default Layout;
