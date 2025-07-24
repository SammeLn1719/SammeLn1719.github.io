import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: isGithubPages ? '/SammeLn1719.github.io/sammeln-portfolio/' : undefined,
  basePath: isGithubPages ? '/SammeLn1719.github.io/sammeln-portfolio' : undefined,
};

export default nextConfig;
