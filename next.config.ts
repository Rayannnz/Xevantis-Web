import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The static build (index.html / design-system.html) and the Next app share
  // the same assets/ folder. Keeping images out of public/ means they are
  // imported as modules, so they get hashed, sized and optimised by next/image
  // rather than being copied.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
