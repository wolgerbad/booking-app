import { db } from '@/db';
import { Room, room } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getRooms(): Promise<{ error: string } | Room[]> {
  const rooms = await db.select().from(room);
  if (!rooms.length) return { error: 'No room found.' };
  return rooms;
}

export async function getRoom(id: number) {
  const [selectedRoom] = await db.select().from(room).where(eq(room.id, id));

  return selectedRoom;
}
