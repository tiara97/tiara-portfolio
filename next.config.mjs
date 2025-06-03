/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/tiara-portfolio" : "", // Replace with your repo name
  assetPrefix: isProd ? "/tiara-portfolio" : "",
  output: "export", // <=== enables static exports
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
