// scripts/hashUserTempPassword.ts

import fs from 'fs';
import crypto from 'crypto';

type UserCode = {
  userId: string;
  password: string;
  hashedCode: string;
};

function hashCode(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}

const users: UserCode[] = [];

for (let i = 1; i <= 10; i++) {
  const num = i.toString().padStart(2, '0'); // 01, 02, ..., 10
  const userId = `JPKEY${num}`;
  const password = `O${num}KEYJP`;
  const hashed = hashCode(password);

  users.push({
    userId,
    password,
    hashedCode: hashed,
  });
}

const outputPath = './scripts/usersHashed.json';
fs.writeFileSync(outputPath, JSON.stringify(users, null, 2), 'utf-8');

console.log('✅ สร้างไฟล์ usersHashed.json เรียบร้อยแล้ว:');
console.log(users);
