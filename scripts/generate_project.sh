#!/bin/bash
# ============================================
# Script: generate_home_structure.sh
# Purpose: Generate Markdown file with Directory Tree and Mermaid Diagram
# Target: ./src/Home
# ============================================

ROOT="./src/Home"
OUTPUT_MD="home_structure.md"

# --------------------------------------------
# 1️⃣ Generate Markdown Header
# --------------------------------------------
echo "# Home Project Structure" > $OUTPUT_MD
echo "_Generated at: $(date)_\n" >> $OUTPUT_MD

# --------------------------------------------
# 2️⃣ Generate Directory Tree
# --------------------------------------------
echo "## Directory Tree" >> $OUTPUT_MD
echo '```' >> $OUTPUT_MD
find "$ROOT" | sed -e "s|$ROOT|Home|;s|[^/]*/|  |g" >> $OUTPUT_MD
echo '```' >> $OUTPUT_MD

# --------------------------------------------
# 3️⃣ Generate Mermaid Diagram
# --------------------------------------------
echo -e "\n## Mermaid Diagram" >> $OUTPUT_MD
echo '```mermaid' >> $OUTPUT_MD
echo "graph TD" >> $OUTPUT_MD

# Detect top-level directories
for module in $(find "$ROOT" -mindepth 1 -maxdepth 1 -type d -exec basename {} \;); do
  echo "  subgraph $module" >> $OUTPUT_MD
  echo "    Home --> $module" >> $OUTPUT_MD
  DIR="$ROOT/$module"

  # Detect subfolders recursively
  if [ -d "$DIR" ]; then
    find "$DIR" -type d | while read sub; do
      subname=$(basename "$sub")
      parent=$(basename $(dirname "$sub"))
      if [ "$parent" != "$module" ]; then
        echo "    $parent --> $subname" >> $OUTPUT_MD
      fi
    done
  fi
  echo "  end" >> $OUTPUT_MD
done

echo '```' >> $OUTPUT_MD
echo "✅ Markdown file generated: $OUTPUT_MD"