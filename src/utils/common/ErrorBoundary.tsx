"use client";

import { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackMessage?: string;
  fallbackComponent?: ReactNode;
  onError?: (error: Error, info: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("💥 Uncaught error:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    const { hasError, error } = this.state;
    const { fallbackMessage, fallbackComponent } = this.props;

    if (hasError) {
      return (
        fallbackComponent || (
          <div
            role="alert"
            aria-live="assertive"
            className="flex min-h-screen flex-col items-center justify-center bg-base-100 text-base-content p-6 text-center"
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">
              เกิดข้อผิดพลาด
            </h1>

            <p className="mb-4 text-sm text-base-content/70">
              {fallbackMessage ||
                "ขอโทษในความไม่สะดวก กรุณารีเฟรชหน้าใหม่ หรือลองอีกครั้งภายหลัง"}
            </p>

            {error?.message && (
              <pre className="whitespace-pre-wrap bg-base-200 p-4 rounded-lg text-sm text-error max-w-md mx-auto mb-4">
                {error.message}
              </pre>
            )}

            <button
              onClick={this.handleReload}
              className="rounded-lg bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition"
            >
              🔄 ลองใหม่
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
