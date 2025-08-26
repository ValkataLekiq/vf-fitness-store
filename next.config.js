`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Твоят WordPress (където са продуктите)
      { protocol: 'https', hostname: 'YOUR-WP-DOMAIN.com' },
      // Ако ползваш Jetpack/WordPress CDN (пример):
      { protocol: 'https', hostname: 'i0.wp.com' },

      // Unsplash (seed снимките)
      { protocol: 'https', hostname: 'images.unsplash.com' },

      // Алиекспрес често е тук:
      { protocol: 'https', hostname: 'ae01.alicdn.com' },
      { protocol: 'https', hostname: 'img.alicdn.com' },
    ],
    // Временно, ако искаш да прескочиш оптимизацията на Next Image:
    // unoptimized: true,
  },
  experimental: { serverActions: true },
};
module.exports = nextConfig;
`/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'gold-magpie-875699.hostingersite.com', // твоят WordPress домейн
    ],
  },
};

module.exports = nextConfig;
