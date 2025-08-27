/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'gold-magpie-875699.hostingersite.com', // твоят WordPress домейн
      'images.unsplash.com',
    ],
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
