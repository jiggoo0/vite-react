"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ServiceType } from "@/data/services";

interface ComingSoonServiceCardProps {
  service: ServiceType;
}

const ComingSoonServiceCard: FC<ComingSoonServiceCardProps> = ({ service }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    tabIndex={0}
    aria-label={`บริการ ${service.title} กำลังจะเปิดให้บริการเร็ว ๆ นี้`}
    className="relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-md focus-within:ring-2 focus-within:ring-yellow-400 transition-transform hover:-translate-y-1 hover:shadow-lg"
  >
    {/* Service Image */}
    <img
      src={service.image}
      alt={service.altText}
      loading="lazy"
      decoding="async"
      className="h-40 w-full rounded-t-2xl object-cover brightness-75 transition-transform duration-300 hover:scale-105"
    />

    {/* Service Info */}
    <div className="mt-4 px-3 pb-3 space-y-1">
      <h3 className="text-base font-semibold text-white">{service.title}</h3>
      <p className="text-sm text-base-content/70 leading-relaxed">
        {service.description}
      </p>
    </div>

    {/* Coming Soon Badge */}
    {service.comingSoonNote && (
      <div
        aria-hidden="true"
        className="absolute top-2 right-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-black shadow"
      >
        {service.comingSoonNote}
      </div>
    )}
  </motion.article>
);

export default ComingSoonServiceCard;
