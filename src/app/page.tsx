import Hero from '@/components/hero';
import { getBookedDates } from '@/lib/booking';
import { startOfDay } from 'date-fns';
import Image from 'next/image';

export default async function Home() {
  return (
    <div className="mt-40">
      <Image
        width={1920}
        height={1080}
        className="fixed inset-0 w-full -z-10 object-contain"
        quality={100}
        src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/image%20bucket/bg.webp"
        alt="Application Main View"
      />

      <div>
        <Hero />
      </div>
    </div>
  );
}
