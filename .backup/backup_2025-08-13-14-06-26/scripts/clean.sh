#!/bin/bash

# ✅ Clean.sh — JP-System Production Cleanup Script
# ใช้ก่อน build, deploy, หรือ reset environment
# ล้างโฟลเดอร์ build, cache, node_modules และ lockfiles แล้วติดตั้ง dependencies ใหม่ด้วย pnpm (ถ้ามี)

set -euo pipefail

echo "🧹 Starting clean process..."

PROJECT_ROOT="$(pwd)"
echo "📁 Project root: $PROJECT_ROOT"

echo "🗑️ Removing build output directories: dist/, build/, coverage/ ..."
rm -rf dist build coverage

echo "🗑️ Removing various cache directories..."
rm -rf node_modules/.vite node_modules/.cache .turbo .eslintcache .parcel-cache .next .vite .svelte-kit .nuxt .cache

echo "📦 Removing node_modules and lockfiles..."
rm -rf node_modules
[ -f pnpm-lock.yaml ] && rm -f pnpm-lock.yaml
[ -f yarn.lock ] && rm -f yarn.lock
[ -f package-lock.json ] && rm -f package-lock.json

if command -v pnpm >/dev/null 2>&1; then
  echo "🧹 Pruning pnpm store..."
  pnpm store prune

  echo "📥 pnpm found! Installing dependencies..."
  pnpm install
else
  echo "⚠️ pnpm not found! Please install pnpm or run 'npm install' / 'yarn install' manually."
fi

echo "🗑️ Removing log files..."
rm -f *.log npm-debug.log* yarn-debug.log* pnpm-debug.log*

# สร้างโฟลเดอร์ dist ใหม่ เพื่อให้พร้อมใช้งานหลัง clean
mkdir -p dist

echo "✅ Clean completed successfully."