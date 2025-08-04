// scripts/hashPassword.ts
import bcrypt from "bcryptjs";

const passwords: Record<string, string> = {
  admin2517: "myub2517",
  JPKYETONKEY201: "CODSLOUVPJ301",
  JPKYETONKEY222: "CODSLOUVPJ337",
  JPKYETONKEY233: "CODSLOUVPJ379",
  JPKYETONKEY244: "CODSLOUVPJ305",
  JPKYETONKEY255: "CODSLOUVPJ398",
  JPKYETONKEY266: "CODSLOUVPJ320",
  JPKYETONKEY277: "CODSLOUVPJ341",
  JPKYETONKEY288: "CODSLOUVPJ359",
  JPKYETONKEY299: "CODSLOUVPJ407",
  JPKYETONKEY300: "CODSLOUVPJ399",
  JPusertest01: "Peudhdo5",
};

const saltRounds = 10;

async function generateHashes() {
  const results: Record<string, string> = {};

  for (const [username, plainPassword] of Object.entries(passwords)) {
    try {
      const hash = await bcrypt.hash(plainPassword, saltRounds);
      results[username] = hash;
    } catch (err) {
      console.error(`❌ Failed to hash password for "${username}":`, err);
    }
  }

  console.log("🔐 Generated Password Hashes:\n");
  for (const [username, hash] of Object.entries(results)) {
    console.log(`"${username}": "${hash}",`);
  }

  console.log("\n✅ Copy-paste hashes above into your users.ts file.");
}

generateHashes();
