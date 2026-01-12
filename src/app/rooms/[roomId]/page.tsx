import Image from 'next/image';
import {
  FaHouseUser,
  FaWifi,
  FaCar,
  FaUtensils,
  FaHotTub,
} from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';
import { getRoom } from '@/lib/room';

export default async function RoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const roomId = (await params).roomId;

  const room = await getRoom(+roomId);

  if (!room) return;

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
      {/* Back Button */}
      <Link
        href="/rooms"
        className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-600 transition-colors mb-8"
      >
        <FaArrowLeft />
        <span>Back to all cabins</span>
      </Link>

      {/* Hero Image Section */}
      <div className="mb-12 border border-gray-800">
        <div className="relative w-full h-[500px] sm:h-[600px]">
          <Image
            src={room.image}
            alt="Luxury Cabin"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="border border-gray-800 p-6">
            <h1 className="text-yellow-600 text-4xl font-semibold tracking-wide mb-4">
              {room.name}
            </h1>
            <div className="flex items-center gap-4 text-gray-300 mb-4">
              <div className="flex items-center gap-2">
                <FaHouseUser className="text-blue-100/40" />
                <span>For up to {room.capacity} guests</span>
              </div>
              <span className="text-xl">•</span>
              <span>${room.price} / Night</span>
            </div>
          </div>

          <div className="border border-gray-800 p-6">
            <h2 className="text-yellow-600 text-2xl font-semibold mb-4">
              About this cabin
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {room.description}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Wake up to breathtaking sunrise views, spend your days exploring
              the dark forests and mountain trails, or simply relax in your
              private hot tub under the stars. The cabin features modern
              amenities while maintaining a rustic charm that connects you with
              nature.
            </p>
          </div>

          <div className="border border-gray-800 p-6">
            <h2 className="text-yellow-600 text-2xl font-semibold mb-6">
              Amenities
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 text-gray-300">
                <FaWifi className="text-yellow-600 text-xl" />
                <span>Free WiFi</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaHotTub className="text-yellow-600 text-xl" />
                <span>Private Hot Tub</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaCar className="text-yellow-600 text-xl" />
                <span>Free Parking</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaUtensils className="text-yellow-600 text-xl" />
                <span>Full Kitchen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="border border-gray-800 sticky top-8">
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-semibold text-gray-200">
                  ${room.price}
                </span>
                <span className="text-gray-400">/ night</span>
              </div>
              <p className="text-gray-400 text-sm">Prices may vary by dates</p>
            </div>

            {/* Booking Form UI */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border border-gray-700 px-4 py-3 text-gray-300 focus:outline-none focus:border-yellow-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border border-gray-700 px-4 py-3 text-gray-300 focus:outline-none focus:border-yellow-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Guests
                </label>
                <select className="w-full bg-transparent border border-gray-700 px-4 py-3 text-gray-300 focus:outline-none focus:border-yellow-600">
                  {Array.from({ length: room.capacity }, (val, idx) => (
                    <option key={idx} value={idx + 1}>
                      {idx + 1} Guest
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>
                    ${room.price} x {room.capacity} nights
                  </span>
                  <span>${+room.price * room.capacity}</span>
                </div>
                <div className="flex justify-between text-gray-300 font-semibold text-lg pt-4 border-t border-gray-800">
                  <span>Total</span>
                  <span className="text-yellow-600">
                    ${+room.price * room.capacity}
                  </span>
                </div>
              </div>

              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-gray-800 font-medium py-4 px-6 transition-colors mt-6">
                Reserve
              </button>

              <p className="text-gray-400 text-xs text-center mt-4">
                You won&apos;t be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
