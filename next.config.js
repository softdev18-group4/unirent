/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "as2.ftcdn.net",
        port: "",
        pathname: "/v2/jpg/**",
      },
    ],
  },
};

module.exports = nextConfig;
