#!/bin/bash
# export-structure.sh
# 📦 Export project structure from src/ into Markdown
# ใช้งาน:
#   ./export-structure.sh [--summary] [--output=FILE]

set -e

OUTPUT="structure.md"
IGNORE="node_modules|dist|.git|.vite"
SUMMARY=false

# 🛠 Parse arguments
for arg in "$@"; do
  case $arg in
    --summary)
      SUMMARY=true
      ;;
    --output=*)
      OUTPUT="${arg#*=}"
      ;;
    -h|--help)
      echo "Usage: $0 [--summary] [--output=FILE]"
      echo "  --summary   include summary (directories/files count)"
      echo "  --output    specify output filename (default: structure.md)"
      exit 0
      ;;
    *)
      echo "❌ Unknown option: $arg"
      echo "Use -h or --help for usage."
      exit 1
      ;;
  esac
done

echo "📂 Generating project structure (Markdown)..."

{
  echo "# Project Structure"
  echo
  echo "_Generated at: $(date '+%Y-%m-%d %H:%M:%S')_"
  echo
  echo '```'
  if [ "$SUMMARY" = true ]; then
    tree -a -I "$IGNORE" src
  else
    tree -a -I "$IGNORE" src | head -n -1
  fi
  echo '```'
} > "$OUTPUT"

echo "✅ Project structure saved to $OUTPUT"
if [ "$SUMMARY" = true ]; then
  tail -n 1 "$OUTPUT" | sed 's/^/ℹ️  /'
fi