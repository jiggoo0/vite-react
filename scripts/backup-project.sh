#!/usr/bin/env bash

set -euo pipefail

# 📍 Config
SRC_DIR="$(pwd)"
DATE="$(date '+%Y-%m-%d-%H-%M-%S')"
FOLDER_NAME="backup_${DATE}"
LOCAL_BACKUP_DIR="$SRC_DIR/.backup"
LOCAL_FOLDER="$LOCAL_BACKUP_DIR/$FOLDER_NAME"
ANDROID_BACKUP_DIR="/storage/emulated/0/Download/Backup"
ZIP_FILE="$ANDROID_BACKUP_DIR/${FOLDER_NAME}.zip"

log() {
  echo "[$(date '+%H:%M:%S')] $*"
}

# ตรวจสอบว่ามีสิทธิ์เข้าถึง Android Storage หรือยัง (สำหรับ Termux)
if [[ ! -d "/storage/emulated/0" ]]; then
  log "❌ Storage access not found. Run: termux-setup-storage"
  exit 1
fi

mkdir -p "$LOCAL_FOLDER" "$ANDROID_BACKUP_DIR"

log "🧹 Cleaning old backups..."
cd "$LOCAL_BACKUP_DIR" || { log "❌ Cannot cd to $LOCAL_BACKUP_DIR"; exit 1; }
# เก็บแค่ 10 โฟลเดอร์ backup ล่าสุด แล้วลบที่เกิน
ls -1dt backup_* 2>/dev/null | tail -n +11 | xargs -r rm -rf --

log "📁 Copying files to $LOCAL_FOLDER ..."
# กำหนดไฟล์และโฟลเดอร์ที่ไม่ต้องการแบ็คอัพ
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

# คัดลอกไฟล์ไปที่ backup folder โดยไม่รวมไฟล์ที่ exclude
rsync -a "${RSYNC_EXCLUDES[@]}" "$SRC_DIR/" "$LOCAL_FOLDER/"

log "📦 Creating ZIP at $ZIP_FILE ..."
cd "$LOCAL_BACKUP_DIR" || { log "❌ Cannot cd to $LOCAL_BACKUP_DIR"; exit 1; }
# zip แบบเงียบ (quiet)
zip -r -q "$ZIP_FILE" "$FOLDER_NAME"

# ตรวจสอบว่าสร้างไฟล์ zip สำเร็จไหม
if [[ -f "$ZIP_FILE" ]]; then
  log "✅ Backup completed."
  log "   📁 Folder: $LOCAL_FOLDER"
  log "   📱 ZIP:    $ZIP_FILE"
else
  log "❌ ZIP failed."
  exit 1
fi