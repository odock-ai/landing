import type { NextConfig } from "next";

/**
 * Allow separate deploy targets:
 * - GitHub Pages (served from /landing under odock-ai.github.io)
 * - Custom domain (odock.ai) served from the root
 *
 * Set NEXT_PUBLIC_DEPLOY_TARGET to "odock-ai" for the custom domain;
 * default is GitHub Pages.
 */
const isProd = process.env.NODE_ENV === "production";
const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET ?? "github-pages";
const repoName = "landing";

const isGhPages = isProd && deployTarget === "github-pages";
const isOdockAi = isProd && deployTarget === "odock-ai";

const nextConfig: NextConfig = {
  basePath: isGhPages ? `/${repoName}` : "",
  assetPrefix: isGhPages
    ? `https://odock-ai.github.io/${repoName}`
    : isOdockAi
      ? "https://odock.ai"
      : undefined,
};

export default nextConfig;
