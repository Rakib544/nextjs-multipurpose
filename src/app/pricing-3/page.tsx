import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
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
        <PageIntro
          className="max-w-3xl mx-auto"
          centered
          eyebrow="Pricing Plan"
          pageTitle={
            <>
              Our plans scale with
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">your business</span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Enjoy lifetime access, community support, and no subscription fees.
        </PageIntro>

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
