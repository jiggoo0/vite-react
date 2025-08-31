"use client";

import { FC, useMemo, useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

// ==============================
// Helpers
// ==============================
const formatCurrency = (value?: string | number): string | null => {
  if (value === undefined || isNaN(Number(value))) return null;
  return Number(value).toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 2,
  });
};

const formatTime = (iso: string): string => {
  try {
    return new Intl.DateTimeFormat("th-TH", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(iso));
  } catch {
    return iso;
  }
};

// ==============================
// Amount Component
// ==============================
interface AmountProps {
  amount?: string;
}

const Amount: FC<AmountProps> = ({ amount }) => {
  const formatted = useMemo(() => formatCurrency(amount), [amount]);
  if (!formatted) return null;
  const isPositive = Number(amount) >= 0;

  return (
    <p
      className={`my-3 text-lg font-bold select-text ${
        isPositive ? "text-green-600" : "text-red-600"
      }`}
      aria-label={`จำนวนเงิน ${isPositive ? "ได้รับ" : "ใช้จ่าย"} ${formatted}`}
    >
      {formatted}
    </p>
  );
};

// ==============================
// Additional Info + QR Code Component
// ==============================
interface AdditionalInfoProps {
  balanceAfter?: string;
  channel?: string;
  transactionId: string;
  time: string;
  qrCodeUrl?: string;
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({
  balanceAfter,
  channel,
  transactionId,
  time,
  qrCodeUrl,
}) => {
  const formattedBalance = useMemo(() => formatCurrency(balanceAfter), [balanceAfter]);
  const formattedTime = useMemo(() => formatTime(time), [time]);

  return (
    <div className="mt-4 text-sm text-gray-600 select-text" aria-label="ข้อมูลเพิ่มเติม">
      <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 items-start">
        <div className="space-y-1">
          <div>
            <span className="font-medium">วันที่: </span>
            <time dateTime={time}>{formattedTime}</time>
          </div>
          {formattedBalance && (
            <div>
              <span className="font-medium">ยอดเงินคงเหลือ: </span>
              {formattedBalance}
            </div>
          )}
          {channel && (
            <div>
              <span className="font-medium">ช่องทาง: </span>
              {channel}
            </div>
          )}
          <div>
            <span className="font-medium">รหัสธุรกรรม: </span>
            {transactionId || "-"}
          </div>
        </div>

        {qrCodeUrl && (
          <div
            className="w-20 h-20 bg-white rounded-lg shadow-sm p-2 flex items-center justify-center"
            aria-label="QR Code สำหรับสแกน"
          >
            <QRCode
              value={qrCodeUrl}
              size={64}
              style={{ width: "100%", height: "100%", maxWidth: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// ==============================
// KBank Notification Card
// ==============================
export interface KbankNotificationData {
  id: string;
  type?: "incoming" | "outgoing" | "failed";
  title?: string;
  subtitle?: string;
  message?: string;
  amount?: string;
  balanceAfter?: string;
  channel?: string;
  transactionId: string;
  time: string;
  qrCodeUrl?: string;
}

interface KbankNotificationCardProps {
  data: KbankNotificationData;
}

const KbankNotificationCard: FC<KbankNotificationCardProps> = ({ data }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownloadPNG = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, { scale: 2, useCORS: true });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `kbank-notification-${data.id}.png`;
    link.click();
  };

  return (
    <section
      ref={cardRef}
      className="rounded-3xl p-5 shadow bg-white border border-gray-200
                 hover:shadow-lg hover:-translate-y-1 transition-transform duration-200
                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                 max-w-md mx-auto mb-6 relative"
      role="region"
      aria-labelledby={`notif-title-${data.id}`}
      tabIndex={0}
    >
      {/* Header */}
      <header className="flex items-center gap-4 mb-3">
        <img
          src="/images/kbank-logo.png"
          alt="KBank logo"
          className="w-9 h-9 object-contain rounded-md flex-shrink-0"
          draggable={false}
        />
        <div className="min-w-0">
          <h2
            id={`notif-title-${data.id}`}
            className="text-base sm:text-lg font-semibold text-gray-900 truncate select-text"
            title={data.title}
          >
            {data.title || "แจ้งเตือนธุรกรรม"}
          </h2>
          {data.subtitle && (
            <p className="text-xs text-gray-500 truncate mt-0.5 select-text" title={data.subtitle}>
              {data.subtitle}
            </p>
          )}
        </div>
      </header>

      {/* Message */}
      <p className="text-sm text-gray-800 mb-3 leading-relaxed select-text border-b border-gray-200 pb-3">
        {data.message || "-"}
      </p>

      {/* Amount */}
      {data.type !== "failed" && <Amount amount={data.amount} />}

      {/* Additional Info + QR Code */}
      <AdditionalInfo
        balanceAfter={data.balanceAfter}
        channel={data.channel}
        transactionId={data.transactionId}
        time={data.time}
        qrCodeUrl={data.qrCodeUrl}
      />

      {/* Download Button */}
      <div className="mt-4 text-right">
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm"
          onClick={handleDownloadPNG}
        >
          ดาวน์โหลด PNG
        </button>
      </div>
    </section>
  );
};

// ==============================
// Export
// ==============================
export default KbankNotificationCard;
export { Amount, AdditionalInfo };
