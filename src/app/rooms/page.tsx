import RoomList from '@/components/room-list';
import { getRooms } from '@/lib/room';
import RoomFilterPicker from './room-filter-picker';

export const metadata = {
  title: 'Aurora - Luxury Rooms',
  description:
    "Cozy yet luxurious rooms, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending your days exploring the dark forests around, or just relaxing in your private hot tub under the stars. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise.",
};

export default async function RoomsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter: string }>;
}) {
  const filter = (await searchParams).filter;

  const rooms = await getRooms();
  if ('error' in rooms)
    return (
      <div className="text-red-500 font-semibold text-3xl">{rooms.error}</div>
    );

  const filterRooms = () => {
    if (!filter) return rooms;
    if (filter === 'all') return rooms;
    else if (filter === 'sm')
      return rooms.filter((room) => room.capacity < 4 && room.capacity > 1);
    else if (filter === 'md')
      return rooms.filter((room) => room.capacity < 7 && room.capacity > 3);
    else if (filter === 'lg')
      return rooms.filter((room) => room.capacity < 9 && room.capacity > 6);

    return rooms;
  };

  const filteredRooms = filterRooms();

  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto mt-12 text-slate-300 px-6 sm:px-4 md:px-2 2xl:px-0">
      <div>
        <h3 className="mb-4 text-yellow-600 text-3xl font-semibold tracking-wide">
          Our Luxury Rooms
        </h3>
        <p className="font-medium text-lg">
          Cozy yet luxurious rooms, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature&apos;s beauty in your
          own little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>
      </div>

      <RoomFilterPicker />

      <div>
        <RoomList rooms={filteredRooms} />
      </div>
    </div>
  );
}
