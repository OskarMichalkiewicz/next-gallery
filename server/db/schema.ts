import { timestamp, text, pgTableCreator } from "drizzle-orm/pg-core";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "~/env";

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

const connectionString = env.DATABASE_URL;
const pool = postgres(connectionString, { max: 1 });

export const db = drizzle(pool);
