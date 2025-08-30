"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const AboutImage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="pt-6 text-center"
    >
      <img
        src="/signature.webp"
        alt="ลายเซ็นความน่าเชื่อถือของ JP Visual & Docs"
        className={`mx-auto w-32 sm:w-40 md:w-48 opacity-80 transition-all duration-500 
          ${loaded ? "blur-0 scale-100" : "blur-sm scale-95"} 
          hover:scale-105 hover:opacity-100`}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        onLoad={() => setLoaded(true)}
      />
    </motion.figure>
  );
};

export default AboutImage;
