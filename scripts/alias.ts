// scripts/alias-check.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadConfigFromFile } from "vite";
import { glob } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type AliasEntry = [string, string];
type ColorType = "reset" | "red" | "green" | "yellow";

const color = (text: string, type: ColorType = "reset") => {
  const codes: Record<ColorType, string> = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
  };
  return `${codes[type]}${text}${codes.reset}`;
};

const normalizePath = (p: string) => p.replace(/\\/g, "/").replace(/\/+$/, "");

/** โหลด alias จาก vite.config.ts */
export const getAlias = async (): Promise<Record<string, string>> => {
  const result = await loadConfigFromFile(
    { command: "serve", mode: "development" },
    path.resolve("vite.config.ts")
  );

  const aliasConfig = result?.config?.resolve?.alias || {};
  const normalized: Record<string, string> = {};

  if (Array.isArray(aliasConfig)) {
    for (const entry of aliasConfig) {
      if ("find" in entry && "replacement" in entry) {
        normalized[String(entry.find)] = normalizePath(String(entry.replacement));
      }
    }
  } else {
    for (const [key, value] of Object.entries(aliasConfig)) {
      normalized[key] = normalizePath(String(value));
    }
  }

  return normalized;
};

/** ตรวจสอบ import path */
export const checkAlias = async (files: string[], aliasEntries: AliasEntry[]) => {
  let hasError = false;
  const errors: string[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");

    content.split("\n").forEach((line, i) => {
      const match = line.match(/from\s+['"]([^'"]+)['"]|import\s+['"]([^'"]+)['"]/);
      if (!match) return;

      const importPath = normalizePath(match[1] || match[2] || "");

      for (const [aliasKey, aliasPath] of aliasEntries) {
        if (importPath.startsWith(aliasPath)) {
          const subPath = importPath.slice(aliasPath.length);
          const shouldBe = `${aliasKey}${subPath}`;
          errors.push(
            `${path.relative(__dirname, file)}:${i + 1} → "${importPath}" → ใช้ "${shouldBe}"`
          );
          hasError = true;
        }
      }
    });
  }

  if (hasError) {
    console.error(color("\n❌ พบ import ที่ควรแก้ให้ใช้ alias ❗", "red"));
    errors.forEach((err) => console.log(color("  ", "red") + err));
    process.exit(1);
  }

  console.log(color("✅ import ทุกไฟล์ใช้ alias ถูกต้องแล้ว", "green"));
};

/** แก้ไข import path ให้ตรง alias */
export const fixAlias = async (files: string[], aliasEntries: AliasEntry[]) => {
  let fixedCount = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, "utf-8");
    let changed = false;

    for (const [aliasKey, aliasPath] of aliasEntries) {
      const regex = new RegExp(
        `(['"])${aliasPath.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}(\\/[^'"]*)?\\1`,
        "g"
      );

      if (regex.test(content)) {
        content = content.replace(regex, (match, quote, subPath = "") => {
          const newPath = `${aliasKey}${subPath}`;
          console.log(
            color("🔧 fixed:", "yellow"),
            `${path.relative(__dirname, file)} →`,
            color(newPath, "green")
          );
          return `${quote}${newPath}${quote}`;
        });
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content, "utf-8");
      fixedCount++;
    }
  }

  console.log(
    fixedCount > 0
      ? color(`\n✨ alias ถูกแก้ไขแล้วทั้งหมด ${fixedCount} ไฟล์`, "green")
      : color("✅ ไม่มี alias ที่ต้องแก้", "green")
  );
};

/** CLI */
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    const mode = process.argv[2];
    if (!["--check", "--fix"].includes(mode)) {
      console.log(
        color("⚠️  ใช้งานไม่ถูกต้อง\n", "yellow") +
          "ตัวอย่าง:\n" +
          "  pnpm alias --check   # ตรวจสอบ\n" +
          "  pnpm alias --fix     # แก้ไข\n"
      );
      process.exit(1);
    }

    const alias = await getAlias();
    const aliasEntries: AliasEntry[] = Object.entries(alias);

    if (!aliasEntries.length) {
      console.log(color("⚠️  ไม่พบ alias ใน vite.config.ts", "yellow"));
      return;
    }

    const files: string[] = await glob("src/**/*.{ts,tsx,js,jsx}", { absolute: true });

    if (mode === "--check") {
      await checkAlias(files, aliasEntries);
    } else {
      await fixAlias(files, aliasEntries);
    }
  })();
}
