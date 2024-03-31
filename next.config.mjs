/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "fxotary.netlify.app",
        protocol: "https",
      },
      {
        hostname: "vue.hibotheme.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
