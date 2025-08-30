"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import CardWrapper from "@/Home/components/common/CardWrapper";

export interface AuditTrailItem {
  id: string | number;
  action: string;
  user: string;
  timestamp: string;
  type?: "info" | "warning" | "success";
}

interface AuditTrailViewerProps {
  items: AuditTrailItem[];
}

const typeColors = {
  info: "bg-blue-500 dark:bg-blue-400",
  warning: "bg-yellow-500 dark:bg-yellow-400",
  success: "bg-green-500 dark:bg-green-400",
};

const AuditTrailViewer: FC<AuditTrailViewerProps> = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
        Audit Trail
      </h2>

      <ul className="space-y-4 max-h-96 overflow-y-auto">
        {items.map((item, index) => {
          const dotColor = item.type ? typeColors[item.type] : typeColors.info;

          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <CardWrapper>
                <div className="flex items-start gap-3 p-3">
                  <div className={`w-4 h-4 mt-1 rounded-full ${dotColor}`} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 break-words">
                      {item.action}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">: {item.user}</p>
                    <time className="text-xs text-gray-400 dark:text-gray-500">
                      {item.timestamp}
                    </time>
                  </div>
                </div>
              </CardWrapper>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

AuditTrailViewer.displayName = "AuditTrailViewer";

export default AuditTrailViewer;
