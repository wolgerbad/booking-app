import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-6xl md:text-6xl lg:text-8xl text-gray-200 text-center">
        Welcome to paradise.
      </h2>
      <Link
        href="/rooms"
        prefetch
        className="px-6 sm:px-8 py-4 sm:py-5 bg-yellow-600 hover:bg-yellow-700 text-base sm:text-lg font-medium text-gray-800"
      >
        Explore luxury rooms
      </Link>
    </div>
  );
}
