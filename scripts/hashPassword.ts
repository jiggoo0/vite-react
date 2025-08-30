#!/usr/bin/env ts-node

import bcrypt from "bcryptjs";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

type UserRole = "admin" | "user" | "manager";

interface Account {
  username: string;
  password: string;
  role: UserRole;
}

// รายการบัญชีทั้งหมด
const accounts: Account[] = [
  { username: "admin2517", password: "myub2517", role: "admin" },
  { username: "JPKYETONKEY244", password: "CODSLOUVPJ305", role: "manager" },
  { username: "JPKYETONKEY201", password: "CODSLOUVPJ301", role: "user" },
  { username: "JPKYETONKEY222", password: "CODSLOUVPJ337", role: "user" },
  { username: "JPKYETONKEY233", password: "CODSLOUVPJ379", role: "user" },
  { username: "JPKYETONKEY255", password: "CODSLOUVPJ398", role: "user" },
  { username: "JPKYETONKEY266", password: "CODSLOUVPJ320", role: "user" },
  { username: "JPKYETONKEY277", password: "CODSLOUVPJ341", role: "user" },
  { username: "JPKYETONKEY288", password: "CODSLOUVPJ359", role: "user" },
  { username: "JPKYETONKEY299", password: "CODSLOUVPJ407", role: "user" },
  { username: "JPKYETONKEY300", password: "CODSLOUVPJ399", role: "user" },
  { username: "JPusertest01", password: "Peudhdo5", role: "user" },
  { username: "JPusertest02", password: "PassUser2", role: "user" },
  { username: "JPusertest03", password: "PassUser3", role: "user" },
  { username: "JPusertest04", password: "PassUser4", role: "user" },
  { username: "JPusertest05", password: "PassUser5", role: "user" },
  { username: "JPusertest06", password: "PassUser6", role: "user" },
  { username: "JPusertest07", password: "PassUser7", role: "user" },
  { username: "JPusertest08", password: "PassUser8", role: "user" },
  { username: "JPusertest09", password: "PassUser9", role: "user" },
  { username: "JPusertest10", password: "PassUser10", role: "user" },
];

const saltRounds = 10;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputFile = resolve(__dirname, "../src/data/users.ts");

async function generateHashes() {
  const results: Record<string, { hash: string; role: UserRole }> = {};

  for (const { username, password, role } of accounts) {
    try {
      // Hash ตามรหัสตรง ๆ ไม่เพิ่มเลข
      const hash = await bcrypt.hash(password, saltRounds);
      results[username] = { hash, role };
    } catch (err) {
      console.error(`❌ Failed to hash password for "${username}":`, err);
    }
  }

  const fileContent = `export const users: Record<string, { hash: string; role: "admin" | "user" | "manager" }> = ${JSON.stringify(
    results,
    null,
    2
  )};\n`;

  writeFileSync(outputFile, fileContent, { encoding: "utf-8" });
  console.log(`✅ users.ts generated at: ${outputFile}`);
}

generateHashes();
