import { BlogCard1 } from "@/components/blog-card/index";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import Pagination from "@/components/ui/pagination";

export default function Blogs1() {
  return (
    <div>
      <PageIntro title="Our Blogs">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure vel
          deserunt doloribus! Natus eius sint praesentium debitis blanditiis ut.
        </p>
      </PageIntro>
      <Container className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <BlogCard1 key={i} />
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <Pagination perPageItems={5} totalItems={100} />
        </div>
      </Container>
    </div>
  );
}
