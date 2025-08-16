// ✅ src/utils/common/SocialIcons.tsx — Compact Social Icon Links
'use client';

import { FC } from 'react';
import { FaLine, FaInstagram, FaEnvelope, FaFacebookMessenger } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

/** 🌐 รายการลิงก์โซเชียลพร้อมไอคอน */
const socialLinks = [
  { href: 'https://lin.ee/gVptUhR', label: 'LINE', icon: FaLine },
  {
    href: 'https://www.instagram.com/jpsystem.official',
    label: 'Instagram',
    icon: FaInstagram,
  },
  { href: 'mailto:contact@jpsystem.dev', label: 'Email', icon: FaEnvelope },
  {
    href: 'https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share',
    label: 'Messenger',
    icon: FaFacebookMessenger,
  },
  {
    href: 'https://www.tiktok.com/@jaopa.zerofour',
    label: 'TikTok',
    icon: SiTiktok,
  },
];

/**
 * SocialIcons
 *
 * - แสดงไอคอนโซเชียลพร้อมลิงก์
 * - รองรับ accessibility (A11y) และ focus style
 * - ใช้งานได้ทั้ง Footer / Hero / Contact Section
 */
const SocialIcons: FC = () => {
  return (
    <nav className="flex items-center gap-4" aria-label="ลิงก์โซเชียลมีเดีย">
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
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
};

export default SocialIcons;
