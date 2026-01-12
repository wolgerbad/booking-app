import { db } from '@/db';
import { room } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getRooms() {
  const rooms = await db.select().from(room);
  if (!rooms.length) return { error: 'No room found.' };
  return rooms;
}

export async function getRoom(id: number) {
  const [selectedRoom] = await db.select().from(room).where(eq(room.id, id));

  return selectedRoom;
}
