// ✅ src/Home/components/Services/ui/ComingSoonServiceCard.tsx — Production-Ready Coming Soon Service Card

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ServiceType } from "@/data/services";

interface ComingSoonServiceCardProps {
  service: ServiceType;
}

/**
 * 🚧 ComingSoonServiceCard
 * - แสดงบริการที่ยังไม่เปิดใช้งาน
 * - ใช้ animation ลื่นไหล พร้อมแสดง badge "เร็ว ๆ นี้"
 * - รองรับ accessibility เต็มรูปแบบ
 */
const ComingSoonServiceCard: FC<ComingSoonServiceCardProps> = ({ service }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 shadow-md"
      aria-label={`บริการ ${service.title} กำลังจะเปิดให้บริการเร็ว ๆ นี้`}
    >
      {/* 📷 รูปภาพประกอบ */}
      <img
        src={service.image}
        alt={service.altText}
        className="h-40 w-full rounded-xl object-cover brightness-75"
        loading="lazy"
        decoding="async"
      />

      {/* 📝 รายละเอียด */}
      <div className="mt-4 space-y-1">
        <h3 className="text-base font-semibold text-white">{service.title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">{service.description}</p>
      </div>

      {/* 🟡 Badge "เร็ว ๆ นี้" */}
      {service.comingSoonNote && (
        <div className="absolute top-2 right-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-black shadow">
          {service.comingSoonNote}
        </div>
      )}
    </motion.article>
  );
};

export default ComingSoonServiceCard;
