#!/usr/bin/env bash

# scripts/backup-project.sh

set -e

# 📍 Config
SRC_DIR="$(pwd)"
DATE="$(date '+%Y-%m-%d-%H-%M-%S')"
FOLDER_NAME="backup_${DATE}"
LOCAL_BACKUP_DIR="$SRC_DIR/.backup"
LOCAL_FOLDER="$LOCAL_BACKUP_DIR/$FOLDER_NAME"
ANDROID_BACKUP_DIR="/storage/emulated/0/Download/Backup"
ZIP_FILE="$ANDROID_BACKUP_DIR/${FOLDER_NAME}.zip"

# 📌 Logger
log() {
  echo "[$(date '+%H:%M:%S')] $*"
}

# 🔐 Check Android Storage (Termux)
if [[ ! -d "/storage/emulated/0" ]]; then
  log "❌ Storage access not found. Run: termux-setup-storage"
  exit 1
fi

# 📁 Prepare folders
mkdir -p "$LOCAL_FOLDER"
mkdir -p "$ANDROID_BACKUP_DIR"

# 🧹 Clean old local folders (keep last 10)
log "🧹 Cleaning old backups..."
cd "$LOCAL_BACKUP_DIR" || exit
ls -1dt backup_* 2>/dev/null | tail -n +11 | xargs -r rm -rf --

# 📦 Copy project (excluding heavy/unneeded)
log "📁 Copying files to $LOCAL_FOLDER ..."
EXCLUDES=(
  "node_modules"
  ".git"
  "dist"
  ".backup"
  ".DS_Store"
  "*.log"
  ".env.local"
  ".next"
  ".cache"
)

RSYNC_EXCLUDES=()
for item in "${EXCLUDES[@]}"; do
  RSYNC_EXCLUDES+=("--exclude=$item")
done

rsync -a "${RSYNC_EXCLUDES[@]}" "$SRC_DIR/" "$LOCAL_FOLDER/"

# 🗜️ ZIP to Android
log "📦 Creating ZIP at $ZIP_FILE ..."
cd "$LOCAL_BACKUP_DIR" || exit
zip -r -q "$ZIP_FILE" "$FOLDER_NAME"

# ✅ Done
if [[ -f "$ZIP_FILE" ]]; then
  log "✅ Backup completed."
  log "   📁 Folder: $LOCAL_FOLDER"
  log "   📱 ZIP:    $ZIP_FILE"
else
  log "❌ ZIP failed."
  exit 1
fi