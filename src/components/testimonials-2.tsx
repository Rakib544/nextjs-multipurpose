import { testimonials } from "@/lib/data/testimonials-data";
import { TestimonialCard } from "./testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselDotButton,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Testimonials2() {
  return (
    <div>
      <Carousel>
        <CarouselContent className="gap-x-4">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="bg-gradient-to-br from-indigo-50 to-white md:basis-1/2 lg:basis-1/3 rounded-xl"
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end mt-10">
          <CarouselDotButton />
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
