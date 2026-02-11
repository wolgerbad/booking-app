'use client';

import { Reservation } from './reservation-list';
import Image from 'next/image';
import { differenceInDays, format, isAfter, isBefore } from 'date-fns';
import Link from 'next/link';
import { deleteBooking } from '@/lib/actions';
import { useFormStatus } from 'react-dom';

export default function ReservationItem({
  reservation,
}: {
  reservation: Reservation;
}) {
  const createdAt = format(reservation.created_at, 'eee, MMM d yyyy, h:m a');

  const totalNights = differenceInDays(
    reservation.end_date,
    reservation.start_date
  );
  const formattedStartDate = format(reservation.start_date, 'eee, MMM dd yyyy');
  const formattedEndDate = format(reservation.end_date, 'eee, MMM dd yyyy');

  const isPast = isBefore(reservation.start_date, new Date())

  const totalPrice = totalNights * Number(reservation.room_price);

  return (
    <div className="flex border border-gray-800">
      <div className="hidden lg:block border-r border-gray-800 h-full">
        <Image
          src={reservation.image}
          width={100}
          height={100}
          className="h-full"
          alt={reservation.room_name}
        />
      </div>
      <div className="flex-1 flex flex-col px-4 py-2">
        <div className="flex-1">
          <div className="flex justify-between text-white">
            <h2 className="text-base sm:text-lg font-semibold">
              {totalNights} nights in {reservation.room_name}
            </h2>
            <span
              className={`hidden lg:block ${
                !isPast
                  ? 'bg-green-600 text-green-200'
                  : 'bg-red-600 text-red-200'
              } uppercase px-2 py-1 text-sm font-black rounded-xs`}
            >
              {isPast ? 'Past' : 'Upcoming'}
            </span>
          </div>
          <div className="font-semibold text-slate-400 text-sm sm:text-base ">
            <span>{formattedStartDate} - </span>
            <span>{formattedEndDate}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-base sm:text-lg">
            <span className="text-yellow-500 font-semibold">
              ${totalPrice}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-400 ">{reservation.guest} guest</span>
          </div>
          <span className="text-slate-500 text-sm font-semibold hidden lg:block">
            {createdAt}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
       {!isPast && <Link
          href={`/account/reservations/edit/${reservation.id}`}
          prefetch
          className="flex justify-center gap-1 items-center flex-1 px-8 py-4 text-slate-500 font-semibold hover:bg-yellow-600 border-l border-b border-gray-800"
        >
          Edit
        </Link>}
        <form action={deleteBooking} className='flex-1'>
          <input type="hidden" value={reservation.id} name="bookingId" />
          <DeleteButton />
        </form>
      </div>
    </div>
  );
}

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`${
        pending
          ? 'bg-yellow-800 cursor-not-allowed'
          : 'hover:bg-yellow-600 cursor-pointer'
      }  h-full px-8 py-4 text-slate-500 font-semibold  border-l border-gray-800`}
    >
      {pending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
