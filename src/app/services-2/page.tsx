import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { FaqCard2 } from "@/components/faq-card";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import { Accordion } from "@/components/ui/accordion";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { faqData } from "@/lib/data/faq-data";
import { sassFeatures } from "@/lib/data/sass-features";
import { testimonials } from "@/lib/data/testimonials-data";
import Link from "next/link";

export default function Services2() {
  return (
    <div>
      <FadeIn className="max-w-2xl mx-auto text-center z-10 mt-20 mb-10">
        <h1 className="text-3xl font-black md:text-4xl/tight text-indigo-950">
          Customized solutions to
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
        <p className="mt-3 text-base text-gray-600 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          dignissimos? Nihil suscipit alias inventore nisi a, asperiores ducimus
          quasi necessitatibus!
        </p>
      </FadeIn>
      <Container className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sassFeatures.map((service) => (
            <Link
              href="/services/1"
              key={service.id}
              className="border rounded-xl p-6 hover:bg-gradient-to-b from-indigo-50 hover:border-indigo-200 to-white"
            >
              <span className="border inline-block px-5 py-1.5 border-indigo-200 rounded-full">
                {service.icon}
              </span>
              <h3 className="text-lg font-extrabold mt-8">{service.title}</h3>
              <p className="text-base leading-7 mt-3 text-gray-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
      <Container className="my-20">
        <SectionIntro
          title="Smart And Effective Working Process"
          eyebrow="Our process"
          className="mb-12 mx-auto text-center"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            at.
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 md:grid-cold-2 lg:grid-cols-4 text-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <span className="inline-block px-5 text-sm font-medium py-2 rounded-full bg-indigo-600 text-white">
                Step - {i}
              </span>
              <h3 className="mt-4 text-lg font-bold mb-3">Analysis</h3>
              <p className="text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                maiores?
              </p>
            </div>
          ))}
        </div>
      </Container>
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

      <Container className="my-20">
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
