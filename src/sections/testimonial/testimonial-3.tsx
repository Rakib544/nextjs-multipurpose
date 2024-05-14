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

export default function Testimonial3({
  centered = false,
}: {
  centered?: boolean;
}) {
  return (
    <section className="bg-[#F7F7FA] rounded-[40px] py-20 md:py-32 mt-20 md:mt-32">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-24 lg:gap-x-20">
          <div>
            <SectionIntro
              eyebrow="Client Review"
              title="Here’s what our amazing clients are saying"
              className=""
              centered={centered}
            >
              Discover and be inspired by the heartfelt testimonials and success
              stories shared by our amazing clients, highlighting their journey
              and achievements with us.
            </SectionIntro>
          </div>
          <FadeIn className="relative">
            <div className="absolute -top-16 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-primary text-primary size-10"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
            <Carousel
              className="w-full md:max-w-full rounded-xl relative"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="mb-2">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem className="basis-full" key={index}>
                    <TestimonialCard
                      className="!pt-0 pb-6"
                      image={testimonial.image}
                      name={testimonial.name}
                      quote={testimonial.quote}
                      rating={testimonial.rating}
                      role={testimonial.role}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-start gap-x-4 items-center">
                <CarouselPrevious className="!left-4 lg:relative" />
                <CarouselNext className="!-right-4 lg:relative" />
              </div>
            </Carousel>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
