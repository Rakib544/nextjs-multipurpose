import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data/testimonials-data";
import { Container } from "./container";
import { SectionIntro } from "./section-intro";
import { Testimonial } from "./testimonial";

export function Testimonials() {
  return (
    <section className="py-20 relative">
      <SectionIntro
        eyebrow="Testimonials"
        title="Loved by businesses worldwide."
        className="!max-w-2xl mx-auto text-center"
      >
        <p className="text-neutral-700 leading-7 text-base">
          Our software is so simple that people can’t help but fall in love with
          it. Simplicity is easy when you just skip tons of mission-critical
          features.
        </p>
      </SectionIntro>

      <Container className="relative px-4 mt-20 pb-20 lg:pb-4">
        <Carousel
          className="w-full md:max-w-[80%] bg-slate-50 rounded-xl mx-auto relative"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Testimonial
                  id={index.toString()}
                  author={{
                    name: testimonial.name,
                    role: testimonial.role,
                    image: testimonial.image,
                  }}
                >
                  {testimonial.content}
                </Testimonial>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-x-4 items-center">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </Container>
    </section>
  );
}
