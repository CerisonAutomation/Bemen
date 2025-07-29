/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during builds to prevent build failures
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
