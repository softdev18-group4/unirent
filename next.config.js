/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  rewrites() {
    return [
      {
        source: '/api/services/:path*',
        destination: 'https://api-unirent.1tpp.dev/:path*',
        // destination: 'http://localhost:6060/:path*',
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