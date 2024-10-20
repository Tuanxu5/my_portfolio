/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["package-name"],
  experimental: {
    optimizePackageImports: ["icon-library"]
  },
  images: {
    domains: ["assets.aceternity.com", "cdn.dribbble.com"],
    unoptimized: true
  },
  output: "export"
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(nextConfig);
