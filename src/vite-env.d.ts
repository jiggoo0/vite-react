/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENAI_API_KEY: string;
  readonly VITE_API_URL: string;
  readonly VITE_APP_VERSION?: string;
  readonly VITE_APP_BUILD_TIME?: string;
  readonly BASE_URL?: string;
  readonly MODE?: string;
  readonly DEV?: boolean;
  readonly PROD?: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}