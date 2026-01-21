'use client';

import Link from 'next/link';
import { FaCalendar, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../(auth)/actions';
import { usePathname } from 'next/navigation';


export default function Sidebar() {
  const pathname = usePathname();

  return (

 <div className="flex flex-col justify-between h-full text-slate-400 border-r border-gray-800 font-semibold">
      <div className="flex flex-col gap-4">
        <Link
          href="/account"
          className={`${
            pathname === '/account' ? 'bg-slate-500/20' : ''
          } flex gap-4 items-center text-xl px-6 py-3 hover:bg-slate-500/20`}
          >
          <span>
            <FaHome />
          </span>
          <span>Home</span>
        </Link>
        <Link
          href="/account/reservations"
          className={`${
            pathname === '/account/reservations' ? 'bg-slate-500/20' : ''
          } flex gap-4 items-center text-xl px-6 py-3 hover:bg-slate-500/20`}
          >
          <span>
            <FaCalendar />
          </span>
          <span>Reservations</span>
        </Link>
        <Link
          href="/account/profile"
          className={`${
            pathname === '/account/profile' ? 'bg-slate-500/20' : ''
          } flex gap-4 items-center text-xl px-6 py-3 hover:bg-slate-500/20`}
          >
          <span>
            <FaHome />
          </span>
          <span>Guest profile</span>
        </Link>
      </div>
      <button
        onClick={logout}
        className="flex gap-4 items-center text-xl hover:bg-slate-500/20 px-6 py-3"
        >
        <span>
          <FaSignOutAlt />
        </span>
        <span>Sign out</span>
      </button>
    </div>

  );
}
