#!/bin/bash
set -euo pipefail

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

PROJECTS_DIR="$HOME/projects"
TERMUX_TMP="$HOME/tmp"
TERMUX_CACHE="$HOME/.cache"
PNPM_LOGS="$HOME/.pnpm-store"
NPM_LOGS="$HOME/.npm/_logs"
MAX_PARALLEL_JOBS=4

SUCCESS_COUNT=0
SKIP_COUNT=0
NOT_NPM_COUNT=0

log "=== เริ่มล้างพื้นที่ระบบ ==="

command -v pnpm >/dev/null 2>&1 || {
    log "pnpm not found. Installing..."
    export COREPACK_ENABLE=1
    export COREPACK_NO_INTERACTIVE=1
    corepack enable
    corepack prepare pnpm@latest --activate
}

log "pnpm version: $(pnpm --version)"

pnpm store prune --reporter silent || log "Warning: pnpm store prune failed"

safe_rm() {
    local target="$1"
    [ -d "$target" ] && rm -rf "$target" 2>/dev/null || log "Cannot remove $target (permission?)"
}

install_project() {
    local proj="$1"
    local base=$(basename "$proj")

    [[ "$base" == .* || "$base" == "node_modules" ]] && { ((SKIP_COUNT++)); return; }

    log "Processing $proj..."
    [ -d "$proj/node_modules" ] && safe_rm "$proj/node_modules"

    if [ -f "$proj/package.json" ]; then
        (cd "$proj" && pnpm install --frozen-lockfile --reporter silent)
        ((SUCCESS_COUNT++))
    else
        log "Skipping $proj (no package.json)"
        ((NOT_NPM_COUNT++))
    fi
}

PROJECTS=($(find "$PROJECTS_DIR" -mindepth 1 -maxdepth 1 -type d))

for proj in "${PROJECTS[@]}"; do
    install_project "$proj" &
    [[ $(jobs -r -p | wc -l) -ge $MAX_PARALLEL_JOBS ]] && wait -n
done
wait

log "=== ล้าง tmp/cache/logs ==="
safe_rm "$TERMUX_CACHE"
safe_rm "$HOME/.local/share/Trash"
safe_rm "$TERMUX_TMP"
safe_rm "$NPM_LOGS"
safe_rm "$PNPM_LOGS"

log "=== พื้นที่หลังทำความสะอาด ==="
df -h | grep -E "/data|/storage|/"

log "=== สรุปผล ==="
log "Projects installed successfully: $SUCCESS_COUNT"
log "Projects skipped (dot folders/node_modules): $SKIP_COUNT"
log "Projects skipped (not npm project): $NOT_NPM_COUNT"
log "=== การล้างพื้นที่เสร็จสิ้น ==="