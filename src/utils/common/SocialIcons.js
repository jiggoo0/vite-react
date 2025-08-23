"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { FaLine, FaInstagram, FaEnvelope, FaFacebookMessenger, } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
const defaultLinks = [
    { href: "https://lin.ee/gVptUhR", label: "LINE", icon: FaLine },
    { href: "https://www.instagram.com/jpsystem.official", label: "Instagram", icon: FaInstagram },
    { href: "mailto:contact@jpsystem.dev", label: "Email", icon: FaEnvelope },
    { href: "https://m.me/61573307616115", label: "Messenger", icon: FaFacebookMessenger },
    { href: "https://www.tiktok.com/@jaopa.zerofour", label: "TikTok", icon: SiTiktok },
];
/**
 * SocialIcons Component
 * ---------------------
 * - แสดงไอคอนโซเชียลพร้อมลิงก์
 * - Professional, responsive, dark/light mode
 * - Focus & hover style สำหรับ accessibility
 */
const SocialIcons = ({ links = defaultLinks }) => {
    return (_jsx("nav", { className: "flex items-center gap-4", "aria-label": "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E42\u0E0B\u0E40\u0E0A\u0E35\u0E22\u0E25\u0E21\u0E35\u0E40\u0E14\u0E35\u0E22", role: "list", children: links.map(({ href, label, icon: Icon }) => (_jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", "aria-label": label, title: label, role: "listitem", className: "text-base-content dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded", children: _jsx(Icon, { className: "w-5 h-5 sm:w-6 sm:h-6", "aria-hidden": true }) }, label))) }));
};
export default SocialIcons;
