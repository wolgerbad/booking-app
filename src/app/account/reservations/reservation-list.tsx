import ReservationItem from './reservation-item';

export type Reservation = {
  id: number;
  start_date: string;
  end_date: string;
  status: string | null;
  additional_note: string | null;
  guest: number;
  created_at: string;
  room_name: string;
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
