import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "cdn.sanity.io"},
    ],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
