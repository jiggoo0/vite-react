'use client';

import { motion } from 'framer-motion';

const AboutTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center mb-8"
    >
      <h2
        id="about-title"
        className="
          font-extrabold 
          tracking-tight 
          text-4xl sm:text-5xl lg:text-6xl 
          text-base-content
        "
        aria-label="หัวข้อ JP Visual & Docs"
      >
        <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-sm">
          JP Visual & Docs
        </span>
      </h2>

      {/* Decorative underline */}
      <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent"></div>
    </motion.div>
  );
};

export default AboutTitle;
