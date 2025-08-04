// ✅ src/data/users.ts — ใช้งานจริง

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

export const users: User[] = [
  {
    id: 1,
    name: "admin2517@jp.com",
    email: "admin2517@jp.com",
    password: "$2b$10$XAbGG/NKTVN9XyRl2ddBVueAawqRbAK3XeiJTzyP/ntFB3t6X0pLW",
    role: "admin"
  },
  {
    id: 2,
    name: "JPKYETONKEY201@jp.com",
    email: "JPKYETONKEY201@jp.com",
    password: "$2b$10$XrN7bEkSoFVmrJeKfHAPDuogDNgy2lT7sRUpjkoEMfbkM8xRcqHye",
    role: "user"
  },
  {
    id: 3,
    name: "JPKYETONKEY222@jp.com",
    email: "JPKYETONKEY222@jp.com",
    password: "$2b$10$CY.OmbDRDeM/3XYn6jStIOpa3E6jw9qxiwUDyNwqdnrzPWlYHOuRG",
    role: "user"
  },
  {
    id: 4,
    name: "JPKYETONKEY233@jp.com",
    email: "JPKYETONKEY233@jp.com",
    password: "$2b$10$DTmjwNfcmGkViYXmHV3wCewiIB/aNadAqOb1ez/xroXHvZw2BJTE6",
    role: "user"
  },
  {
    id: 5,
    name: "JPKYETONKEY244@jp.com",
    email: "JPKYETONKEY244@jp.com",
    password: "$2b$10$Uyf6qkUFHWSIxy.nTfMMoOqkMuZT9I2FEpvt5gGeE8FxnB5MeH7LC",
    role: "user"
  },
  {
    id: 6,
    name: "JPKYETONKEY255@jp.com",
    email: "JPKYETONKEY255@jp.com",
    password: "$2b$10$6UCrrn/G2LlYlfSaeqStWu6/JiERLIvwMEbVpbqHGS2KlVcX4hRI6",
    role: "user"
  },
  {
    id: 7,
    name: "JPKYETONKEY266@jp.com",
    email: "JPKYETONKEY266@jp.com",
    password: "$2b$10$a7dID5roA5oISAjp/lksJuu2xK0fxvTzaAXV5BNbvzDLLofqk3yuG",
    role: "user"
  },
  {
    id: 8,
    name: "JPKYETONKEY277@jp.com",
    email: "JPKYETONKEY277@jp.com",
    password: "$2b$10$n7onXyNh8xueHceD3u6zGe5OESgnFCFtYM4sY/WC9PHp1RIqVm5MW",
    role: "user"
  },
  {
    id: 9,
    name: "JPKYETONKEY288@jp.com",
    email: "JPKYETONKEY288@jp.com",
    password: "$2b$10$VJ2aKkbD3fMS28XmCgRPd.LDidsMs2J0MFS7QbhvTqlLEhmXAy/D6",
    role: "user"
  },
  {
    id: 10,
    name: "JPKYETONKEY299@jp.com",
    email: "JPKYETONKEY299@jp.com",
    password: "$2b$10$JNvmfIGYVp5ZmT0limHm9.stMBadUSeJkGIHU7T4ty0a9DN2DZx0W",
    role: "user"
  },
  {
    id: 11,
    name: "JPKYETONKEY300@jp.com",
    email: "JPKYETONKEY300@jp.com",
    password: "$2b$10$b49EgrjSHe1Lo9Jgi8qaU.mMzGJBFFaDQUtVIvSEOwWDxpX.TDuk2",
    role: "user"
  },
  {
    id: 12,
    name: "JPusertest01@jp.com",
    email: "JPusertest01@jp.com",
    password: "$2b$10$Kuv2TDqjC7RUE3fPPt4Z5OJl75bHpK/fmJt5X7PRvYqK74oyYeBlu",
    role: "user"
  }
];
