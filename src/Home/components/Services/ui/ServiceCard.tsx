"use client";

import { FC } from "react";
import { ServiceType } from "@/data/services";

interface ServiceCardProps {
  service: ServiceType;
}

/**
 * 🧩 ServiceCard
 *
 * - แสดงบริการที่พร้อมใช้งาน
 * - ใช้งานได้ใน Section, Grid, Modal ฯลฯ
 * - รองรับ Dark mode และ Mobile responsive
 * - ใช้ร่วมกับ `ComingSoonServiceCard` ได้
 */
const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-primary"
      aria-label={`บริการ: ${service.title}`}
      tabIndex={0}
    >
      {/* 📷 รูปภาพบริการ */}
      <img
        src={service.image}
        alt={service.altText}
        loading="lazy"
        decoding="async"
        className="h-48 w-full object-cover rounded-t-2xl"
      />

      {/* 📋 เนื้อหาบริการ */}
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold text-base-content">{service.title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">
          {service.description}
        </p>
        <p className="text-sm font-medium text-green-600">{service.price}</p>

        {/* 🟡 Coming Soon Note (fallback safeguard) */}
        {!service.available && service.comingSoonNote && (
          <span
            className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800"
            aria-hidden="true"
          >
            🚧 {service.comingSoonNote}
          </span>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;