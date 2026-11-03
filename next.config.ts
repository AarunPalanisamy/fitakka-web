import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // The APK is too large for the git repo, so it lives in Vercel Blob
        // and is served from our own domain via this rewrite.
        source: "/fitakka.apk",
        destination: "https://0ftwrdzvtbcpii1b.public.blob.vercel-storage.com/fitakka.apk",
      },
    ];
  },
};

export default nextConfig;
