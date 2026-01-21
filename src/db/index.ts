import { env } from '@/utils/envSchema';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

const connection = await mysql.createConnection({
  database: env.DB_NAME,
  port: +env.DB_PORT,
  user: env.DB_USER,
  host: env.DB_HOST,
  password: env.DB_PASSWORD,
});

export const db = drizzle(connection, {
  schema,
  mode: 'default',
  logger: true,
});
