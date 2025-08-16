#!/bin/bash
# clean-project.sh
# สคริปต์ลบไฟล์ซ้ำ และ rebuild node_modules สำหรับโปรเจกต์

echo "=== Cleaning duplicate files ==="

# 1️⃣ ลบไฟล์ types ซ้ำ
rm -f ./src/types/driverLicense.ts

# 2️⃣ ลบไฟล์ CSS ซ้ำ
rm -f ./src/Home/SecretPage/driverLicense.css

# 3️⃣ ลบไฟล์ภาพซ้ำ (เก็บไว้ public/assets/images)
rm -f ./public/images/bg-driver-license.webp
rm -f ./public/assets/bg-driver-license.webp

echo "=== Removing node_modules & Vite cache ==="
rm -rf node_modules
rm -rf node_modules/.vite

echo "=== Installing dependencies ==="
pnpm install

echo "=== Build project ==="
pnpm dev

echo "=== Cleanup complete ==="