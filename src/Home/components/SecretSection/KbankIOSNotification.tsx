import { FC, useEffect, useState } from "react";

type NotificationData = {
  amount: number;
  accountName: string;
  approvalDate: string;
  transactionId: string;
};

const MOCK_NOTIFICATION: NotificationData = {
  amount: 125000,
  accountName: "นายสมชาย ใจดี",
  approvalDate: "6 สิงหาคม 2568",
  transactionId: "TXN1234567890",
};

const formatAmount = (amount: number): string =>
  amount.toLocaleString("th-TH", { style: "currency", currency: "THB" });

const KbankIOSNotification: FC = () => {
  const [notification, setNotification] = useState<NotificationData | null>(
    null
  );

  useEffect(() => {
    setNotification(MOCK_NOTIFICATION);
  }, []);

  if (!notification) return null;

  return (
    <section
      role="alert"
      aria-live="assertive"
      className="max-w-sm mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] font-sf-pro p-5 space-y-4 border border-gray-200 backdrop-blur-md"
      style={{ WebkitBackdropFilter: "blur(20px)" }}
    >
      {/* Header */}
      <header className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center drop-shadow-md">
          <svg
            className="w-7 h-7 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 select-none">
          ยอดอนุมัติเรียบร้อย
        </h2>
      </header>

      {/* Content */}
      <div className="text-center space-y-2">
        <p className="text-3xl font-extrabold text-green-700 select-text">
          {formatAmount(notification.amount)}
        </p>
        <p className="text-sm text-gray-600 select-text">
          บัญชี: {notification.accountName}
        </p>
        <p className="text-xs text-gray-500 select-text">
          วันที่อนุมัติ: {notification.approvalDate}
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center">
        <p className="text-xs text-gray-400 select-text">
          หมายเลขรายการ: {notification.transactionId}
        </p>
      </footer>
    </section>
  );
};

export default KbankIOSNotification;
