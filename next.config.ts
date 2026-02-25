import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/**'
      ),
    ],
    qualities: [75, 100]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
