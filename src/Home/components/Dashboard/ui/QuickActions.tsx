"use client";

import { FC } from "react";

interface QuickActionsProps {
  onUpload?: () => void;
  onReport?: () => void;
  onSettings?: () => void;
}

const QuickActions: FC<QuickActionsProps> = ({ onUpload, onReport, onSettings }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <button
        onClick={onUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        อัปโหลดเอกสาร
      </button>
      <button
        onClick={onReport}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        สร้างรายงาน
      </button>
      <button
        onClick={onSettings}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        การตั้งค่า
      </button>
    </div>
  );
};

export default QuickActions;
