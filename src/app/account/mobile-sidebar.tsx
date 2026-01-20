'use client';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import Sidebar from './sidebar';

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden flex items-center justify-center h-10 w-10 hover:bg-slate-800/50 rounded-lg transition-colors duration-200 text-gray-400 hover:text-gray-200"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Sidebar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-64 bg-slate-900/95 backdrop-blur-xl border-r border-gray-700 shadow-2xl animate-in slide-in-from-left-full duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
}
