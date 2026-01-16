'use server';

import { db } from '@/db';
import { booking, user } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import z from 'zod';

const formSchema = z.object({
  additional_note: z.string().optional(),
  user_id: z.number().min(1),
  room_id: z.number().min(1),
  start_date: z.string().min(1),
  end_date: z.string().min(1),
  guest: z.number().min(1),
});

export async function bookRoom(prev: unknown, formData: FormData) {
  const additional_note = formData.get('additional_note');
  const user_id = formData.get('user_id') as string;
  const room_id = formData.get('room_id') as string;
  const start_date = formData.get('start_date') as string;
  const end_date = formData.get('end_date') as string;
  const guest = formData.get('guest') as string;

  const data = {
    additional_note,
    user_id: +user_id,
    room_id: +room_id,
    start_date,
    end_date,
    guest: +guest,
  };

  const result = formSchema.safeParse(data);

  if (result.error) return { error: result.error.message };
  console.log('error', result.error);

  const newBooking = await db.insert(booking).values({
    additional_note,
    start_date,
    room_id: data.room_id,
    user_id: data.user_id,
    end_date,
    guest: data.guest,
  });

  redirect('/rooms/success');
}

export async function updateBooking(prev: unknown, formData: FormData) {
  const guest = formData.get('guest') as string;
  const bookingId = formData.get('bookingId') as string;

  console.log('guest', guest);

  await db
    .update(booking)
    .set({ guest: +guest })
    .where(eq(booking.id, +bookingId));

  redirect('/account/reservations');
}

export async function deleteBooking(formData: FormData) {
  const bookingId = formData.get('bookingId') as string;

  await db.delete(booking).where(eq(booking.id, +bookingId));

  revalidatePath('/account/reservations');
}

export async function updateProfile(formData: FormData) {
  const nationalId = formData.get('id') as string;
  const userId = formData.get('userId') as string;
  await db
    .update(user)
    .set({ national_id: nationalId })
    .where(eq(user.id, +userId));

  revalidatePath('/account/profile');
}
