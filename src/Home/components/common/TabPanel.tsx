"use client";

import { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabPanelProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
}

const TabPanel: FC<TabPanelProps> = ({ children, isActive, className = "" }) => {
  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          key="tab-panel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`w-full ${className}`}
          role="tabpanel"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

TabPanel.displayName = "TabPanel";

export default TabPanel;
