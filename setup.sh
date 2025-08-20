#!/bin/bash
set -e

echo "🚀 Start fixing project structure..."

# 1) Remove duplicate SelectField
if [ -f src/Home/components/Forms/ui/SelectField.tsx ]; then
  rm src/Home/components/Forms/ui/SelectField.tsx
  echo "✅ Removed duplicate Forms/ui/SelectField.tsx"
fi

# 2) Ensure SelectField exported correctly
FORM_INDEX="src/Home/components/Forms/index.ts"
if ! grep -q "export * from \"./SelectField\";" "$FORM_INDEX"; then
  echo 'export * from "./SelectField";' >> "$FORM_INDEX"
  echo "✅ Added SelectField export to Forms/index.ts"
fi

# 3) Create __mocks__ directory
mkdir -p src/__mocks__

# 4) Move all mock files into __mocks__/
declare -A MOCKS=(
  ["src/Home/SecretPage/DriverLicense/mockDriverLicenseData.ts"]="src/__mocks__/driverLicense.ts"
  ["src/Home/SecretPage/MedicalCertificate/mockMedicalCertificate.ts"]="src/__mocks__/medicalCertificate.ts"
  ["src/Home/SecretPage/RegistrationPreview/mockRegistrationData.ts"]="src/__mocks__/registration.ts"
  ["src/Home/SecretPage/SalaryCertificate/mockSalaryCertificate.ts"]="src/__mocks__/salaryCertificate.ts"
  ["src/Home/SecretPage/SpecialBranchCertificate/SpecialBranchCertificate.mock.ts"]="src/__mocks__/specialBranchCertificate.ts"
  ["src/Home/components/SecretSection/KbankIOSNotification.mock.ts"]="src/__mocks__/kbankIOSNotification.ts"
)

for SRC in "${!MOCKS[@]}"; do
  if [ -f "$SRC" ]; then
    mv "$SRC" "${MOCKS[$SRC]}"
    echo "✅ Moved $SRC → ${MOCKS[$SRC]}"
  fi
done

# 5) Remove typo dependency daifyui
if grep -q '"daifyui"' package.json; then
  pnpm remove daifyui
  echo "✅ Removed daifyui from devDependencies"
fi

echo "🎉 Fix completed successfully!"