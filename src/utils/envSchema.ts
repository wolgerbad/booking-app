import z from 'zod';

const envSchema = z.object({
  DB_NAME: z.string(),
  DB_HOST: z.string(),
  DB_PASSWORD: z.string(),
  DB_USER: z.string(),
  JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
