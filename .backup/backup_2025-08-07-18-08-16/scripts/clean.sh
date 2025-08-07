#!/bin/bash

# ✅ Clean.sh — JP-System Production Cleanup Script
# ใช้ก่อน build, deploy, หรือ reset environment

set -euo pipefail

echo "🧹 Starting clean process..."

PROJECT_ROOT="$(pwd)"
echo "📁 Project root: $PROJECT_ROOT"

echo "🗑️ Removing dist/, build/, coverage/..."
rm -rf dist build coverage

echo "🗑️ Removing cache directories..."
rm -rf node_modules/.vite node_modules/.cache .turbo .eslintcache .parcel-cache .next .vite .svelte-kit .nuxt .cache

echo "📦 Removing node_modules and lockfiles..."
rm -rf node_modules

# ลบ lockfile ที่มีในโปรเจกต์
[ -f pnpm-lock.yaml ] && rm -f pnpm-lock.yaml
[ -f yarn.lock ] && rm -f yarn.lock
[ -f package-lock.json ] && rm -f package-lock.json

# เช็คว่ามี pnpm หรือไม่ก่อนติดตั้ง
if command -v pnpm >/dev/null 2>&1; then
  echo "📥 Reinstalling dependencies with pnpm..."
  pnpm install
else
  echo "⚠️ pnpm not found! Please install pnpm or run dependency install manually."
fi

echo "🗑️ Cleaning up logs..."
rm -f *.log npm-debug.log* yarn-debug.log* pnpm-debug.log*

mkdir -p dist

echo "✅ Clean completed successfully."