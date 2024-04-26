import { BlogCard2 } from "@/components/blog-card/index";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import SearchField from "@/components/search-field";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import { blogsData, categories, tags } from "@/lib/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Blogs3() {
  return (
    <div>
      <Container>
        <PageIntro eyebrow="Blogs" pageTitle="Insights & Trends">
          <p>
            Explore Our Latest Articles on UI/UX Design, Digital Trends, and
            Innovation
          </p>
        </PageIntro>
      </Container>
      <Container className="my-20 md:mt-20 md:mb-32">
        <FadeInStagger faster className="grid grid-cols-12 gap-y-8 lg:gap-x-12">
          <FadeIn className="col-span-12 lg:col-span-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-8">
              {blogsData.slice(0, 6).map((blog, index) => (
                <BlogCard2
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
              <h2 className="font-bold text-indigo-950 mb-2">Search Here</h2>

              <Suspense>
                <SearchField
                  className="rounded-full"
                  type="search"
                  placeholder="Search"
                />
              </Suspense>
            </div>

            <div className="bg-white pr-5 rounded-lg hidden lg:block">
              <h2 className="font-bold text-indigo-950 mb-2">Popular Posts</h2>
              <div className="space-y-3">
                {blogsData.slice(0, 3).map((blog, index) => (
                  <Link
                    href="/blog-details"
                    className="grid grid-cols-12 gap-x-2 group"
                    key={index}
                  >
                    <div className="col-span-4 aspect-video relative overflow-hidden rounded">
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                        fill
                      />
                    </div>
                    <div className="col-span-8">
                      <time className="text-xs font-medium text-gray-600">
                        {new Date(blog.createdAt).toDateString()}
                      </time>
                      <h3 className="font-bold hover:text-indigo-600 text-sm text-indigo-950 line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white pr-5 rounded-lg hidden lg:block">
              <h2 className="font-bold text-indigo-950 mb-2">Categories</h2>
              <ul className="list-disc list-inside text-base space-y-2 font-medium text-gray-600">
                {categories.slice(0, 6).map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`?category=${category.slug}`}
                      className="hover:text-indigo-600"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white pr-5 rounded-lg">
              <h2 className="font-bold text-indigo-950 mb-2">Tags</h2>
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
