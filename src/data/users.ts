export type UserRole = "admin" | "user" | "manager";

export interface UserRecord {
  hash: string;
  role: UserRole;
}

export const users: Record<string, UserRecord> = {
  admin2517: {
    hash: "$2b$10$3qlTUSjMMbTOjutIO5XkFuR0KWy7uRqLp29TKxYqZYREVIgrFVBfu",
    role: "admin",
  },
  JPKYETONKEY201: {
    hash: "$2b$10$KVMnvP69rZMcr7LOiRwXM.Awbt0e6JLIBi78CvM3AN0dLvHWAn03u",
    role: "user",
  },
  JPKYETONKEY222: {
    hash: "$2b$10$wXie3mmQ1iJLzoSVzk5lTOubzQUiuSUyd8E5ikbmP0xB7e1snqyA6",
    role: "user",
  },
  JPKYETONKEY233: {
    hash: "$2b$10$SCDvYmSUz2WFVEum9JGk4OcEoj/eiim/GvGEdjeIBcXtUwmFbxSrK",
    role: "user",
  },
  JPKYETONKEY244: {
    hash: "$2b$10$aKzH7OHibvCz8FxGL05/VOlzyEkwrYHI9nzvCz70Hr2owDRFn6JxG",
    role: "manager",
  },
  JPKYETONKEY255: {
    hash: "$2b$10$1XEcTUMDFP5/Zz110SBOB.gWO0.dD18iSouqXfVec1bHgkutiNZuC",
    role: "user",
  },
  JPKYETONKEY266: {
    hash: "$2b$10$deAr3.d6qYRDp5rmp/rWYOz5C4vPhKaUUHANS7GjA9n.Z4rBkNczO",
    role: "user",
  },
  JPKYETONKEY277: {
    hash: "$2b$10$tBIEXU1Kya5m2LJjAerpzeidYQk4zxEm0VyvPTCDM.rmtY4p69PCS",
    role: "user",
  },
  JPKYETONKEY288: {
    hash: "$2b$10$sRAwppHGld9KwCjahywaYur6I0iWHnW7eoGaERgXSSevruTtrC9vK",
    role: "user",
  },
  JPKYETONKEY299: {
    hash: "$2b$10$0wqSJaZ7QS4Cg5ym/jswfu/1mrLolZy8eHbF4EkisoFqC93sgR8ky",
    role: "user",
  },
  JPKYETONKEY300: {
    hash: "$2b$10$QXVYLPlvxXlS7Pt.6hN1zOi1JCOm0utPva252C.SGmMFeIBflfwH6",
    role: "user",
  },
  JPusertest01: {
    hash: "$2b$10$NQ8LIBiELa9Ib.dVKiuhTOdWw0oIr5dOQiMGH0ZlW3bFFkq8P51qK",
    role: "user",
  },
};
