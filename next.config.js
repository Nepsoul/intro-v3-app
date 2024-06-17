/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, //enable specific features related to server-side actions e.g. ssr data fetch
  },
};

module.exports = nextConfig;
