'use client';

import Link from 'next/link';

export default function RoomFilterPicker() {
  return (
    <div className="flex self-end border border-gray-800 font-medium">
      <Link href="/rooms?filter=all" className="px-4 py-2 hover:bg-gray-700">
        All cabins
      </Link>
      <Link href="/rooms?filter=sm" className="px-4 py-2 hover:bg-gray-700">
        2-3 guests
      </Link>
      <Link href="/rooms?filter=md" className="px-4 py-2 hover:bg-gray-700">
        4-6 guests
      </Link>
      <Link href="/rooms?filter=lg" className="px-4 py-2 hover:bg-gray-700">
        7-8 guests
      </Link>
    </div>
  );
}
