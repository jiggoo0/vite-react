// ✅ src/Home/common/ErrorBoundary.tsx — React Error Boundary สำหรับ JP Visual & Docs

import React, { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * 🧱 ErrorBoundary
 *
 * - จับ error runtime ของ component tree ด้านล่าง
 * - แสดง fallback UI แทน component ที่ล้มเหลว
 * - ใช้งานได้ดีร่วมกับ Production หรือการ debug
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 🔧 ส่ง log error ไปยัง monitoring service (เช่น Sentry) ได้ที่นี่
    console.error("💥 Uncaught error:", error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-base-100 text-base-content p-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">เกิดข้อผิดพลาดบางอย่าง</h1>
          <p className="mb-4 text-sm text-base-content/70">
            ขอโทษในความไม่สะดวก กรุณารีเฟรชหน้าใหม่ หรือลองอีกครั้งภายหลัง
          </p>
          {error?.message && (
            <pre className="whitespace-pre-wrap bg-base-200 p-4 rounded-lg text-sm text-error max-w-md mx-auto">
              {error.message}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
