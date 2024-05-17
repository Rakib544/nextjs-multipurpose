import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { ArrowRight } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import SearchField from "@/components/search-field";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import { blogsData, categories, tags } from "@/lib/data/blog-data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Blogs1() {
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
      <Container className="my-20">
        <FadeInStagger faster className="grid grid-cols-12 gap-y-8 lg:gap-x-12">
          <FadeIn className="col-span-12 lg:col-span-4 space-y-8">
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
                      <time className="text-xs font-medium text-muted-foreground">
                        {new Date(blog.createdAt).toDateString()}
                      </time>
                      <h3 className="font-bold hover:text-primary text-sm text-foreground line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </Link>
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
          <FadeIn className="col-span-12 lg:col-span-8">
            <div className="space-y-8">
              {blogsData.map((blog, index) => (
                <div
                  className="grid grid-cols-12 gap-y-4 md:gap-x-12 p-4 lg:p-10 bg-slate-50 rounded-xl hover:bg-slate-100"
                  key={index}
                >
                  <div className="col-span-12 md:col-span-8 order-2 md:order-1 max-w-xl">
                    <p className=" mt-4 mb-2 text-sm text-muted-foreground font-medium">
                      {new Date(blog.createdAt).toDateString()}
                    </p>
                    <Link href="/blog-details" className="">
                      <h2 className="text-2xl mt-6 font-extrabold tracking-tight transition duration-300 text-foreground line-clamp-2 hover:text-primary">
                        {blog.title}
                      </h2>
                    </Link>
                    <p className="mt-3 text-base text-muted-foreground line-clamp-2 leading-7 ">
                      {blog.subtitle}
                    </p>
                    <Link
                      href=""
                      className={buttonVariants({
                        variant: "link",
                        className: "!px-0 mt-4",
                      })}
                    >
                      Read More <ArrowRight className="size-4 ml-1" />
                    </Link>
                  </div>
                  <div className="col-span-12 md:col-span-4 order-1 md:order-2">
                    <div className="aspect-square relative rounded-2xl overflow-hidden">
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-20">
              <Pagination perPageItems={5} totalItems={100} />
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  );
}
