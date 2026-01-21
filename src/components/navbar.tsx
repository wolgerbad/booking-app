'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import MobileSidebar from './mobile-sidebar';

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`w-full max-w-7xl mx-auto px-4 py-8 flex justify-between items-center text-2xl text-gray-100 bg-transparent ${
          pathname !== '/' ? 'border-b border-gray-800' : ''
        }`}
      >
        <div className="flex items-center gap-4">
          {/* <img src="" alt="" /> */}
          <button
            className="lg:hidden h-8 w-8 flex justify-center hover:bg-slate-800/50 rounded-lg transition-colors duration-200 text-gray-300 hover:text-gray-100"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
          </button>
          <Link
            href="/"
            className="hover:text-yellow-500 transition-colors duration-200"
            prefetch
          >
            The Aurora
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <Link
            href="/rooms"
            className="hover:text-yellow-500 hidden lg:block transition-colors duration-200"
            prefetch
          >
            Rooms
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-500 hidden lg:block transition-colors duration-200"
            prefetch
          >
            About
          </Link>
          <Link
            href="/account"
            className="hover:text-yellow-500 hidden lg:block transition-colors duration-200"
            prefetch
          >
            Guest area
          </Link>
        </div>
      </nav>
      {isOpen && <MobileSidebar onClose={handleClose} />}
    </>
  );
}
