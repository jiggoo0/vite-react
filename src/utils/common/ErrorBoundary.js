"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, info) {
        console.error("💥 Uncaught error:", error, info);
        this.props.onError?.(error, info);
    }
    handleReload = () => window.location.reload();
    render() {
        const { hasError, error } = this.state;
        const { fallbackMessage, fallbackComponent, children } = this.props;
        if (hasError) {
            return (fallbackComponent || (_jsxs("div", { role: "alert", "aria-live": "assertive", className: "flex min-h-screen flex-col items-center justify-center bg-base-100 dark:bg-zinc-900 text-base-content dark:text-gray-100 p-6 text-center animate-fadeIn", children: [_jsx("h1", { className: "text-2xl sm:text-3xl font-bold mb-3", children: "\u26A0\uFE0F \u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14" }), _jsx("p", { className: "mb-4 text-sm text-base-content/70 dark:text-gray-400", children: fallbackMessage ||
                            "ขอโทษในความไม่สะดวก กรุณารีเฟรชหน้าใหม่ หรือลองอีกครั้งภายหลัง" }), error?.message && (_jsx("pre", { className: "whitespace-pre-wrap bg-base-200 dark:bg-zinc-800 p-4 rounded-lg text-sm text-error dark:text-red-400 max-w-md mx-auto mb-4", children: error.message })), _jsx("button", { onClick: this.handleReload, className: "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-white font-semibold shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition", children: "\uD83D\uDD04 \u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48" })] })));
        }
        return children;
    }
}
export default ErrorBoundary;
