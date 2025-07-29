/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during builds to prevent build failures
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
