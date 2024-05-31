import createMDX from "@next/mdx";
import pwa from "next-pwa";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [],
  },
});

const withPWA = pwa({
  dest: "public",
});

// Merge MDX config with Next.js config
export default withPWA(withMDX(nextConfig));
