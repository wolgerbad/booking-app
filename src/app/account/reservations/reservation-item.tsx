import { Booking, Room } from '@/db/schema';
import { Reservation } from './reservation-list';
import Image from 'next/image';
import { differenceInDays, format } from 'date-fns';

export default function ReservationItem({
  reservation,
}: {
  reservation: Reservation;
}) {
  const totalNights = differenceInDays(
    reservation.end_date,
    reservation.start_date
  );
  const formattedStartDate = format(reservation.start_date, 'eee, MMM dd yyyy');
  const formattedEndDate = format(reservation.end_date, 'eee, MMM dd yyyy');

  const totalPrice = totalNights * Number(reservation.room_price);

  return (
    <div className="flex border border-gray-800">
      <div className="border-r border-gray-800 h-full">
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
            <h2 className="text-lg font-semibold">
              {totalNights} nights in {reservation.room_name}
            </h2>
            <span>{reservation.status}</span>
          </div>
          <div className="font-semibold text-slate-400 text-md">
            <span>{formattedStartDate} - </span>
            <span>{formattedEndDate}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-yellow-500 text-lg font-semibold">
            ${totalPrice}
          </h3>
          <span className="text-slate-500 text-sm">created at</span>
        </div>
      </div>
      <div className="flex flex-col">
        <button className="flex-1 px-8 py-4 text-slate-500 font-semibold hover:bg-yellow-500 border-l border-b border-gray-800">
          Edit
        </button>
        <button className="flex-1 px-8 py-4 text-slate-500 font-semibold hover:bg-yellow-500 border-l border-gray-800">
          Delete
        </button>
      </div>
    </div>
  );
}
