'use client';

import { Button } from '@/components/ui/button';
import { Room } from '@/db/schema';
import { updateBooking } from '@/lib/actions';
import { usePathname } from 'next/navigation';
import { useFormStatus } from 'react-dom';

export default function UpdateReservationForm({ room }: { room: Room }) {
  const pathname = usePathname();
  const splittedPathname = pathname.split('/');
  const bookingId = splittedPathname[4];

  return (
    <div className="text-white font-semibold text-lg bg-slate-800">
      <form className="px-12 py-6 flex flex-col gap-4" action={updateBooking}>
        <div>
          <label htmlFor="guest" className="block mb-1">
            How many guests?
          </label>
          <select
            name="guest"
            className="w-full bg-slate-300 text-slate-900 px-4 py-2"
          >
            {Array.from({ length: room.capacity }).map((_, idx) => (
              <option key={idx + 1}>{idx + 1}</option>
            ))}
          </select>
        </div>
        <input type="hidden" name="bookingId" value={bookingId} />
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

        <UpdateButton />
      </form>
    </div>
  );
}

function UpdateButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={`${
        pending
          ? 'cursor-not-allowed bg-yellow-800'
          : 'bg-yellow-600 hover:bg-yellow-700 cursor-pointer'
      } self-end p-7  rounded-none text-gray-700 font-semibold text-lg `}
    >
      {pending ? 'Updating..' : 'Update Reservation'}
    </Button>
  );
}
