// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  int,
  timestamp,
  // primaryKey, // Removing unused import
  varchar,
  text,
} from "drizzle-orm/mysql-core";
import { mysqlTable } from "drizzle-orm/mysql-core";

export const posts = mysqlTable("posts", {
  id: int("id").autoincrement().primaryKey(), // "autoincrement" is correct, ignore spell warning
  title: varchar("title", { length: 100 }).notNull(),
  content: text("content").notNull(),
  name: varchar("name", { length: 100 }),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
  authorId: varchar("author_id", { length: 100 }),
});

export type Post = typeof posts.$inferSelect;
