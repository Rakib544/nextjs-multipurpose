import { BlogCard1 } from "@/components/blog-cards";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import { blogsData } from "@/lib/data/blog-data";

export default function Blogs() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Latest news"
        title="Take a look at the latest news and articles"
      >
        <p>
          Stay informed and inspired by our diverse range of thought-provoking
          and engaging articles. Explore our latest content today!
        </p>
      </SectionIntro>
      <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {blogsData.slice(0, 3).map((blog, index) => (
          <BlogCard1
            createdAt={blog.createdAt}
            subtitle={blog.subtitle}
            title={blog.title}
            thumbnail={blog.thumbnail}
            key={index}
          />
        ))}
      </FadeIn>
    </Container>
  );
}
