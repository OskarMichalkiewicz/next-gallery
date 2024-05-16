import {
  timestamp,
  text,
  pgTableCreator,
  varchar,
  index,
} from "drizzle-orm/pg-core";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "~/env";
import { sql } from "drizzle-orm";

export const createTable = pgTableCreator((name) => `next-gallery_${name}`);

export const users = createTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  password: text("password").notNull(),
});

export const images = createTable(
  "image",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    userId: text("userId").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at"),
  },
  (image) => ({
    nameIndex: index("name_idx").on(image.name),
  }),
);

const connectionString = env.DATABASE_URL;
const pool = postgres(connectionString, { max: 1 });

export const db = drizzle(pool);
