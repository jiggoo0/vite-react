"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import QRCode from "react-qr-code";
// ==============================
// Helpers
// ==============================
const formatCurrency = (value) => {
    if (value === undefined || isNaN(Number(value)))
        return null;
    return Number(value).toLocaleString("th-TH", {
        style: "currency",
        currency: "THB",
        minimumFractionDigits: 2,
    });
};
const formatTime = (iso) => {
    try {
        return new Intl.DateTimeFormat("th-TH", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).format(new Date(iso));
    }
    catch {
        return iso;
    }
};
const Amount = ({ amount }) => {
    const formatted = useMemo(() => formatCurrency(amount), [amount]);
    if (!formatted)
        return null;
    const isPositive = Number(amount) >= 0;
    return (_jsx("p", { className: `my-3 text-lg font-bold select-text ${isPositive ? "text-green-600" : "text-red-600"}`, "aria-label": `จำนวนเงิน ${isPositive ? "ได้รับ" : "ใช้จ่าย"} ${formatted}`, children: formatted }));
};
const AdditionalInfo = ({ balanceAfter, channel, transactionId, time, qrCodeUrl, }) => {
    const formattedBalance = useMemo(() => formatCurrency(balanceAfter), [balanceAfter]);
    const formattedTime = useMemo(() => formatTime(time), [time]);
    return (_jsx("div", { className: "mt-4 text-sm text-gray-600 select-text", "aria-label": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", children: _jsxs("div", { className: "grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 items-start", children: [_jsxs("div", { className: "space-y-1", children: [_jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48: " }), _jsx("time", { dateTime: time, children: formattedTime })] }), formattedBalance && (_jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "\u0E22\u0E2D\u0E14\u0E40\u0E07\u0E34\u0E19\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D: " }), formattedBalance] })), channel && (_jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07: " }), channel] })), _jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "\u0E23\u0E2B\u0E31\u0E2A\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21: " }), transactionId || "-"] })] }), qrCodeUrl && (_jsx("div", { className: "w-20 h-20 bg-white rounded-lg shadow-sm p-2 flex items-center justify-center", "aria-label": "QR Code \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2A\u0E41\u0E01\u0E19", children: _jsx(QRCode, { value: qrCodeUrl, size: 64, style: { width: "100%", height: "100%", maxWidth: "100%" } }) }))] }) }));
};
const KbankNotificationCard = ({ data }) => {
    return (_jsxs("section", { className: "rounded-3xl p-5 shadow bg-white border border-gray-200\n                 hover:shadow-lg hover:-translate-y-1 transition-transform duration-200\n                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2\n                 max-w-md mx-auto", role: "region", "aria-labelledby": `notif-title-${data.id}`, tabIndex: 0, children: [_jsxs("header", { className: "flex items-center gap-4 mb-3", children: [_jsx("img", { src: "/images/kbank-logo.png", alt: "KBank logo", className: "w-9 h-9 object-contain rounded-md flex-shrink-0", draggable: false }), _jsxs("div", { className: "min-w-0", children: [_jsx("h2", { id: `notif-title-${data.id}`, className: "text-base sm:text-lg font-semibold text-gray-900 truncate select-text", title: data.title, children: data.title || "แจ้งเตือนธุรกรรม" }), data.subtitle && (_jsx("p", { className: "text-xs text-gray-500 truncate mt-0.5 select-text", title: data.subtitle, children: data.subtitle }))] })] }), _jsx("p", { className: "text-sm text-gray-800 mb-3 leading-relaxed select-text border-b border-gray-200 pb-3", children: data.message || "-" }), data.type !== "failed" && _jsx(Amount, { amount: data.amount }), _jsx(AdditionalInfo, { balanceAfter: data.balanceAfter, channel: data.channel, transactionId: data.transactionId, time: data.time, qrCodeUrl: data.qrCodeUrl })] }));
};
// ==============================
// Export
// ==============================
export default KbankNotificationCard;
export { Amount, AdditionalInfo };
