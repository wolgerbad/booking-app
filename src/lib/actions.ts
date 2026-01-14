'use server';

import { db } from '@/db';
import { booking } from '@/db/schema';
import { redirect } from 'next/navigation';

import z from 'zod';

const formSchema = z.object({
  additional_note: z.string().optional(),
  user_id: z.number().min(1),
  room_id: z.number().min(1),
  start_date: z.string().min(1),
  end_date: z.string().min(1),
});

export async function bookRoom(prev: unknown, formData: FormData) {
  const additional_note = formData.get('additional_note');
  const user_id = formData.get('user_id') as string;
  const room_id = formData.get('room_id') as string;
  const start_date = formData.get('start_date') as string;
  const end_date = formData.get('end_date') as string;

  const data = {
    additional_note,
    user_id: +user_id,
    room_id: +room_id,
    start_date,
    end_date,
  };

  console.log('test', data);

  const result = formSchema.safeParse(data);

  if (result.error) return { error: result.error.message };
  console.log('error', result.error);

  const newBooking = await db.insert(booking).values({
    additional_note,
    start_date,
    room_id: data.room_id,
    user_id: data.user_id,
    end_date,
  });

  redirect('/checkout/success');
}
