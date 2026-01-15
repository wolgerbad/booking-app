import { db } from '@/db';
import { booking, room } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getBookedDates() {
  return await db
    .select({ from: booking.start_date, to: booking.end_date })
    .from(booking);
}

export async function getBookings(userId: number) {
  return await db
    .select({
      id: booking.id,
      start_date: booking.start_date,
      end_date: booking.end_date,
      status: booking.status,
      additional_note: booking.additional_note,
      room_name: room.name,
      image: room.image,
      room_price: room.price,
    })
    .from(booking)
    .where(eq(booking.user_id, userId))
    .leftJoin(room, eq(room.id, booking.room_id));
}

export async function getBooking(id: number) {
  const [selectedBooking] = await db
    .select()
    .from(booking)
    .where(eq(booking.id, id));
  if (!selectedBooking)
    return { error: `No reservation found with the given id. (${id})` };

  return selectedBooking;
}
