import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "api.codingthailand.com"},
    ]
  }
};

export default nextConfig;
