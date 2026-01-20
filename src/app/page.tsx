import Hero from '@/components/hero';

import Image from 'next/image';

export const metadata = {
  title: 'Aurora - Welcome to paradise',
  description: 'Aurora is a booking application for luxury rooms.',
};

export default async function Home() {
  return (
    <div className="mt-20 lg:mt-40 px-4 sm:px-6 md:px-8 ">
      <Image
        width={1920}
        height={1080}
        className="fixed inset-0 w-full -z-10 object-cover h-full"
        quality={100}
        src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/image%20bucket/bg.webp"
        alt="Application Main View"
      />

      <div className="flex justify-center">
        <Hero />
      </div>
    </div>
  );
}
