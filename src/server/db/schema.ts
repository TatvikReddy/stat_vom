// Drizzle ORM schema definitions
import { sql } from "drizzle-orm";
import {
  int,
  serial,
  varchar,
  text,
  timestamp,
  datetime,
  boolean,
  uniqueIndex,
  mysqlTable,
} from "drizzle-orm/mysql-core";
/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
/** Posts table */
export const posts = mysqlTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  content: text("content").notNull(),
  name: varchar("name", { length: 256 }).notNull(),
  authorId: varchar("author_id", { length: 100 }).notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
});
export type Post = typeof posts.$inferSelect;

/** News posts table */
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

export type NewsPost = typeof newsPosts.$inferSelect;

/** Features table */
export const features = mysqlTable("features", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  description: text("description").notNull(),
  image: varchar("image", { length: 255 }).default("/img1.jpg"),
  link: varchar("link", { length: 255 }).notNull(),
  details: text("details").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

/** Achievements table */
export const achievements = mysqlTable("achievements", {
  id: serial("id").primaryKey(), // PK
  userId: int("user_id"), // FK into your users table
  name: varchar("name", { length: 100 }), // Achievement name
  achieved: boolean("achieved"), // true/false
  achievedAt: datetime("achieved_at").default(sql`CURRENT_TIMESTAMP`), // timestamp
});

// Unique index for achievements per user and name
export const userAchievementUniqueIndex = uniqueIndex(
  "user_achievement_unique"
).on(achievements.userId, achievements.name);

/** Analytics table */
export const analytics = mysqlTable("game_stats", {
  userId: int("user_id"), // FK into your users table
  longestSurvived: int("longest_survived").default(0),
  shortestSurvived: int("shortest_survived").default(0),
  mostFood: int("most_food").default(0),
  mostMaterial: int("most_material").default(0),
  mostPower: int("most_power").default(0),
  mostPopulation: int("most_population").default(0),
  leastFood: int("least_food").default(0),
  leastMaterial: int("least_material").default(0),
  leastPower: int("least_power").default(0),
  leastPopulation: int("least_population").default(0),
  reincarnatedTimes: int("reincarnated_times").default(0),
  vaultFoundTimes: int("vault_found_times").default(0),
  updatedAt: datetime("updated_at").default(sql`CURRENT_TIMESTAMP`).$onUpdateFn(() => sql`CURRENT_TIMESTAMP`),
});

// Derived Types
export type Feature = typeof features.$inferSelect;
export type Achievement = typeof achievements.$inferSelect;
export type AnalyticsRecord = typeof analytics.$inferSelect;
