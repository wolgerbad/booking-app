import RoomList from '@/components/room-list';
import { getRooms } from '@/lib/room';
import RoomFilterPicker from './room-filter-picker';

export default async function RoomsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter: string }>;
}) {
  const filter = (await searchParams).filter;

  console.log('filter', filter);
  const rooms = await getRooms();

  function filterRooms() {
    if (!filter) return rooms;
    if (filter === 'all') return rooms;
    else if (filter === 'sm')
      return rooms.filter((room) => room.capacity < 4 && room.capacity > 1);
    else if (filter === 'md')
      return rooms.filter((room) => room.capacity < 7 && room.capacity > 3);
    else if (filter === 'lg')
      return rooms.filter((room) => room.capacity < 9 && room.capacity > 6);
  }

  const filteredRooms = filterRooms();

  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto mt-12 text-slate-300 ">
      <div>
        <h3 className="mb-4 text-yellow-500 text-3xl font-semibold tracking-wide">
          Our Luxury Cabins
        </h3>
        <p className="font-medium text-lg">
          Cozy yet luxurious cabins, located right in the heart of the Italian
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
