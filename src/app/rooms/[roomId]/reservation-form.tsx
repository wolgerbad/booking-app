'use client';

import { Button } from '@/components/ui/button';
import { Room } from '@/db/schema';
import { bookRoom } from '@/lib/actions';
import { useBookingStore } from '@/store/booking';
import { useActionState } from 'react';

const initialState = {};

type Session = {
  id: number;
  name: string;
  email: string;
  hashed_password: null;
  profile_image: string | null;
};

export default function ReservationForm({
  room,
  user,
}: {
  room: Room;
  user: Session;
}) {
  const [state, action, pending] = useActionState(bookRoom, initialState);
  console.log('user', user);
  const nights = useBookingStore((state) => state.nights);
  const startDate = useBookingStore((state) => state.startDate);
  const endDate = useBookingStore((state) => state.endDate);

  console.log('startDate', 'endDate', startDate, endDate);

  return (
    <div className="text-white font-semibold text-lg bg-slate-800">
      <header className="flex justify-between text-slate-300 bg-slate-600 px-12 py-4">
        <h2>Logged in as</h2>
        <span className="capitalize">{user.name}</span>
      </header>
      <form action={action} className="px-12 py-4 flex flex-col gap-4">
        <div>
          <label htmlFor="guest" className="block mb-1">
            How many guests?
          </label>
          <select className="w-full bg-slate-300 text-slate-900 px-4 py-2">
            {Array.from({ length: room.capacity }).map((_, idx) => (
              <option key={idx + 1}>{idx + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="note" className="block mb-1">
            Anything we should know about your stay?
          </label>
          <textarea
            name="additional_note"
            id="note"
            rows={4}
            className="w-full bg-slate-300 text-slate-900 px-4 py-2"
            placeholder="Any pets, allergies, special requirements etc.?"
          ></textarea>
        </div>
        <input type="hidden" name="room_id" value={room?.id} />
        <input type="hidden" name="user_id" value={user.id} />
        <input type="hidden" name="start_date" value={startDate || ''} />
        <input type="hidden" name="end_date" value={endDate || ''} />
        {nights > 0 ? (
          <Button className="self-end bg-yellow-600 hover:bg-yellow-700 rounded-none text-gray-800 font-semibold cursor-pointer p-6">
            Create Reservation
          </Button>
        ) : (
          <span className="self-end text-slate-500 font-medium">
            select date to continue
          </span>
        )}
      </form>
    </div>
  );
}
