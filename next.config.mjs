/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Keep images simple and compatible across hosts (including Vercel)
    unoptimized: true,
  },
};

export default nextConfig;
