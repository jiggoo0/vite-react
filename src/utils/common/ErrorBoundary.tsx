// src/utils/common/ErrorBoundary.tsx
"use client";

import { Component, ReactNode, ReactElement, ErrorInfo } from "react";

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
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error("💥 Uncaught error:", error, info);
    this.props.onError?.(error, info);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (prevProps.children !== this.props.children && this.state.hasError) {
      this.setState({ hasError: false, error: undefined });
    }
  }

  handleReload = () => window.location.reload();

  render() {
    const { hasError, error } = this.state;
    const { fallbackMessage, fallbackComponent, children } = this.props;

    if (hasError) {
      return (
        fallbackComponent || (
          <div
            role="alert"
            aria-live="assertive"
            className="flex min-h-screen flex-col items-center justify-center bg-base-100 dark:bg-zinc-900 text-base-content dark:text-gray-100 p-6 text-center animate-fadeIn"
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">⚠️ เกิดข้อผิดพลาด</h1>

            <p className="mb-4 text-sm text-base-content/70 dark:text-gray-400">
              {fallbackMessage || "ขอโทษในความไม่สะดวก กรุณารีเฟรชหน้าใหม่ หรือ ลองอีกครั้งภายหลัง"}
            </p>

            {error?.message && (
              <pre className="whitespace-pre-wrap bg-base-200 dark:bg-zinc-800 p-4 rounded-lg text-sm text-error dark:text-red-400 max-w-md mx-auto mb-4">
                {error.message}
              </pre>
            )}

            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-white font-semibold shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition"
            >
              🔄 ลองใหม่
            </button>
          </div>
        )
      );
    }

    return children as ReactElement;
  }
}

export default ErrorBoundary;
