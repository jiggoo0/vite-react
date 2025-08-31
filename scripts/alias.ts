// scripts/alias.ts
import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { loadConfigFromFile } from "vite";

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

// ------------------------
// Load alias from tsconfig.json
// ------------------------
const getAliasFromTSConfig = (): AliasEntry[] => {
  const tsconfigPath = path.resolve("tsconfig.json");
  if (!fs.existsSync(tsconfigPath)) return [];

  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
  const paths = tsconfig.compilerOptions?.paths || {};
  const baseUrl = normalizePath(path.resolve(tsconfig.compilerOptions?.baseUrl || "./"));

  const aliases: AliasEntry[] = [];
  for (const [key, arr] of Object.entries(paths)) {
    if (!Array.isArray(arr) || arr.length === 0) continue;
    const aliasKey = key.replace(/\*$/, "");
    const aliasPath = normalizePath(path.resolve(baseUrl, arr[0].replace(/\*$/, "")));
    aliases.push([aliasKey, aliasPath]);
  }
  return aliases;
};

// ------------------------
// Load alias from vite.config.ts
// ------------------------
const getAliasFromViteConfig = async (): Promise<AliasEntry[]> => {
  const viteConfigPath = path.resolve("vite.config.ts");
  if (!fs.existsSync(viteConfigPath)) return [];

  const result = await loadConfigFromFile(
    { command: "serve", mode: "development" },
    viteConfigPath
  );
  const aliasConfig = result?.config?.resolve?.alias || {};
  const aliases: AliasEntry[] = [];

  if (Array.isArray(aliasConfig)) {
    for (const entry of aliasConfig) {
      if ("find" in entry && "replacement" in entry) {
        aliases.push([String(entry.find), normalizePath(String(entry.replacement))]);
      }
    }
  } else {
    for (const [key, value] of Object.entries(aliasConfig)) {
      aliases.push([key, normalizePath(String(value))]);
    }
  }

  return aliases;
};

// ------------------------
// Check import path
// ------------------------
const checkAlias = (aliasEntries: AliasEntry[]) => {
  let hasError = false;
  const files = globSync("src/**/*.{ts,tsx,js,jsx}", { absolute: true });

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    content.split("\n").forEach((line, i) => {
      const match = line.match(/from\s+['"]([^'"]+)['"]|import\s+['"]([^'"]+)['"]/);
      if (!match) return;
      const importPath = normalizePath(match[1] || match[2] || "");

      aliasEntries.forEach(([aliasKey, aliasPath]) => {
        if (importPath.startsWith(aliasPath)) {
          const subPath = importPath.slice(aliasPath.length);
          const shouldBe = `${aliasKey}${subPath}`;
          console.log(color(`❌ ${file}:${i + 1} → "${importPath}" → ใช้ "${shouldBe}"`, "red"));
          hasError = true;
        }
      });
    });
  });

  if (hasError) process.exit(1);
  console.log(color("✅ import ทุกไฟล์ใช้ alias ถูกต้องแล้ว", "green"));
};

// ------------------------
// Fix import path
// ------------------------
const fixAlias = (aliasEntries: AliasEntry[]) => {
  let fixedCount = 0;
  const files = globSync("src/**/*.{ts,tsx,js,jsx}", { absolute: true });

  files.forEach((file) => {
    let content = fs.readFileSync(file, "utf-8");
    let changed = false;

    aliasEntries.forEach(([aliasKey, aliasPath]) => {
      const regex = new RegExp(
        `(['"])${aliasPath.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}(\\/[^'"]*)?\\1`,
        "g"
      );
      if (regex.test(content)) {
        content = content.replace(regex, (match, quote, subPath = "") => {
          const newPath = `${aliasKey}${subPath}`;
          console.log(color("🔧 fixed:", "yellow"), `${file} → ${color(newPath, "green")}`);
          return `${quote}${newPath}${quote}`;
        });
        changed = true;
      }
    });

    if (changed) {
      fs.writeFileSync(file, content, "utf-8");
      fixedCount++;
    }
  });

  console.log(
    fixedCount > 0
      ? color(`✨ alias ถูกแก้ไขแล้วทั้งหมด ${fixedCount} ไฟล์`, "green")
      : color("✅ ไม่มี alias ที่ต้องแก้", "green")
  );
};

// ------------------------
// CLI
// ------------------------
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

(async () => {
  const tsAliases = getAliasFromTSConfig();
  const viteAliases = await getAliasFromViteConfig();
  const aliasEntries: AliasEntry[] = [...tsAliases, ...viteAliases];

  if (!aliasEntries.length) {
    console.log(color("⚠️ ไม่พบ alias ใน tsconfig.json หรือ vite.config.ts", "yellow"));
    process.exit(1);
  }

  // แก้ ESLint no-unused-expressions ด้วย if/else
  if (mode === "--check") {
    checkAlias(aliasEntries);
  } else if (mode === "--fix") {
    fixAlias(aliasEntries);
  }
})();
