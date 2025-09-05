"use client";

import { FC } from "react";
import { Upload, FileText, Settings, MailCheck, Hash, Key } from "lucide-react"; // ใช้ Key icon สำหรับ OTP

interface QuickActionsProps {
  onContact?: () => void;
  onCheckStatus?: () => void;
  onDownload?: () => void;
  onPay?: () => void;
  onVerifyEmail?: () => void;
  onContractNumber?: () => void;
  onRequestOTP?: () => void; // callback สำหรับปุ่มรับ OTP
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
    label: "สอบสถานะ (รอยืนยัน)",
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
  {
    label: "ยืนยัน Email บัญชีสัญญา",
    icon: MailCheck,
    key: "verify",
    color: "bg-purple-500",
    hover: "hover:bg-purple-600",
    extraText: "✅ veeto666@gmail.com",
  },
  {
    label: "หมายเลขสัญญากู้ยืม (รอยืนยัน)",
    icon: Hash,
    key: "contract",
    color: "bg-yellow-500",
    hover: "hover:bg-yellow-600",
  },
  {
    label: "รับ OTP",
    icon: Key,
    key: "otp",
    color: "bg-indigo-500",
    hover: "hover:bg-indigo-600",
  },
];

const QuickActions: FC<QuickActionsProps> = ({
  onContact,
  onCheckStatus,
  onDownload,
  onPay,
  onVerifyEmail,
  onContractNumber,
  onRequestOTP,
}) => {
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
      case "verify":
        onVerifyEmail?.();
        break;
      case "contract":
        onContractNumber?.();
        break;
      case "otp":
        onRequestOTP?.();
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
            className={`flex flex-col items-center justify-center gap-1 p-4 rounded-lg text-white font-medium transition ${action.color} ${action.hover} focus:outline-none focus:ring-2 focus:ring-offset-1`}
          >
            <Icon className="w-5 h-5" />
            <span>{action.label}</span>
            {action.extraText && <span className="text-sm">{action.extraText}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default QuickActions;
