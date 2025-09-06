declare module "sql.js" {
  export interface SqlJsStatic {
    Database: any;
  }

  const initSqlJs: () => Promise<SqlJsStatic>;
  export default initSqlJs;
}
