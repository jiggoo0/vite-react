#!/bin/bash
# ✅ Clean.sh — JP-System Production Cleanup Script

set -euo pipefail

PROJECT_ROOT="$(pwd)"
FORCE=false
MODES=()

# ==============================
# Functions
# ==============================
show_help() {
  cat <<EOF
Usage: $0 [options]

Options:
  --all           ลบทุกอย่าง (build, cache, node_modules, lockfiles, logs)
  --cache-only    ลบเฉพาะ cache directories
  --node-only     ลบ node_modules และ lockfiles
  --build-only    ลบเฉพาะ build output (dist, build, coverage)
  --logs-only     ลบ log files
  -y, --yes       ข้ามการยืนยัน (force mode)
  -h, --help      แสดงวิธีใช้
EOF
}

confirm() {
  if [[ "$FORCE" == true ]]; then return 0; fi
  read -r -p "⚠️  คุณแน่ใจหรือไม่ที่จะลบ? (y/N): " ans
  case "$ans" in
    y|Y) return 0 ;;
    *) echo "❌ ยกเลิก"; exit 1 ;;
  esac
}

clean_build() {
  echo "🗑️ Removing build output directories..."
  rm -rf dist build coverage
  mkdir -p dist
}

clean_cache() {
  echo "🗑️ Removing cache directories..."
  rm -rf node_modules/.vite node_modules/.cache .turbo .eslintcache .parcel-cache .next .vite .svelte-kit .nuxt .cache
}

clean_node() {
  echo "📦 Removing node_modules and lockfiles..."
  rm -rf node_modules
  rm -f pnpm-lock.yaml yarn.lock package-lock.json
}

clean_logs() {
  echo "🗑️ Removing log files..."
  rm -f *.log npm-debug.log* yarn-debug.log* pnpm-debug.log*
}

install_pnpm() {
  if command -v pnpm >/dev/null 2>&1; then
    echo "🧹 Pruning pnpm store..."
    pnpm store prune
    echo "📥 Installing dependencies via pnpm..."
    pnpm install
  else
    echo "⚠️ pnpm not found! Run 'npm install' or 'yarn install'."
  fi
}

interactive_menu() {
  cat <<EOF

============================
   🧹 JP-System Clean Menu
============================
1) Clean Build (dist, build, coverage)
2) Clean Cache (.vite, .next, .cache, ...)
3) Clean Node (node_modules + lockfiles)
4) Clean Logs (*.log)
5) Clean All
0) Exit
============================
EOF
  read -r -p "👉 เลือกตัวเลขที่ต้องการ: " choice
  case "$choice" in
    1) MODES=("build") ;;
    2) MODES=("cache") ;;
    3) MODES=("node") ;;
    4) MODES=("logs") ;;
    5) MODES=("build" "cache" "node" "logs") ;;
    0) echo "👋 ออก"; exit 0 ;;
    *) echo "❌ Invalid choice"; exit 1 ;;
  esac
}

# ==============================
# Parse arguments
# ==============================
if [[ $# -eq 0 ]]; then
  interactive_menu
else
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --all) MODES=("build" "cache" "node" "logs") ;;
      --cache-only) MODES=("cache") ;;
      --node-only) MODES=("node") ;;
      --build-only) MODES=("build") ;;
      --logs-only) MODES=("logs") ;;
      -y|--yes) FORCE=true ;;
      -h|--help) show_help; exit 0 ;;
      *) echo "❌ Unknown option: $1"; show_help; exit 1 ;;
    esac
    shift
  done
fi

# ==============================
# Main execution
# ==============================
echo "📁 Project root: $PROJECT_ROOT"
confirm

for mode in "${MODES[@]}"; do
  case "$mode" in
    build) clean_build ;;
    cache) clean_cache ;;
    node) clean_node; install_pnpm ;;
    logs) clean_logs ;;
  esac
done

echo "✅ Clean completed successfully."