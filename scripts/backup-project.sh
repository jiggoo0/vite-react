#!/usr/bin/env bash
set -euo pipefail

# ------------------------------
# CONFIG
# ------------------------------
SRC_DIR="$(pwd)"
DATE="$(date '+%Y-%m-%d-%H-%M-%S')"
FOLDER_NAME="backup_${DATE}"
ANDROID_BACKUP_DIR="/storage/emulated/0/Download/Backup"
ZIP_FILE="$ANDROID_BACKUP_DIR/${FOLDER_NAME}.zip"
KEEP_COUNT=15

# ------------------------------
# LOG FUNCTION
# ------------------------------
log() { echo "[$(date '+%H:%M:%S')] $*"; }

# ------------------------------
# CLEANUP ON EXIT
# ------------------------------
cleanup() {
  if [[ -d "${TEMP_BACKUP_PARENT:-}" ]]; then
    rm -rf "$TEMP_BACKUP_PARENT"
    log "🧹 Temporary folder cleaned."
  fi
}
trap cleanup EXIT

# ------------------------------
# CHECK REQUIRED COMMANDS
# ------------------------------
for cmd in rsync zip; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    log "❌ Command not found: $cmd. Please install it."
    exit 1
  fi
done

# ------------------------------
# CHECK STORAGE
# ------------------------------
if [[ ! -d "/storage/emulated/0" ]]; then
  log "❌ Storage access not found. Run: termux-setup-storage"
  exit 1
fi

# ------------------------------
# CREATE TEMP BACKUP
# ------------------------------
TEMP_BACKUP_PARENT="$(mktemp -d)"
TEMP_BACKUP_DIR="$TEMP_BACKUP_PARENT/$FOLDER_NAME"
mkdir -p "$TEMP_BACKUP_DIR"
log "📁 Copying files to $TEMP_BACKUP_DIR ..."

EXCLUDES=( "node_modules" ".git" "dist" ".backup" ".DS_Store" "*.log" ".env.local" ".next" ".cache" )
RSYNC_EXCLUDES=()
for item in "${EXCLUDES[@]}"; do
  RSYNC_EXCLUDES+=("--exclude=$item")
done

rsync -a "${RSYNC_EXCLUDES[@]}" "$SRC_DIR/" "$TEMP_BACKUP_DIR/"

# ------------------------------
# CREATE ZIP
# ------------------------------
log "📦 Creating ZIP at $ZIP_FILE ..."
cd "$TEMP_BACKUP_PARENT"

if command -v pv >/dev/null 2>&1; then
  FILE_COUNT=$(find "$FOLDER_NAME" -type f | wc -l)
  zip -r -v "$ZIP_FILE" "$FOLDER_NAME" | pv -l -s "$FILE_COUNT" > /dev/null
else
  zip -r -q "$ZIP_FILE" "$FOLDER_NAME"
fi

# ------------------------------
# CLEAN OLD BACKUPS
# ------------------------------
log "🧹 Cleaning old ZIP files on Android..."
mkdir -p "$ANDROID_BACKUP_DIR"
cd "$ANDROID_BACKUP_DIR"
ls -1dt backup_*.zip 2>/dev/null | tail -n +$((KEEP_COUNT+1)) | xargs -r rm -f --

# ------------------------------
# VERIFY RESULT
# ------------------------------
if [[ -f "$ZIP_FILE" ]]; then
  ZIP_SIZE=$(du -h "$ZIP_FILE" | cut -f1)
  log "✅ Backup completed."
  log "   📱 ZIP: $ZIP_FILE"
  log "   📏 Size: $ZIP_SIZE"
else
  log "❌ ZIP failed."
  exit 1
fi