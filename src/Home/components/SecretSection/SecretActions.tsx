"use client";

import React, { FC, memo } from "react";
import { EffectiveRole } from "@/config/secretCards.config";

interface SecretActionsProps {
  role: EffectiveRole;
  onExport?: () => void;
  onRefresh?: () => void;
  onDeleteAll?: () => void;
}

const SecretActions: FC<SecretActionsProps> = ({ role, onExport, onRefresh, onDeleteAll }) => {
  const isAdmin = role === "admin";

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row sm:justify-between gap-4">
      {/* Export Button */}
      <button
        className={`px-4 py-2 rounded text-white transition ${
          isAdmin ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!isAdmin}
        onClick={onExport}
      >
        Export Data
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
    </div>
  );
};

SecretActions.displayName = "SecretActions";

export default memo(SecretActions);
