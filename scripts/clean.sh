#!/bin/bash

# ✅ Clean.sh — JP-System Production Cleanup Script
# ใช้ก่อน build, deploy, หรือ reset environment

echo "🧹 Starting clean process..."

# ❌ Exit เมื่อเกิดข้อผิดพลาด
set -euo pipefail

# 🗂️ ระบุ root directory (optional)
PROJECT_ROOT="$(pwd)"
echo "📁 Project root: $PROJECT_ROOT"

# === ลบโฟลเดอร์ build/output ===
echo "🗑️ Removing dist/, build/, coverage/..."
rm -rf dist build coverage

# === ลบแคช Vite / Framework / Tools ===
echo "🗑️ Removing cache directories..."
rm -rf node_modules/.vite
rm -rf node_modules/.cache
rm -rf .turbo
rm -rf .eslintcache
rm -rf .parcel-cache
rm -rf .next
rm -rf .vite
rm -rf .svelte-kit
rm -rf .nuxt
rm -rf .cache

# === ลบ Node modules และ lockfile (reset dependencies) ===
echo "📦 Removing node_modules and pnpm-lock.yaml..."
rm -rf node_modules
rm -f pnpm-lock.yaml

# === ติดตั้ง dependencies ใหม่ด้วย pnpm ===
echo "📥 Reinstalling dependencies with pnpm..."
pnpm install

# === ลบ log ที่ตกค้าง ===
echo "🗑️ Cleaning up logs..."
rm -f *.log npm-debug.log* yarn-debug.log* pnpm-debug.log*

# === สร้าง dist/ ว่าง (สำหรับ CI/CD) ===
mkdir -p dist

echo "✅ Clean completed successfully."