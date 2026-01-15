import { getRoom } from '@/lib/room';
import UpdateReservationForm from './update-reservation-form';
import { getBooking } from '@/lib/booking';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ reservationId: string }>;
}) {
  const reservationId = await (await params).reservationId;

  const booking = await getBooking(+reservationId);

  if (booking?.error)
    return (
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center text-slate-200 font-medium text-lg">
          {booking.error}
        </h2>
        <Link
          href="/rooms"
          className="px-6 py-4 bg-yellow-600 hover:bg-yellow-700 font-semibold text-gray-800 text-lg"
        >
          Go checkout our rooms
        </Link>
      </div>
    );
  console.log('booking', booking);
  const room = await getRoom(booking.room_id);

  return (
    <div>
      <h3 className="text-xl text-yellow-600 font-semibold mb-6">
        Edit Reservation #{reservationId}
      </h3>
      <UpdateReservationForm room={room} />
    </div>
  );
}
