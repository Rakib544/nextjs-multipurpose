import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data/testimonials-data";

export default function Testimonial2({
  centered = false,
}: {
  centered?: boolean;
}) {
  return (
    <Container className="mt-20 md:mt-32 relative">
      <SectionIntro
        centered={centered}
        eyebrow="Testimonials"
        title="Here’s what our amazing clients are saying"
      ></SectionIntro>

      <FadeIn>
        <Carousel
          className="w-full md:max-w-full rounded-xl relative mt-12"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="mb-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                className="basis-full md:basis-[50%] bg-gray-100 mx-2 py-2 md:py-10 rounded-[40px] px-6 md:px-10"
                key={index}
              >
                <TestimonialCard
                  image={testimonial.image}
                  name={testimonial.name}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  role={testimonial.role}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-x-4 items-center">
            <CarouselPrevious className="!-left-4" />
            <CarouselNext className="!-right-4" />
          </div>
        </Carousel>
      </FadeIn>
    </Container>
  );
}
