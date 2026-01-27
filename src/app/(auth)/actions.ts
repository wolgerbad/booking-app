'use server';

import { db } from '@/db';
import { user } from '@/db/schema';
import { comparePasswords, hashPassword, setSession } from '@/lib/session';
import { eq } from 'drizzle-orm';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { Ratelimit } from "@upstash/ratelimit"
import z from 'zod';
import { Redis } from '@upstash/redis';

const signupSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

const loginLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '15 m'),
  prefix: 'theaurora'
})

const signupLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '15 m'),
  prefix: 'theaurora'
})

export async function login(prev: unknown, formData: FormData) {
  const h = (await headers())
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const result = loginSchema.safeParse({ email, password });

  if (!result.success) return { error: result.error.message };

  const ip = h.get('x-ip-token') ?? h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
  "unknown";

  const rl = await loginLimit.limit(ip)

  if(!rl.success) return {error: 'Too many requests. Try again later'}

  const [userExists] = await db
    .select()
    .from(user)
    .where(eq(user.email, email));

  if (!userExists) {
    return { error: 'Invalid credentials.' };
  }

  const decoded = await comparePasswords(password, userExists.hashed_password);

  if (!decoded) {
    return { error: 'Invalid credentials.' };
  }

  await setSession({ userId: userExists.id });

  return {error: null}
}

export async function signup(prev: unknown, formData: FormData) {
  const h = (await headers())
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const result = signupSchema.safeParse({ name, email, password });

  if (!result.success) {
    return { error: result.error.message };
  }

  const hashedPassword = await hashPassword(password);

  const ip = h.get('x-ip-token') ?? h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
  "unknown";
  const rl = await signupLimit.limit(ip)
  if(!rl.success) return {error: 'Too many requests. Try again later'}

  const [newUser] = await db
    .insert(user)
    .values({ name, email, hashed_password: hashedPassword })
    .$returningId();

  if (!newUser) return { error: 'Something went wrong' };

  await setSession({ userId: newUser.id });

  return {error: null}
}

export async function logout() {
  (await cookies()).delete('jwt');
  redirect('/login')
}
