import { BlogCard1, BlogCard3 } from "@/components/blog-cards";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import Pagination from "@/components/ui/pagination";
import { blogsData } from "@/lib/data/blog-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Blogs2() {
  return (
    <div>
      <Container className="my-20">
        <FadeIn>
          <BlogCard3
            title={blogsData[0].title}
            thumbnail={blogsData[0].thumbnail}
            createdAt={blogsData[0].createdAt}
            subtitle={blogsData[0].subtitle}
          />
        </FadeIn>
        <FadeInStagger
          faster
          className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-8 mt-20"
        >
          {blogsData.slice(1).map((blog, index) => (
            <FadeIn key={index}>
              <BlogCard1
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
