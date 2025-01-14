import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/crediblues.github.io',
  // assetPrefix: '/crediblues.github.io',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;