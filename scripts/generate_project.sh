#!/bin/bash
# ============================================
# Script: generate_home_structure.sh
# Purpose: Generate Markdown file with Directory Tree and Mermaid Diagram (folders only)
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
# 2️⃣ Generate Directory Tree (including files)
# --------------------------------------------
echo "## Directory Tree" >> $OUTPUT_MD
echo '```' >> $OUTPUT_MD
find "$ROOT" | sed -e "s|$ROOT|Home|;s|[^/]*/|  |g" >> $OUTPUT_MD
echo '```' >> $OUTPUT_MD

# --------------------------------------------
# 3️⃣ Generate Mermaid Diagram (folders only)
# --------------------------------------------
echo -e "\n## Mermaid Diagram" >> $OUTPUT_MD
echo '```mermaid' >> $OUTPUT_MD
echo "graph TD" >> $OUTPUT_MD

# Recursive function to generate folders only
generate_mermaid() {
  local parent_path="$1"
  local parent_name="$2"

  for dir in "$parent_path"/*/; do
    [ -d "$dir" ] || continue
    local name=$(basename "$dir")
    echo "  subgraph $name" >> $OUTPUT_MD
    echo "    $parent_name --> $name" >> $OUTPUT_MD
    generate_mermaid "$dir" "$name"
    echo "  end" >> $OUTPUT_MD
  done
}

generate_mermaid "$ROOT" "Home"

echo '```' >> $OUTPUT_MD
echo "✅ Markdown file generated: $OUTPUT_MD (folders only)"