import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // NOTE: Custom Turbopack loader disabled due to compatibility issues with Next.js 16
  // It causes "Is a directory (os error 21)" errors when trying to read src/app
  // TODO: Re-enable when Next.js 16 Turbopack loader compatibility is fixed
  // turbopack: {
  //   rules: {
  //     "*.{jsx,tsx}": {
  //       loaders: [LOADER]
  //     }
  //   }
  // }
};

export default nextConfig;
// Orchids restart: 1769046476075