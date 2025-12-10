/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // Github Pages served from https://odock-ai.github.io/landing
  basePath: "/landing",
  assetPrefix: "https://odock-ai.github.io/landing",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/landing",
    PAGES_BASE_PATH: "/landing",
  },
  
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
