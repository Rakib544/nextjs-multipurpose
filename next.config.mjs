/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
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
      {
        hostname: "sandbox.ui-lib.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
