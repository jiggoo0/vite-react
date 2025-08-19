// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["*.config.js", "*.config.cjs", ".*.config.js", ".*.config.cjs"],
    languageOptions: {
      globals: {
        module: true,
        require: true,
        __dirname: true,
        process: true,
      },
    },
  },
  {
    ignores: [
      "dev-dist/**", // ignore vite dev build files
      "dist/**", // ignore production build
      "node_modules/**",
      "**/*.d.ts", // ignore type declaration files
    ],
  }
);
