// ✅ src/utils/common/SocialIcons.tsx — Compact Social Icon Links

import { FC } from "react";
import {
  FaLine,
  FaInstagram,
  FaEnvelope,
  FaFacebookMessenger,
} from "react-icons/fa";

/**
 * 🌐 SocialIcons
 *
 * - แสดงไอคอนโซเชียลพร้อมลิงก์
 * - ใช้ react-icons + Tailwind + A11y
 * - ฝังได้ใน Footer / Hero / Contact
 */
const socialLinks = [
  {
    href: "https://lin.ee/gVptUhR",
    label: "LINE",
    icon: FaLine,
  },
  {
    href: "https://www.instagram.com/jpsystem.official",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "mailto:contact@jpsystem.dev",
    label: "Email",
    icon: FaEnvelope,
  },
  {
    href: "https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share",
    label: "Messenger",
    icon: FaFacebookMessenger,
  },
];

const SocialIcons: FC = () => {
  return (
    <nav
      className="flex items-center gap-4"
      aria-label="ลิงก์โซเชียลมีเดียของ JP Visual"
    >
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="text-base-content hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
        >
          <Icon className="w-5 h-5" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
};

export default SocialIcons;
