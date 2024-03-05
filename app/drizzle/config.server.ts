import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: 'app/drizzle/schema.server.ts',
  out: 'app/drizzle/migrations',
  driver: 'mysql2',
  dbCredentials: {
    host: process.env.DB_HOST || 'mysql2',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'db',
  },
} satisfies Config;