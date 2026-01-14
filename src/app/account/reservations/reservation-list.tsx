import { Booking, Room } from '@/db/schema';
import ReservationItem from './reservation-item';

export type Reservation = {
  id: number;
  room_name: string;
  additional_note?: string;
  status: string;
  start_date: string;
  end_date: string;
  image: string;
  room_price: string;
};
export default function ReservationList({
  reservations,
}: {
  reservations: Reservation[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {reservations.map((reservation) => (
        <ReservationItem key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
}
