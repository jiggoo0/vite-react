// scripts/alias.ts
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

const getAlias = async (): Promise<Record<string, string>> => {
  const result = await loadConfigFromFile(
    { command: "serve", mode: "development" },
    path.resolve("vite.config.ts")
  );
  const alias = result?.config?.resolve?.alias || {};
  return Object.fromEntries(
    Object.entries(alias).map(([k, v]) => [k, normalizePath(String(v))])
  );
};

const checkAlias = async (files: string[], aliasEntries: AliasEntry[]) => {
  let hasError = false;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");

    content.split("\n").forEach((line, i) => {
      const match = line.match(/from\s+['"]([^'"]+)['"]/);
      if (!match) return;

      const importPath = normalizePath(match[1]);

      for (const [aliasKey, aliasPath] of aliasEntries) {
        if (importPath.startsWith(aliasPath)) {
          console.log(
            color("❌ ", "red") +
              `${path.relative(__dirname, file)}:${i + 1} → ใช้ alias "${aliasKey}" แทน "${importPath}"`
          );
          hasError = true;
        }
      }
    });
  }

  if (hasError) {
    console.error(color("\nพบ import ที่ควรแก้ให้ใช้ alias ❗", "red"));
    process.exit(1);
  }

  console.log(color("✅ import ทุกไฟล์ใช้ alias ถูกต้องแล้ว", "green"));
};

const fixAlias = async (files: string[], aliasEntries: AliasEntry[]) => {
  let fixedCount = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, "utf-8");
    let changed = false;

    for (const [aliasKey, aliasPath] of aliasEntries) {
      const regex = new RegExp(
        `from (['"])${aliasPath.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}(\\/[^'"]*)?\\1`,
        "g"
      );

      if (regex.test(content)) {
        content = content.replace(regex, (_, quote, subPath = "") => {
          const newPath = `${aliasKey}${subPath}`;
          console.log(
            color("🔧 fixed:", "yellow"),
            `${path.relative(__dirname, file)} →`,
            color(newPath, "green")
          );
          return `from ${quote}${newPath}${quote}`;
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

const main = async () => {
  const mode = process.argv[2]; // --check | --fix
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
};

main();