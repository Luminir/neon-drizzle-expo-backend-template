import { pgTable, serial, text } from "drizzle-orm/pg-core";

// testing
export const courses = pgTable("testing", {
    id: serial("id").primaryKey(),
    title:text("title").notNull(),
})
