import { sql } from "drizzle-orm";
import { int, timestamp, varchar, text } from "drizzle-orm/mysql-core";
import { mysqlTable } from "drizzle-orm/mysql-core";

// User posts table (legacy)
export const posts = mysqlTable("posts", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 128 }),
  title: varchar("title", { length: 100 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
  authorId: varchar("author_id", { length: 255 }),
});

// News posts table for consolidated system
export const newsPosts = mysqlTable("news_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  excerpt: varchar("excerpt", { length: 255 }).notNull(), // Short description
  content: text("content").notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  image: varchar("image", { length: 255 }).default("/img1.jpg"),
  authorName: varchar("author_name", { length: 100 }),
  authorId: varchar("author_id", { length: 100 }), // Clerk user ID
  published: int("published").default(1), // 1=published, 0=draft
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
});

export type Post = typeof posts.$inferSelect;
export type NewsPost = typeof newsPosts.$inferSelect;

// Features table
export const features = mysqlTable("features", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  description: text("description").notNull(),
  image: varchar("image", { length: 255 }).default("/img1.jpg"),
  link: varchar("link", { length: 255 }).notNull(),
  details: text("details").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// Analytics table
export const analytics = mysqlTable("analytics", {
  id: int("id").autoincrement().primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  key: varchar("key", { length: 100 }).notNull(),
  value: int("value").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// Achievements table
export const achievements = mysqlTable("achievements", {
  id: int("id").autoincrement().primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  title: varchar("title", { length: 100 }).notNull(),
  description: text("description").notNull(),
  achievedAt: timestamp("achieved_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// Derived Types
export type Feature = typeof features.$inferSelect;
export type AnalyticsRecord = typeof analytics.$inferSelect;
export type Achievement = typeof achievements.$inferSelect;
