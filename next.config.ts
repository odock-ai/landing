const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];

// Allow an explicit override via NEXT_PUBLIC_BASE_PATH; otherwise, on GitHub Actions
// we default to the repository name so project pages (e.g. /landing) resolve assets.
const resolvedBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  ((process.env.GITHUB_ACTIONS && repoName) ? `/${repoName}` : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: resolvedBasePath,
  assetPrefix: resolvedBasePath || undefined,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
