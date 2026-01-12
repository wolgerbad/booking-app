import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto py-8 flex justify-between text-xl text-gray-100 backdrop-blur-sm border-b border-gray-800 bg-transparent">
      <div className="flex items-center gap-4">
        {/* <img src="" alt="" /> */}

        <Link href="/">App name</Link>
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
