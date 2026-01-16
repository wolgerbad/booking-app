import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Page() {
  return (
    <div className="flex items-center flex-col gap-4 mt-12">
      <h3 className="text-slate-300 text-4xl font-semibold">
        Thank you for your reservation!
      </h3>
      <Link
        href="/account/reservations"
        className="flex gap-2 items-center text-yellow-600"
      >
        <span className="font-semibold text-xl underline">
          Manage your reservations
        </span>
        <span>
          <FaArrowRightLong />
        </span>
      </Link>
    </div>
  );
}
