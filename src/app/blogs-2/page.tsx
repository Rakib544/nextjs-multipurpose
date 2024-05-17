import BlogCard from "@/components/blog-card";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { ArrowRight } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import { blogsData } from "@/lib/data/blog-data";
import Image from "next/image";
import Link from "next/link";

export default function Blogs2() {
  return (
    <div>
      <Container className="my-20">
        <FadeIn className="grid grid-cols-12 gap-y-4 md:gap-x-12 p-4 md:p-10 rounded-3xl bg-slate-50 hover:bg-slate-100 mb-20">
          <div className="col-span-12 md:col-span-8 order-2 md:order-1 max-w-xl">
            <p className=" mt-4 mb-2 text-sm text-muted-foreground font-medium">
              {new Date(blogsData[0].createdAt).toDateString()}
            </p>
            <Link href="/blog-details" className="">
              <h2 className="text-3xl mt-6 font-extrabold tracking-tight transition duration-300 text-foreground line-clamp-2 hover:text-primary">
                {blogsData[0].title}
              </h2>
            </Link>
            <p className="mt-3 text-base text-muted-foreground line-clamp-4 leading-8 ">
              {blogsData[0].subtitle}
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
                src={blogsData[0].thumbnail}
                alt={blogsData[0].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
        <FadeInStagger
          faster
          className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-y-8"
        >
          {blogsData.slice(1).map((blog, index) => (
            <FadeIn key={index}>
              <BlogCard
                thumbnail={blog.thumbnail}
                title={blog.title}
                subtitle={blog.subtitle}
                createdAt={blog.createdAt}
              />
            </FadeIn>
          ))}
        </FadeInStagger>
        <FadeIn className="flex justify-center mt-20">
          <Pagination perPageItems={5} totalItems={100} />
        </FadeIn>
      </Container>
    </div>
  );
}
