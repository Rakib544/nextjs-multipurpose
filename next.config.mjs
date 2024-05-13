import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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
      {
        hostname: "assets-global.website-files.com",
        protocol: "https",
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
