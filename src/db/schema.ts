import { integer, pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: uuid('id').primaryKey(),
  username: text('username').notNull(),
  email: text('email').notNull().unique(),
  userRole: text('userRole').notNull().default('user'),  
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().$onUpdate(() => new Date())
});

export const mapsTable = pgTable('maps', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    theme: text('theme').notNull(),
    difficulty: text('difficulty').notNull(),
})

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
