import { Room } from '@/db/schema';
import Image from 'next/image';
import Link from 'next/link';
import { FaHouseUser } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

type PropTypes = {
  room: Room;
};

export default function RoomItem({ room }: PropTypes) {
  return (
    <div className="grid md:grid-cols-3">
      <div className="col-start-1 col-span-1 border-l border-t border-b border-gray-800">
        <Image
          src={room.image}
          alt={room.name}
          width={500}
          height={500}
          className="max-h-40 md:h-full object-cover"
        />
      </div>
      <div className="col-start-2 col-span-full flex flex-col border border-gray-800">
        <div className="flex flex-col gap-5 p-6 flex-1">
          <h3 className="text-yellow-600 text-2xl font-semibold tracking-wide ">
            {room.name}
          </h3>
          <div className="flex items-center gap-4">
            <span className="text-xl text-blue-100/40">
              <FaHouseUser />
            </span>
            <p className="text-lg">For up to {room.capacity} guests</p>
          </div>
          <span className="self-end">
            <span className="text-2xl tracking-wide">${room.price} / </span>
            <span>night</span>
          </span>
        </div>
        <div className="grid grid-cols-2 border-t border-gray-800">
          <div className="border-r border-gray-800 px-4 py-2"></div>

          <Link
            href={`/rooms/${room.id}`}
            prefetch
            className="text-md flex items-center justify-center gap-2 text-center font-medium px-2 py-4 hover:bg-yellow-500 hover:text-gray-800 transition-all ease duration-200"
          >
            <span className="">Details & reservation</span>
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
