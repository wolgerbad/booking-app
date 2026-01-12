import RoomList from '@/components/room-list';
import { getRooms } from '@/lib/room';

export default async function RoomsPage() {
  const rooms = await getRooms();

  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto mt-12 text-gray-300 ">
      <div>
        <h3 className="mb-4 text-yellow-600 text-3xl">Our Luxury Cabins</h3>
        <p className="font-medium text-lg">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature&apos;s beauty in your
          own little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>
      </div>

      <div className="flex self-end border border-gray-800 font-medium">
        <button className="px-4 py-2 hover:bg-gray-700">All cabins</button>
        <button className="px-4 py-2 hover:bg-gray-700">2-3 guests</button>
        <button className="px-4 py-2 hover:bg-gray-700">4-6 guests</button>
        <button className="px-4 py-2 hover:bg-gray-700">7-8 guests</button>
      </div>

      <div>
        <RoomList rooms={rooms} />
      </div>
    </div>
  );
}
