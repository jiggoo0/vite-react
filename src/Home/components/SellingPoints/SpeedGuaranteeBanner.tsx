// src/Home/components/SellingPoints/SpeedGuaranteeBanner.tsx
"use client";

import { FC } from "react";
import { Rocket, TimerReset } from "lucide-react";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";

export interface SpeedGuaranteeBannerProps {
  className?: string;
  title?: string;
  desc?: string;
  bullets?: string[];
  contactHref?: string;
}

const bulletVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

/**
 * SpeedGuaranteeBanner
 * -------------------------
 * ✅ Banner แสดงความเร็วงาน / SLA ของบริการ
 * ✅ รองรับ animation, accessibility, responsive
 * ✅ สามารถปรับ title, desc, bullets, contactHref ได้
 */
const SpeedGuaranteeBanner: FC<SpeedGuaranteeBannerProps> = ({
  className,
  title = "คิวด่วนพร้อม — งานไว เนียน ส่งตามนัด",
  desc = "รองรับงานเร่ง 24 ชม.* ตามระดับความยาก + คิวที่ว่าง",
  bullets = ["จัดคิวทันทีหลังยืนยันขอบเขต", "อัปเดตสถานะโปร่งใส", "ส่งไฟล์ปลอดภัย ลิงก์หมดอายุ"],
  contactHref = "https://line.me/R/ti/p/@yourid",
}) => (
  <section
    className={clsx("py-6 bg-base-100", className)}
    role="region"
    aria-labelledby="speed-banner-title"
  >
    <div className="container mx-auto px-4">
      <motion.div
        className="alert flex flex-col md:flex-row items-start md:items-center bg-base-200 shadow-lg rounded-xl gap-4 p-4 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, 15, -15, 0] }}
          whileTap={{ scale: 0.9 }}
          className="flex-shrink-0"
        >
          <Rocket className="w-6 h-6 text-primary" aria-hidden="true" />
        </motion.div>

        {/* Text */}
        <div className="flex-1">
          <h3 id="speed-banner-title" className="font-semibold text-lg md:text-xl">
            {title}
          </h3>
          <p className="text-sm text-base-content/80 mt-1">{desc}</p>

          <ul
            className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-1 text-sm"
            aria-label="รายการคุณสมบัติคิวด่วน"
          >
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={bulletVariants}
                tabIndex={0}
                className="flex items-center gap-2 cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-primary transition-colors hover:text-primary focus:text-primary"
              >
                <TimerReset className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-base-content/80">{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <motion.a
          href={contactHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-3 md:mt-0 md:ml-auto btn btn-primary transition-transform focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="คุยเร่งด่วนผ่าน LINE"
        >
          คุยเร่งด่วน
        </motion.a>
      </motion.div>
    </div>
  </section>
);

SpeedGuaranteeBanner.displayName = "SpeedGuaranteeBanner";

export default SpeedGuaranteeBanner;
