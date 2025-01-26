/** @type {import('next').NextConfig} */
const nextConfig =  {
  images: {
      domains: ['template-03-api.vercel.app',"cdn.sanity.io"], // Add the domain of the external image
    },
};

export default nextConfig;
