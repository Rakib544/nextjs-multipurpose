import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
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

const processSteps = [
  {
    title: "Uncovering Insights",
    description:
      "Delving deep to understand your audience, objectives, and market landscape.",
  },
  {
    title: "Creative Exploration",
    description:
      "Collaborative brainstorming to generate innovative solutions aligned with your vision.",
  },
  {
    title: "Bringing Ideas to Life",
    description:
      "Transforming concepts into interactive prototypes for detailed feedback and iterative refinement.",
  },
  {
    title: "Refining for Perfection",
    description:
      "Conducting rigorous testing to ensure seamless user experiences and continuous improvement.",
  },
];

export default function Services2() {
  return (
    <div>
      <FadeIn className="max-w-3xl mx-auto text-center z-10 mt-20 mb-10">
        <p className="uppercase text-xs tracking-wider font-bold text-indigo-600 mb-3">
          Our Services
        </p>
        <h1 className="text-3xl font-black md:text-4.5xl/tight text-indigo-950">
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
        <p className="mt-3 text-lg text-gray-600 leading-8 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          dignissimos? Nihil suscipit alias inventore nisi!
        </p>
      </FadeIn>
      <Container className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sassFeatures.map((service) => (
            <Link
              href="/services/1"
              key={service.id}
              className="border focus:ring-0 focus:bg-primary focus:outline-none focus:border-primary group rounded-xl p-6 hover:border-primary hover:bg-primary transition duration-300"
            >
              <span className="border inline-block px-5 py-1.5 group-hover:border-indigo-500 border-indigo-200 rounded-full transition-all duration-300 group-focus:border-indigo-500">
                {service.icon}
              </span>
              <h3 className="text-lg font-bold mt-8 group-focus:text-white group-hover:text-white transition duration-300">
                {service.title}
              </h3>
              <p className="text-base leading-7 group-focus:text-slate-200 mt-3 group-hover:text-slate-200 text-gray-600 transition-all duration-300">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
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
        <div className="grid grid-cols-1 md:grid-cold-2 lg:grid-cols-4">
          {processSteps.map((p, index) => (
            <div key={index}>
              <span className="inline-flex size-12 justify-center items-center font-bold rounded-xl bg-indigo-600 text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold mb-3">{p.title}</h3>
              <p className="text-base leading-7 text-gray-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Testimonials"
          title="What people say about our creative service"
          className="mx-auto text-center mb-12"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At qui
            soluta voluptatem tempore, maxime voluptatibus architecto!
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

      <Container className="my-20 md:my-32">
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
      </Container>
    </div>
  );
}
