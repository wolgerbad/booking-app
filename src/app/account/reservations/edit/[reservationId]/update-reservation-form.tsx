'use client';

import { Button } from '@/components/ui/button';
import { Room } from '@/db/schema';
import { useRouter } from 'next/navigation';

export default function UpdateReservationForm({ room }: { room: Room }) {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push('/account/reservations');
  }

  return (
    <div className="text-white font-semibold text-lg bg-slate-800">
      <form className="px-12 py-6 flex flex-col gap-4" onSubmit={handleSubmit}>
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

        <Button
          type="submit"
          className="self-end p-7 bg-yellow-600 hover:bg-yellow-700 rounded-none text-gray-700 font-semibold text-lg cursor-pointer"
        >
          Update Reservation
        </Button>
      </form>
    </div>
  );
}
