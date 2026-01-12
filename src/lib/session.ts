import { env } from '@/utils/envSchema';
import { compare, hash } from 'bcryptjs';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';

const secret = new TextEncoder().encode(env.JWT_SECRET);
const SALT_ROUND = 12;

type JwtPayload = {
  userId: number;
};

export async function hashPassword(plainTextPassword: string) {
  return await hash(plainTextPassword, SALT_ROUND);
}

export async function comparePasswords(
  plainTextPassword: string,
  hashedPassword: string
) {
  return await compare(plainTextPassword, hashedPassword);
}

export async function setSession(payload: JwtPayload) {
  const expiresInThreeDays = new Date(Date.now() + 60 * 60 * 24 * 3 * 1000);

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('3 days')
    .sign(secret);

  console.log('jwt', token);
  (await cookies()).set('jwt', token, {
    httpOnly: true,
    expires: expiresInThreeDays,
    secure: true,
  });
}

export async function getSession() {
  const token = (await cookies()).get('jwt')?.value;
  if (!token) return { error: 'No cookie found' };

  const session = await jwtVerify(token, secret);

  return session;
}
