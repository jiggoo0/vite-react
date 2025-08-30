// src/data/UserTempCodes.ts
export type TempCode = {
  userId: string;
  hashedCode: string;
  loginStartTime?: number;
  expiresInMs: number;
  used: boolean;
};

export async function hashCode(code: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

type RawUserCode = {
  userId: string;
  password: string;
  hashedCode: string;
};

const rawUserCodes: RawUserCode[] = [
  {
    userId: "JPKEY01",
    password: "O01KEYJP",
    hashedCode: "77edc82431153964397393d6a3d55cae94630ad23d09f11004c186c8f711fbc1",
  },
  {
    userId: "JPKEY02",
    password: "O02KEYJP",
    hashedCode: "1ea3566a8f4c932d7f5dcb38bfc8871158e8afc113ea77feb73cec748c0bd239",
  },
  {
    userId: "JPKEY03",
    password: "O03KEYJP",
    hashedCode: "37d3acb3dec53150767214e66bca3d0497c6af329ece6021a7bb2628174531b6",
  },
  {
    userId: "JPKEY04",
    password: "O04KEYJP",
    hashedCode: "7338f841c372fd1feec3abf3cadf55c00c64950643f1f57c703001d59e1ed6dd",
  },
  {
    userId: "JPKEY05",
    password: "O05KEYJP",
    hashedCode: "89fc683eb12881a52ee9b6091db5a69884c857761eac175c622fecc417bcae3f",
  },
  {
    userId: "JPKEY06",
    password: "O06KEYJP",
    hashedCode: "1e864af35851c4f082487bb6dd16a0d95c3c1eaadf7e5ed5e69f2fe8da0fb13b",
  },
  {
    userId: "JPKEY07",
    password: "O07KEYJP",
    hashedCode: "7036e80177b8dfa43640861d8744b25a88cfc81aabac609deb86a01e1eae967e",
  },
  {
    userId: "JPKEY08",
    password: "O08KEYJP",
    hashedCode: "f8f4033e893560a1f41d3d1256ee940ab6e449d2f3ed6ff1246c8a6ca0dd8aac",
  },
  {
    userId: "JPKEY09",
    password: "O09KEYJP",
    hashedCode: "7fba05d8ad3f308b0e39a6ab4fc5721a112be220b0d18c8c76d2ae009fb1b35d",
  },
  {
    userId: "JPKEY10",
    password: "O10KEYJP",
    hashedCode: "c25752668dc9ad195bb49e5c7df23aa0c8cb85d9ae12c5b95f71eb54fdded955",
  },
];

const userTempCodes: TempCode[] = rawUserCodes.map(({ userId, hashedCode }) => ({
  userId,
  hashedCode,
  loginStartTime: undefined,
  expiresInMs: 10 * 60 * 1000,
  used: false,
}));

setInterval(() => {
  const now = Date.now();
  for (let i = userTempCodes.length - 1; i >= 0; i--) {
    const c = userTempCodes[i];
    if (c.loginStartTime && now - c.loginStartTime > c.expiresInMs) {
      userTempCodes.splice(i, 1);
    }
  }
}, 60 * 1000);

export async function resetUserTempCode(
  userId: string,
  plainCode: string,
  expiresInMin = 10
): Promise<void> {
  const hashed = await hashCode(plainCode);
  const existing = userTempCodes.find((r) => r.userId === userId);
  if (existing) {
    existing.hashedCode = hashed;
    existing.used = false;
    existing.loginStartTime = undefined;
    existing.expiresInMs = expiresInMin * 60 * 1000;
  } else {
    userTempCodes.push({
      userId,
      hashedCode: hashed,
      loginStartTime: undefined,
      expiresInMs: expiresInMin * 60 * 1000,
      used: false,
    });
  }
}

export async function tryUserTempLogin(userId: string, plainCode: string): Promise<boolean> {
  const code = userTempCodes.find((c) => c.userId === userId);
  if (!code || code.used) return false;
  const hashedInput = await hashCode(plainCode);
  if (code.hashedCode !== hashedInput) return false;
  const now = Date.now();
  if (!code.loginStartTime) {
    code.loginStartTime = now;
    return true;
  }
  const expired = now - code.loginStartTime > code.expiresInMs;
  if (expired) return false;
  code.used = true;
  return true;
}

export function getUserTempTimeRemaining(userId: string): number | null {
  const code = userTempCodes.find((c) => c.userId === userId);
  if (!code || !code.loginStartTime) return null;
  const now = Date.now();
  const remaining = code.expiresInMs - (now - code.loginStartTime);
  return remaining > 0 ? remaining : 0;
}

export const tempCodes = userTempCodes;
