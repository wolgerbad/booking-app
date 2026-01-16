'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function RoomFilterPicker() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');

  console.log(filter);

  return (
    <div className="flex self-end border border-gray-800 font-medium">
      <Link
        href="/rooms?filter=all"
        className={`${
          filter === 'all' || !filter ? 'bg-gray-700' : ''
        } px-4 py-2 hover:bg-gray-700`}
      >
        All cabins
      </Link>
      <Link
        href="/rooms?filter=sm"
        className={`${
          filter === 'sm' ? 'bg-gray-700' : ''
        } px-4 py-2 hover:bg-gray-700`}
      >
        2 - 3 guests
      </Link>
      <Link
        href="/rooms?filter=md"
        className={`${
          filter === 'md' ? 'bg-gray-700' : ''
        } px-4 py-2 hover:bg-gray-700`}
      >
        4 - 6 guests
      </Link>
      <Link
        href="/rooms?filter=lg"
        className={`${
          filter === 'lg' ? 'bg-gray-700' : ''
        } px-4 py-2 hover:bg-gray-700`}
      >
        7 - 8 guests
      </Link>
    </div>
  );
}
