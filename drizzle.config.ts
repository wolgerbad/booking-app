import { env } from '@/utils/envSchema';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  schema: './src/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    user: env.DB_USER,
    host: env.DB_HOST,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    port: +env.DB_PORT
  },
});
