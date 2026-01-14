import { getBookings } from '@/lib/booking';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import ReservationList from './reservation-list';

export default async function Page() {
  const session = await getSession();

  if (session?.error) redirect('/login');

  const reservations = await getBookings(session.id);

  console.log('reservations', reservations);
  return (
    <div>
      <h3 className="text-yellow-500 text-2xl font-semibold mb-6">
        Your reservations
      </h3>
      <ReservationList reservations={reservations} />
    </div>
  );
}
