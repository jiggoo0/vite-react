"use client";

import { FC } from "react";
import { Upload, FileText, Settings } from "lucide-react";

interface QuickActionsProps {
  onContact?: () => void;
  onCheckStatus?: () => void;
  onDownload?: () => void;
  onPay?: () => void;
}

// กำหนดปุ่ม Quick Actions ใหม่
const actions = [
  {
    label: "ติดต่อทีมงาน",
    icon: Settings,
    key: "contact",
    color: "bg-gray-500",
    hover: "hover:bg-gray-600",
  },
  {
    label: "ตรวจสอบสถานะ",
    icon: FileText,
    key: "check",
    color: "bg-green-500",
    hover: "hover:bg-green-600",
  },
  {
    label: "ดาวน์โหลดเอกสาร",
    icon: Upload,
    key: "download",
    color: "bg-blue-500",
    hover: "hover:bg-blue-600",
  },
  {
    label: "ชำระเงินส่วนค้าง",
    icon: FileText,
    key: "pay",
    color: "bg-red-500",
    hover: "hover:bg-red-600",
  },
];

const QuickActions: FC<QuickActionsProps> = ({ onContact, onCheckStatus, onDownload, onPay }) => {
  const handleClick = (key: string) => {
    switch (key) {
      case "contact":
        onContact?.();
        break;
      case "check":
        onCheckStatus?.();
        break;
      case "download":
        onDownload?.();
        break;
      case "pay":
        onPay?.();
        break;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.key}
            onClick={() => handleClick(action.key)}
            className={`flex items-center justify-center gap-2 p-4 rounded-lg text-white font-medium transition ${action.color} ${action.hover} focus:outline-none focus:ring-2 focus:ring-offset-1`}
          >
            <Icon className="w-5 h-5" />
            <span>{action.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default QuickActions;
