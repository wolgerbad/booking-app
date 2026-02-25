import { db } from '@/db';
import { room } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { redis } from './redis';


export async function getRooms() {
  const cachedRooms = await redis.get('rooms');
  if(cachedRooms) return cachedRooms;

  const rooms = await db.select().from(room);
  if (!rooms.length) return { error: 'No room found.' };
  redis.set('rooms', rooms)
  return rooms;
}

export async function getRoom(id: number) {
  const [selectedRoom] = await db.select().from(room).where(eq(room.id, id));

  return selectedRoom;
}
