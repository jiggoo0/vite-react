#!/usr/bin/env bash
set -euo pipefail

REPORT="NOTEDEVSEO_SUMMARY.md"
GREEN="\033[0;32m"; YELLOW="\033[1;33m"; RED="\033[0;31m"; RESET="\033[0m"
term_log() { echo -e "$1"; }

# -----------------------------
# 0️⃣ Load .env if exists
# -----------------------------
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs || true)
fi

# -----------------------------
# 1️⃣ Git Status
# -----------------------------
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  BRANCH=$(git symbolic-ref --short HEAD 2>/dev/null || git rev-parse --short HEAD)
  if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
    GIT_STATUS="Clean ✅"
  else
    GIT_STATUS="Uncommitted / untracked changes ❌"
  fi
else
  BRANCH="N/A"
  GIT_STATUS="Not a git repo ❌"
fi

# -----------------------------
# 2️⃣ Dependencies
# -----------------------------
REQUIRED_PKGS=(react react-dom vite tailwindcss daisyui typescript eslint prettier)
DEP_TABLE="| Dependency | Status | Version |"$'\n'"|------------|--------|---------|"

if [ -f package.json ]; then
  for pkg in "${REQUIRED_PKGS[@]}"; do
    VERSION=$(jq -r ".dependencies[\"$pkg\"] // .devDependencies[\"$pkg\"] // .peerDependencies[\"$pkg\"] // empty" package.json)
    if [ -n "$VERSION" ]; then
      DEP_TABLE+=$'\n'"| $pkg | ✅ | $VERSION |"
    else
      DEP_TABLE+=$'\n'"| $pkg | ❌ | - |"
    fi
  done
else
  DEP_TABLE+=$'\n'"| - | ❌ | package.json not found |"
fi

# -----------------------------
# 3️⃣ Config Files
# -----------------------------
CONFIG_FILES=(tsconfig.json tailwind.config.ts vite.config.ts .eslintrc .prettierrc .prettierrc.json .prettierrc.js .gitignore)
CONFIG_TABLE="| Config File | Status |"$'\n'"|------------|--------|"
for f in "${CONFIG_FILES[@]}"; do
  [ -f "$f" ] && CONFIG_TABLE+=$'\n'"| $f | ✅ exists |" || CONFIG_TABLE+=$'\n'"| $f | ❌ missing |"
done

# -----------------------------
# 4️⃣ Alias Check
# -----------------------------
ALIAS_STATUS="Not checked ❌"
if [ -f scripts/alias.ts ]; then
  NODE_VER=$(node -v)
  TSNODE_VER=$(ts-node -v 2>/dev/null || echo "N/A")
  OUTPUT=$(node -r ts-node/register scripts/alias.ts --check 2>&1 || true)
  echo "$OUTPUT" | grep -q "❌" \
    && ALIAS_STATUS="❌ alias issues (Node: $NODE_VER, ts-node: $TSNODE_VER)" \
    || ALIAS_STATUS="✅ all imports alias ok (Node: $NODE_VER, ts-node: $TSNODE_VER)"
fi

# -----------------------------
# 5️⃣ Project Tree
# -----------------------------
TREE_TOP="src"
if [ -d "$TREE_TOP" ]; then
  if command -v tree >/dev/null 2>&1; then
    TREE_CONTENT=$(tree -L 10 "$TREE_TOP")
  else
    TREE_CONTENT=$(find "$TREE_TOP" -maxdepth 10 -print)
  fi
else
  TREE_CONTENT="> ❌ $TREE_TOP folder not found"
fi

# -----------------------------
# 6️⃣ Project Info
# -----------------------------
GITHUB_URL=${GITHUB_URL:-"N/A"}
DEVELOPER_EMAIL=${DEVELOPER_EMAIL:-"N/A"}
WEBSITE_URL=${WEBSITE_URL:-"N/A"}
VERCEL_ACCOUNT=${VERCEL_ACCOUNT:-"N/A"}
VERCEL_PROJECT_NAME=${VERCEL_PROJECT_NAME:-"N/A"}
VERCEL_PROJECT_ID=${VERCEL_PROJECT_ID:-"N/A"}

PKG_NAME=$(jq -r '.name // "N/A"' package.json 2>/dev/null)
PKG_VER=$(jq -r '.version // "N/A"' package.json 2>/dev/null)
PKG_DESC=$(jq -r '.description // "N/A"' package.json 2>/dev/null)

PROJECT_INFO="| Item | Value |"$'\n'"|------|-------|"
PROJECT_INFO+=$'\n'"| Project Name | $PKG_NAME |"
PROJECT_INFO+=$'\n'"| Version | $PKG_VER |"
PROJECT_INFO+=$'\n'"| Description | $PKG_DESC |"
PROJECT_INFO+=$'\n'"| GitHub URL | $GITHUB_URL |"
PROJECT_INFO+=$'\n'"| Developer Email | $DEVELOPER_EMAIL |"
PROJECT_INFO+=$'\n'"| Website URL | $WEBSITE_URL |"
PROJECT_INFO+=$'\n'"| Vercel Account | $VERCEL_ACCOUNT |"
PROJECT_INFO+=$'\n'"| Vercel Project Name | $VERCEL_PROJECT_NAME |"
PROJECT_INFO+=$'\n'"| Vercel Project ID | $VERCEL_PROJECT_ID |"

# -----------------------------
# 7️⃣ Generate Summary Report
# -----------------------------
NOW=$(date +"%Y-%m-%d %H:%M:%S")
cat > "$REPORT" <<EOF
# 📊 Project Summary Report
Date: $NOW  
Branch: $BRANCH  
Git Status: $GIT_STATUS

## 1️⃣ Dependencies
$DEP_TABLE

## 2️⃣ Config Files
$CONFIG_TABLE

## 3️⃣ Alias Check
- $ALIAS_STATUS

## 4️⃣ Project Tree (src, depth 10)
\`\`\`
$TREE_CONTENT
\`\`\`

## 5️⃣ Project Info
$PROJECT_INFO

## 6️⃣ Notes
- RODEMAP.md & WORKFLOW.md included if present
EOF

# Append RODEMAP.md and WORKFLOW.md
for file in RODEMAP.md WORKFLOW.md; do
  [ -f "$file" ] && echo -e "\n## 📝 $file\n$(cat "$file")" >> "$REPORT"
done

term_log "${GREEN}✅ Summary report generated: $REPORT${RESET}"