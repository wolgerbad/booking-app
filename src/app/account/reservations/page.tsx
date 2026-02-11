import { getBookings } from '@/lib/booking';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { FaArrowRightLong } from 'react-icons/fa6';
import ReservationList from './reservation-list';
import Link from 'next/link';

export const metadata = {
  title: 'Aurora - Reservations',
};

export const revalidate = 3600;

export default async function Page() {
  const session = await getSession();

  if (!session) redirect('/login');

  const reservations = await getBookings(session.payload.userId);

  return (
    <div>
      <h3 className="text-yellow-500 text-2xl font-semibold mb-6">
        Your reservations
      </h3>
      {!reservations.length && (
        <div className="flex gap-2  text-slate-400 text-xl">
          {' '}
          <h3>You have no reservations yet. Go checkout our </h3>{' '}
          <Link
            href="/rooms"
            prefetch
            className="flex items-center gap-2 text-yellow-600 underline"
          >
            <span>luxury rooms</span>
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      )}
      <ReservationList reservations={reservations} />
    </div>
  );
}
