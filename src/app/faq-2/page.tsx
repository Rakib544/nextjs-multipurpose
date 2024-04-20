import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard2 } from "@/components/faq-card";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { faqData } from "@/lib/data/faq-data";
import { testimonials } from "@/lib/data/testimonials-data";

export default function Faq2() {
  return (
    <div>
      <Container>
        <PageIntro
          className="mt-20 mb-10"
          eyebrow="Faq"
          pageTitle={
            <>
              {" "}
              Frequently Asked
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">Questions</span> <TextUnderline />
              </span>{" "}
            </>
          }
        >
          These are the most commonly asked questions about us and billing.
          Can&apos;t find what you are looking for? Chat to our Support Team!
        </PageIntro>
      </Container>
      <Container className="">
        <div>
          <FadeInStagger faster>
            <div className="mt-6 grid grid-cols-12 gap-6">
              {faqData.map((faq) => (
                <FaqCard2
                  key={faq.id}
                  id={faq.id.toString()}
                  answer={faq.answer}
                  question={faq.question}
                  className="col-span-12 lg:col-span-6"
                />
              ))}
            </div>
          </FadeInStagger>
        </div>
      </Container>
      <Container className="my-32">
        <SectionIntro
          eyebrow="Reviews"
          title="Clients feedback"
          className="mb-12"
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
      </Container>
    </div>
  );
}
