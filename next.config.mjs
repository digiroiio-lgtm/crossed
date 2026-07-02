/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/user-attachments/**",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
