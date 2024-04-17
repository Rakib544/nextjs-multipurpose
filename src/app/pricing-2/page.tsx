import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import { PageIntro } from "@/components/page-intro";
import { Pricing1 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import { Accordion } from "@/components/ui/accordion";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { faqData } from "@/lib/data/faq-data";
import { testimonials } from "@/lib/data/testimonials-data";

export default function Pricing() {
  return (
    <div>
      <div
        className="absolute min-h-screen w-full top-0 z-[-2] bg-cover"
        style={{
          backgroundImage:
            "url(https://tailwindui.com/img/beams-basic-transparent.png)",
        }}
      ></div>
      <Container className="z-10">
        <PageIntro
          className="max-w-xl mx-auto"
          eyebrow="Pricing Plan"
          centered
          pageTitle={
            <>
              Our plans scale with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Your Business
              </span>{" "}
            </>
          }
        >
          Pricing for businesses at every stage of growth.
        </PageIntro>

        <Pricing1 />
        <div className="mt-20 md:mt-32">
          <SectionIntro
            title="Got questions? We’ve got answers"
            eyebrow="Our FAQ"
            className="max-w-2xl mx-auto text-center mb-12"
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
        <div className="my-20 md:my-32">
          <SectionIntro
            eyebrow="Reviews"
            title="Clients feedback"
            className="max-w-2xl mx-auto mb-12 text-center"
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
      </Container>
    </div>
  );
}
