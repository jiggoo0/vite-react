// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
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
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
  {
    files: ["*.config.js", "*.config.cjs", ".prettier.config.js", "postcss.config.cjs"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
  {
    files: ["scripts/**/*.{js,ts}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "no-irregular-whitespace": "off",
    },
  },
  {
    ignores: [
      "dev-dist/",
      "dist/",
      "node_modules/",
      "**/*.d.ts",
      "**/*.spec.ts",
      "**/*.test.{ts,tsx}",
    ],
  }
);
