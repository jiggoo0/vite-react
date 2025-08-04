// ✅ src/Home/components/Services/ui/ServiceCard.tsx — Production-Ready Service Card

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ServiceType } from "@/data/services";

interface ServiceCardProps {
  service: ServiceType;
}

/**
 * ✅ ServiceCard
 * - แสดงบริการที่เปิดให้ใช้งานจริง
 * - มีรูปภาพ, คำอธิบาย, ราคา
 * - ใช้ animation ลื่นไหล และรองรับ A11y เต็มรูปแบบ
 */
const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 shadow-md"
      aria-label={`บริการ: ${service.title}`}
    >
      {/* 📷 ภาพบริการ */}
      <img
        src={service.image}
        alt={service.altText}
        className="h-40 w-full rounded-xl object-cover brightness-90"
        loading="lazy"
        decoding="async"
      />

      {/* 📝 เนื้อหา */}
      <div className="mt-4 space-y-1">
        <h3 className="text-base font-semibold text-white">{service.title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">{service.description}</p>
        <p className="text-sm text-primary font-medium mt-1">{service.price}</p>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
