import { BlogCard1, BlogCard2 } from "@/components/blog-cards";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
const SearchField = dynamic(() => import("@/components/search-field"), {
  ssr: false,
});

import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import { blogsData, categories, tags } from "@/lib/data/blog-data";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Blogs3() {
  return (
    <div>
      <Container>
        <PageIntro
          className="max-w-xl"
          eyebrow="Blogs"
          pageTitle="Take a look at the latest news and articles"
        >
          <p>
            Explore our latest articles on UI/UX design, digital trends, and
            innovation
          </p>
        </PageIntro>
      </Container>
      <Container className="my-20 md:mt-20 md:mb-32">
        <FadeInStagger faster className="grid grid-cols-12 gap-y-8 lg:gap-x-12">
          <FadeIn className="col-span-12 lg:col-span-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 gap-y-8">
              {blogsData.slice(0, 6).map((blog, index) => (
                <BlogCard1
                  key={index}
                  createdAt={blog.createdAt}
                  subtitle={blog.subtitle}
                  title={blog.title}
                  thumbnail={blog.thumbnail}
                />
              ))}
            </div>
            <div className="flex justify-center mt-20">
              <Pagination perPageItems={5} totalItems={100} />
            </div>
          </FadeIn>
          <FadeIn className="col-span-12 lg:col-span-4 space-y-8 order-1 lg:order-2">
            <div className="bg-white pr-5 rounded-lg">
              <h2 className="font-bold text-foreground mb-2">Search Here</h2>

              <Suspense>
                <SearchField
                  className="rounded-full"
                  type="search"
                  placeholder="Search"
                />
              </Suspense>
            </div>

            <div className="bg-white pr-5 rounded-lg hidden lg:block">
              <h2 className="font-bold text-foreground mb-2">Popular Posts</h2>
              <div className="space-y-3">
                {blogsData.slice(0, 3).map((blog, index) => (
                  <BlogCard2
                    key={index}
                    title={blog.title}
                    thumbnail={blog.thumbnail}
                    subtitle={blog.subtitle}
                    createdAt={blog.createdAt}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white pr-5 rounded-lg hidden lg:block">
              <h2 className="font-bold text-foreground mb-2">Categories</h2>
              <ul className="list-disc list-inside text-base space-y-2 font-medium text-muted-foreground">
                {categories.slice(0, 6).map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`?category=${category.slug}`}
                      className="hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white pr-5 rounded-lg">
              <h2 className="font-bold text-foreground mb-2">Tags</h2>
              <ul className="flex flex-wrap gap-2">
                {tags.slice(0, 5).map((tag, index) => (
                  <li key={index}>
                    <Link
                      href={`?tag=${tag.slug}`}
                      className={buttonVariants({ variant: "secondary" })}
                    >
                      #{tag.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  );
}
