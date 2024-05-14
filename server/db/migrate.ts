import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./schema";
import { conn } from ".";

await migrate(db, { migrationsFolder: "./drizzle" });

await conn.end();
