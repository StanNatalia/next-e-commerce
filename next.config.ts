import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.pexels.com",
    },
  ],
};

export default nextConfig;
