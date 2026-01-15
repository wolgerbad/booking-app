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
import { DateRangePicker } from '@/components/date-range-picker';
import { getSession } from '@/lib/session';
import DateContainer from '@/components/date-container';
import { Button } from '@/components/ui/button';
import ReservationForm from './reservation-form';
import { startOfDay } from 'date-fns';
import { getBookedDates } from '@/lib/booking';

export default async function RoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const bookedDates = await getBookedDates();
  const alteredBookedDates = bookedDates.map((date) => ({
    from: startOfDay(new Date(date.from)),
    to: startOfDay(new Date(date.to)),
  }));

  const session = await getSession();

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

      <div className="grid grid-cols-3">
        <div className="border border-gray-800 col-start-1 col-span-1">
          <div className="relative w-full h-[500px] sm:h-[600px]">
            <Image
              src={room.image}
              alt="Luxury Cabin"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="col-start-2 col-span-full flex flex-col">
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
          <div className="flex-1 border border-gray-800  p-6">
            <div className="">
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
                amenities while maintaining a rustic charm that connects you
                with nature.
              </p>
            </div>
            <div className="mt-4">
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
        </div>
      </div>

      <div className="grid grid-cols-2 mt-12">
        <div>
          <DateContainer bookedDates={alteredBookedDates} />
        </div>
        {session?.error ? (
          <div className="flex justify-center items-center bg-slate-700 text-white font-semibold text-xl">
            <span>
              You must{' '}
              <Link className="text-yellow-600 underline" href="/login">
                login
              </Link>{' '}
              to reserve the cabin.
            </span>
          </div>
        ) : (
          <ReservationForm room={room} user={session} />
        )}
      </div>
    </div>
  );
}
