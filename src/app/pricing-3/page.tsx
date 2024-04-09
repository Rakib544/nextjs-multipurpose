import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import PriceComparisonTable from "@/components/pricing/price-comparison-table";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import { Accordion } from "@/components/ui/accordion";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { faqData } from "@/lib/data/faq-data";
import { testimonials } from "@/lib/data/testimonials-data";

export default function Component() {
  return (
    <div>
      <div className="h-screen absolute top-0 left-0 bg-gradient-to-t from-violet-100 to-white w-full z-[-1]" />
      <Container>
        <FadeIn className="max-w-3xl mx-auto text-center z-10 mt-20 mb-10">
          <span className="uppercase text-xs tracking-wider text-center font-bold text-indigo-600 mb-3 inline-block">
            Pricing Plan
          </span>
          <h1 className="text-3xl font-black md:text-4xl/tight text-indigo-950">
            Our plans scale with
            <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
              {" "}
              <span className="relative">your business</span>{" "}
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full z-[-1] fill-indigo-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
            </span>{" "}
          </h1>
          <p className="mt-3 text-lg text-gray-600 leading-8">
            Enjoy lifetime access, community support, and no subscription fees.
          </p>
        </FadeIn>
        <div className="bg-white border rounded mt-12 md:mt-20">
          <PriceComparisonTable />
        </div>
        <div className="mt-20 md:mt-32">
          <SectionIntro
            eyebrow="Reviews"
            title="Clients feedback"
            className="max-w-2xl mx-auto mb-6 text-center"
          ></SectionIntro>
          <InfiniteMoving>
            {testimonials.map((testimonial) => (
              <InfiniteMovingItem
                key={testimonial.id}
                className="md:w-[350px] bg-gradient-to-br from-indigo-50 to-white"
              >
                <TestimonialCard
                  image={testimonial.image}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  rating={testimonial.rating}
                  role={testimonial.role}
                />
              </InfiniteMovingItem>
            ))}
          </InfiniteMoving>
        </div>
        <div className="my-20 md:my-32">
          <SectionIntro
            title="Got questions? We’ve got answers"
            eyebrow="Our FAQ"
            className="max-w-2xl mx-auto text-center"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sed soluta voluptates?
            </p>
          </SectionIntro>
          <div className="max-w-2xl mx-auto mt-16">
            <FadeInStagger faster>
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="mt-6"
              >
                {faqData.slice(0, 10).map((faq) => (
                  <FaqCard1
                    key={faq.id}
                    id={faq.id.toString()}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </Accordion>
            </FadeInStagger>
          </div>
        </div>
      </Container>
    </div>
  );
}
