"use client";

import { FC } from "react";
import { FaLine, FaInstagram, FaEnvelope, FaFacebookMessenger } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export interface SocialLink {
  href: string;
  label: string;
  icon: FC<{ className?: string; "aria-hidden"?: boolean }>;
}

const defaultLinks: SocialLink[] = [
  { href: "https://lin.ee/gVptUhR", label: "LINE", icon: FaLine },
  {
    href: "https://www.instagram.com/jpsystem.official",
    label: "Instagram",
    icon: FaInstagram,
  },
  { href: "mailto:contact@jpsystem.dev", label: "Email", icon: FaEnvelope },
  {
    href: "https://m.me/61573307616115",
    label: "Messenger",
    icon: FaFacebookMessenger,
  },
  {
    href: "https://www.tiktok.com/@jaopa.zerofour",
    label: "TikTok",
    icon: SiTiktok,
  },
];

interface SocialIconsProps {
  links?: SocialLink[];
}

/**
 * SocialIcons Component
 * ---------------------
 * - แสดงไอคอนโซเชียลพร้อมลิงก์
 * - Professional, responsive, dark/light mode
 * - Focus & hover style สำหรับ accessibility
 */
const SocialIcons: FC<SocialIconsProps> = ({ links = defaultLinks }) => {
  return (
    <nav className="flex items-center gap-4" aria-label="ลิงก์โซเชียลมีเดีย" role="list">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          role="listitem"
          className="text-base-content dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden={true} />
        </a>
      ))}
    </nav>
  );
};

export default SocialIcons;
