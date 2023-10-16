/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage-unirent.1tpp.dev",
        port: "",
        pathname: "/unirent/**",
      },
    ],
  },
};

module.exports = nextConfig;
