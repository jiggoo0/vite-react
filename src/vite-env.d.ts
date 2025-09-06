// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_BUILD_TIME: string;
  readonly VITE_API_URL?: string;
  // Add any other VITE_ environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
