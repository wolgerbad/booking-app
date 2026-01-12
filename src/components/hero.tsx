import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-8xl text-gray-200 ">Welcome to paradise.</h2>
      <Link
        href="/rooms"
        className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-lg font-medium  text-gray-800"
      >
        Explore luxury cabins
      </Link>
    </div>
  );
}
