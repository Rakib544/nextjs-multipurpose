import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { testimonials } from "@/lib/data/testimonials-data";

export default function Testimonials1({
  centered = false,
}: {
  centered?: boolean;
}) {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        centered={centered}
        eyebrow="Clients Review"
        title="Here’s what our amazing clients are saying"
        className="mb-12"
      ></SectionIntro>
      <InfiniteMoving>
        {testimonials.map((testimonial) => (
          <InfiniteMovingItem
            key={testimonial.id}
            className="md:w-[400px] bg-gray-100"
          >
            <TestimonialCard
              image={testimonial.image}
              name={testimonial.name}
              quote={testimonial.quote}
              rating={testimonial.rating}
              role={testimonial.role}
            />
          </InfiniteMovingItem>
        ))}
      </InfiniteMoving>
    </Container>
  );
}
