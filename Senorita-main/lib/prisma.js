import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Create a Postgres pool using DATABASE_URL from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Wrap it with Prisma adapter
const adapter = new PrismaPg(pool);

// Construct PrismaClient with adapter
const prisma = globalThis.prisma || new PrismaClient({ adapter });

// Cache the client in dev to avoid hot-reload issues
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

// Export the client
export const db = prisma;

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.