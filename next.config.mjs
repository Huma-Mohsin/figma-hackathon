/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["template-03-api.vercel.app", "cdn.sanity.io"], // Allow external images
  },
  experimental: {
    middlewarePrefetch: "strict", // Ensures middleware runs correctly
  },
};

export default nextConfig;
