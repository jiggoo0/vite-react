"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { EffectiveRole } from "@/config/secretCards.config";

export interface DocumentExportActionsProps {
  documentId: string;
  userRole: EffectiveRole;
  onExport?: (documentId: string) => void;
  onRefresh?: () => void;
  onDeleteAll?: () => void;
}

/**
 * DocumentExportActions
 * ---------------------
 * - ปุ่มจัดการเอกสาร: Export, Refresh, Delete All
 * - รองรับ role-based access (admin / user / manager)
 * - ใช้ Framer Motion สำหรับ animation เบา ๆ
 */
const DocumentExportActions: FC<DocumentExportActionsProps> = ({
  documentId,
  userRole,
  onExport,
  onRefresh,
  onDeleteAll,
}) => {
  const isAdmin = userRole === "admin";

  return (
    <motion.div
      className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row sm:justify-between gap-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Export Button */}
      <button
        className={`px-4 py-2 rounded text-white transition ${
          isAdmin ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!isAdmin}
        onClick={() => isAdmin && onExport?.(documentId)}
      >
        Export
      </button>

      {/* Refresh Button */}
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        onClick={onRefresh}
      >
        Refresh
      </button>

      {/* Delete All Button (Admin only) */}
      {isAdmin && (
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          onClick={onDeleteAll}
        >
          Delete All
        </button>
      )}
    </motion.div>
  );
};

DocumentExportActions.displayName = "DocumentExportActions";

export default DocumentExportActions;