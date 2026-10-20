import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: lets a phone on the same Wi-Fi load the dev server's scripts
  // (otherwise the page never hydrates). Update if the Mac's LAN IP changes.
  allowedDevOrigins: ["192.168.15.11"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // TEMPORARY placeholder photography — swap for Conatus assets at launch.
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
