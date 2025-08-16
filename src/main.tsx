'use client';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// 🌐 Context Providers
import AppProviders from '@/context/AppProviders';

// 🛣 Router
import AppRouter from '@/Router/AppRouter';

// 🎨 Styles
import '@/styles/global.css';
import '@/styles/fonts.css';
import '@/index.css';

// 🛡 Error Handling & Fallbacks
import ErrorBoundary from '@/utils/common/ErrorBoundary';
import FallbackLoader from '@/utils/common/FallbackLoader';

// ---------------------- Root Element ----------------------
const rootElement =
  document.getElementById('root') ??
  (() => {
    console.warn('⚠️ Root element not found, creating one dynamically.');
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    return div;
  })();

// ---------------------- Render App ----------------------
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <AppProviders>
      <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้า">
        <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
          <AppRouter />
        </Suspense>
      </ErrorBoundary>
    </AppProviders>
  </React.StrictMode>
);

// ---------------------- Debug Info ----------------------
if (import.meta.env.DEV) {
  console.groupCollapsed('📦 App Info');
  console.info('🚀 Version:', import.meta.env.VITE_APP_VERSION || 'dev');
  console.info('📝 Build Time:', import.meta.env.VITE_APP_BUILD_TIME || 'N/A');
  console.info('🔧 Mode:', import.meta.env.MODE);
  console.info('🌍 Base URL:', import.meta.env.BASE_URL);
  console.groupEnd();
}

// ---------------------- PWA / Service Worker ----------------------
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.log('✅ Service Worker registered'))
    .catch((err) => console.error('❌ SW registration failed:', err));
}