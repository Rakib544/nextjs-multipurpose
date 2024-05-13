import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { HomeIcon, TextUnderline } from "@/components/icons";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import { buttonVariants } from "@/components/ui/button";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import UseCases from "@/components/use-case";
import WorkFlowCard from "@/components/workflow-card";
import { sassFeatures, sassWorkflows } from "@/lib/data/sass-features";
import { testimonials } from "@/lib/data/testimonials-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Container>
        <FadeIn className="max-w-3xl mx-auto text-center z-10 my-20">
          <span className="font-medium items-center gap-x-2 mb-4 px-6 inline-flex py-2 rounded-full bg-indigo-50 text-sm text-indigo-700">
            <HomeIcon className="h-4 w-4" /> 55,000+ Business Trust
          </span>
          <h1 className="text-3xl font-black md:text-4.5xl/tight text-indigo-950">
            Revolutionize
            <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
              {" "}
              <span className="relative">Your Workflow</span> <TextUnderline />
            </span>{" "}
            with StreamlinePro
          </h1>
          <p className="mt-3 mb-5 text-lg text-gray-800 leading-8 max-w-xl mx-auto">
            Streamline is a simple and intuitive expense tracker that helps you
            manage your business expenses with ease and speed.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/about-us"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Get Started
            </Link>
            <Link
              href="/about-us"
              className={buttonVariants({
                variant: "outline",

                size: "lg",
              })}
            >
              Free Trail
            </Link>
          </div>
        </FadeIn>
      </Container>
      <div className="relative">
        <Container>
          <Image
            src="/sass-landing-banner.webp"
            alt=""
            height={1015}
            width={1205}
            className="block mx-auto mt-12 relative"
          />
        </Container>
        <div className="bg-gradient-to-t from-[#FAD0F9]/50 h-full to-transparent absolute inset-0"></div>
      </div>

      <Container className="mt-12 md:mt-20">
        <FadeIn>
          <h2 className="text-lg mb-8 text-indigo-950 font-semibold text-center">
            Trusted by many top companies
          </h2>
          <Clients />
        </FadeIn>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          title="We deliver great features that helps everyday business"
          eyebrow="Features"
          className="mb-12"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem est
          deleniti, molestias maxime laudantium eos?
        </SectionIntro>
        <FadeInStagger
          faster
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {sassFeatures.map((service) => (
            <FadeIn key={service.id}>
              <Link
                href="/services/1"
                className="block border focus:ring-0 focus:bg-primary focus:outline-none focus:border-primary group rounded-xl p-6 hover:border-primary hover:bg-primary transition duration-300"
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
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
      <UseCases />
      <Container className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div>
            <div className="sticky top-6">
              <SectionIntro
                eyebrow="How Work"
                title="Get started with streamlinePro"
                className="mb-12 max-w-md"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  quia consequatur cumque, sapiente exercitationem veritatis
                  omnis facilis. Assumenda, fuga rem!
                </p>
              </SectionIntro>
            </div>
          </div>
          <FadeIn>
            {sassWorkflows.map((step, index) => (
              <WorkFlowCard key={index} id={(index + 1).toString()}>
                <h3 className="text-xl font-extrabold mb-2">{step.title}</h3>
                <p className="text-base pb-10 leading-7 text-gray-600">
                  {step.description}
                </p>
              </WorkFlowCard>
            ))}
          </FadeIn>
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Clients Review"
          title="Here’s what our amazing clients are saying"
          className="mb-12"
        ></SectionIntro>
        <InfiniteMoving>
          {testimonials.map((testimonial) => (
            <InfiniteMovingItem
              key={testimonial.id}
              className="md:w-[400px] bg-gradient-to-br from-indigo-50 to-white"
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                quote={testimonial.quote}
                rating={testimonial.rating}
                role={testimonial.role}
              />
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </Container>
      <Container className="mt-20 md:mt-32">
        <div className="flex">
          <SectionIntro
            eyebrow="Pricing"
            title="We offer great prices for your
            business."
            className="mb-12 md:mb-0"
          >
            <p className="mt-4 text-slate-700">
              It doesn’t matter what size your business is, our software won’t
              work well for you.
            </p>
          </SectionIntro>
        </div>
        <Pricing2 />
      </Container>
    </div>
  );
}
