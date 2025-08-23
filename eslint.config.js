// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  // ==============================
  // Base JS rules
  // ==============================
  js.configs.recommended,

  // ==============================
  // TypeScript recommended rules
  // ==============================
  ...tseslint.configs.recommended,

  // ==============================
  // Prettier integration
  // ==============================
  prettier,

  // ==============================
  // TypeScript files
  // ==============================
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^", varsIgnorePattern: "^" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },

  // ==============================
  // JS/Config files (CommonJS / Node globals)
  // ==============================
  {
    files: ["*.config.js", "*.config.cjs", ".prettier.config.js", "postcss.config.cjs"],
    languageOptions: {
      globals: {
        module: true,
        require: true,
        __dirname: true,
        process: true,
      },
    },
    rules: {
      "no-undef": "off",
    },
  },

  // ==============================
  // Node scripts
  // ==============================
  {
    files: ["scripts/**/*.{js,ts}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "no-irregular-whitespace": "off",
    },
  },

  // ==============================
  // Ignored files/folders
  // ==============================
  {
    ignores: [
      "dev-dist/",
      "dist/",
      "node_modules/",
      "**/*.d.ts",
      "**/*.spec.ts",
      "**/*.test.ts",
      "**/*.test.tsx",
    ],
  }
);