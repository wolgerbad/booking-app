'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={`px-32 w-full py-8 flex justify-between text-2xl text-gray-100 bg-transparent ${
        pathname !== '/' ? 'border-b border-gray-800' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        {/* <img src="" alt="" /> */}

        <Link href="/">The Aurora</Link>
      </div>
      <div className="flex items-center gap-12">
        <Link href="/rooms" className="hover:text-yellow-500">
          Rooms
        </Link>
        <Link href="/about" className="hover:text-yellow-500">
          About
        </Link>
        <Link href="/account" className="hover:text-yellow-500">
          Guest area
        </Link>
      </div>
    </nav>
  );
}
