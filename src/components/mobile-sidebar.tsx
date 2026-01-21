'use client';

import Link from 'next/link';
import { FaArrowDown, FaArrowUp, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { MdCabin } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { logout } from '@/app/(auth)/actions';

interface MobileSidebarProps {
  onClose?: () => void;
}

export default function MobileSidebar({ onClose }: MobileSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="fixed inset-0 z-40 lg:hidden" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div
        className="absolute left-0 top-20 bottom-0 w-64 flex flex-col gap-6 px-4 py-6 bg-slate-900/95 backdrop-blur-xl border-r border-gray-700 shadow-2xl animate-in slide-in-from-left-full duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 flex flex-col gap-3">

            <Link
              href='/rooms'
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xl transition-all duration-200 ${
                isActive('/rooms')
                  ? 'bg-slate-500/20 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-gray-100'
              }`}
            >
              <MdCabin className="text-xl" />
              <span className="font-semibold h-full">Rooms</span>
            </Link>
            <Link
              href='/about'
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-xl duration-200 ${
                isActive('/about')
                  ? 'bg-slate-500/20 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-gray-100'
              }`}
            >
              <FaUsers className="text-xl" />
              <span className="font-semibold h-full">About</span>
            </Link>
            <div
              onClick={() => setShowMore(prev => !prev)}
              className='flex items-center text-xl gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-slate-400 hover:bg-slate-800 hover:text-gray-100'
            >
              <FaUsers className="text-xl" />
              <span className="font-semibold h-full flex-1">Guest room</span>
              
              {!showMore && <FaArrowDown />}
              {showMore && <FaArrowUp />}
              
            </div>
            {showMore && <div>
                <Link href='/account/reservations' onClick={onClose} className={`flex text-xl items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/account/reservations')
                  ? 'bg-slate-500/20 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-gray-100'
              }`}>Reservations</Link>
                <Link href='/account/profile' onClick={onClose} className={`flex text-xl items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/account/profile')
                  ? 'bg-slate-500/20 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-gray-100'
              }`}>Profile</Link>
            </div>}

        </div>

        <div className="border-t border-gray-700 pt-4">
          <form action={logout} className='w-full'>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200">
            <FaSignOutAlt className="text-xl" />
            <span className="font-semibold">Sign out</span>
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
