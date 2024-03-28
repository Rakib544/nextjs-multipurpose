import { Container } from "@/components/container";
import { FaqCard2 } from "@/components/faq-card";
import { GridPattern } from "@/components/grid-pattern";
import { PageIntro } from "@/components/page-intro";
import { Pricing1 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import { Accordion } from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { faqData } from "@/lib/data/faq-data";
import { testimonials } from "@/lib/data/testimonials-data";

export default function Services2() {
  return (
    <div>
      <div className="absolute z-[-1] inset-0 top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern />
      </div>
      <PageIntro title="Our Services" centered>
        <Breadcrumb className="flex justify-center">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Our Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageIntro>
      <Container className="my-20">
        <SectionIntro
          eyebrow="Testimonials"
          title="What people say about our creative service"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At qui
            soluta voluptatem tempore, maxime voluptatibus architecto! Quas
            fugiat laboriosam placeat.
          </p>
        </SectionIntro>
        <InfiniteMoving>
          {testimonials.map((testimonial) => (
            <InfiniteMovingItem
              key={testimonial.id}
              className="md:w-[350px] bg-slate-50 text-left"
            >
              <TestimonialCard
                name={testimonial.name}
                image={testimonial.image}
                quote={testimonial.quote}
                rating={testimonial.rating}
                role={testimonial.role}
              />
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </Container>
      <Container className="mt-20">
        <SectionIntro
          eyebrow="Pricing"
          title="Committed to giving the best price"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            sint eveniet ex dolorem nihil libero esse? Officia sint repellendus
            ex.
          </p>
        </SectionIntro>
        <Pricing1 />
      </Container>
      <Container className="mt-20">
        <SectionIntro eyebrow="FAQ" title="Frequently asked questions">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid at
            quam, doloremque maiores fuga numquam!
          </p>
        </SectionIntro>

        <Accordion type="multiple">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {faqData.splice(0, 6).map((faq) => (
              <FaqCard2
                key={faq.id}
                id={faq.id.toString()}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Accordion>
      </Container>
    </div>
  );
}
