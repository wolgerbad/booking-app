'use server';

import { db } from '@/db';
import { room, user } from '@/db/schema';
import { comparePasswords, hashPassword, setSession } from '@/lib/session';
import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import z from 'zod';

const signupSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export async function login(prev: unknown, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const result = loginSchema.safeParse({ email, password });

  if (!result.success) return { error: result.error.message };

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
}

export async function signup(prev: unknown, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const result = signupSchema.safeParse({ name, email, password });

  if (!result.success) {
    return { error: result.error.message };
  }

  const hashedPassword = await hashPassword(password);

  const [newUser] = await db
    .insert(user)
    .values({ name, email, hashed_password: hashedPassword })
    .$returningId();

  if (!newUser) return { error: 'Something went wrong' };

  await setSession({ userId: newUser.id });
}

export async function logout() {
  (await cookies()).delete('jwt');
  redirect('/login')
}
