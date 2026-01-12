import Hero from '@/components/hero';
import { whatever } from './(auth)/actions';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mt-32">
      <Image
        width={500}
        height={500}
        className="fixed inset-0 w-full -z-10 object-cover"
        src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/image%20bucket/Gemini_Generated_Image_z3w8goz3w8goz3w8.png"
        alt="Application Main View"
      />

      <div>
        <Hero />
      </div>
    </div>
  );
}
