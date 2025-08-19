"use client";

import { motion, Variants, easeOut } from "framer-motion";
import AboutTitle from "./ui/AboutTitle";
import AboutDescription from "./ui/AboutDescription";
import AboutImage from "./ui/AboutImage";
import AboutQuote from "./ui/AboutQuote";

// ======================= Variants =======================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      ease: easeOut,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// ======================= Component =======================
const About = () => (
  <section
    id="about"
    role="region"
    aria-labelledby="about-title"
    className="relative isolate overflow-hidden bg-base-100 text-base-content py-24 px-4 sm:px-6 lg:px-8"
  >
    {/* Background gradient blur */}
    <motion.div
      className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 blur-3xl opacity-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto max-w-4xl space-y-14 text-center"
    >
      <motion.div variants={childVariants}>
        <AboutTitle />
      </motion.div>
      <motion.div variants={childVariants}>
        <AboutDescription />
      </motion.div>
      <motion.div variants={childVariants}>
        <AboutImage />
      </motion.div>
      <motion.div variants={childVariants}>
        <AboutQuote />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
