import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
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
      <Container>
        <PageIntro
          eyebrow="Our services"
          centered
          pageTitle={
            <>
              Customized solutions to
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">your business</span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          dignissimos? Nihil suscipit alias inventore nisi!
        </PageIntro>
      </Container>
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
