import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photos de démonstration servies depuis Unsplash.
    // ⚠️ Placeholders : remplacez-les par vos propres photos (voir lib/site.ts).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        // Miniatures YouTube (chaîne + réalisations).
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
