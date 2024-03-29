import { int, text, mysqlSchema } from "drizzle-orm/mysql-core";

export const mySchema = mysqlSchema("my_schema")

export const mySchemaUsers = mySchema.table("users", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
});