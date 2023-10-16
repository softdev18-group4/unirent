/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  rewrites() {
    return [
      {
        source: '/api/services/:path*',
        destination: 'https://api-unirent.1tpp.dev/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage-unirent.1tpp.dev',
        port: '',
        pathname: '/unirent/**',
      },
    ],
  },
};

module.exports = nextConfig;