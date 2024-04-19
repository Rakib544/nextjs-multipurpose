import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { HomeIcon } from "@/components/icons";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import { buttonVariants } from "@/components/ui/button";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import WorkFlowCard from "@/components/workflow-card";
import {
  sassBenefits,
  sassFeatures,
  sassWorkflows,
} from "@/lib/data/sass-features";
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
              <span className="relative">Your Workflow</span>{" "}
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full z-[-1] fill-indigo-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
            </span>{" "}
            with StreamlinePro
          </h1>
          <p className="mt-3 mb-5 text-lg text-gray-600 leading-8">
            Streamline Processes, Boost Productivity, and Achieve Success.
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
        <Clients />
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          title="Empower your saas solutions"
          eyebrow="Solution"
          className="mb-12"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem est
            deleniti, molestias maxime laudantium eos?
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <div className="bg-gradient-to-b from-[#EFEDFF] to-white pt-20 mt-20 md:pt-32 pb-10 md:mt-32">
        <Container className="">
          <SectionIntro
            eyebrow="Benefits"
            title="Unlock the Power of StreamlinePro"
            className="mb-12"
          >
            <p>
              Discover How StreamlinePro Can Revolutionize Your Workflow and
              Boost Productivity to New Heights.
            </p>
          </SectionIntro>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sassBenefits.map((service) => (
              <Link
                href="/services/1"
                key={service.id}
                className="rounded-xl bg-white p-6 border border-indigo-200/20"
              >
                <span className="border inline-block px-5 py-1.5 border-indigo-200 rounded-full">
                  {service.icon}
                </span>
                <h3 className="text-lg font-bold mt-8">{service.title}</h3>
                <p className="text-base leading-7 mt-3 text-gray-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </div>
      <Container className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionIntro
            eyebrow="How Work"
            title="Get started with streamlinePro"
            className="mb-12 max-w-md"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quia consequatur cumque, sapiente exercitationem veritatis omnis
              facilis. Assumenda, fuga rem!
            </p>
          </SectionIntro>
          <div>
            {sassWorkflows.map((step, index) => (
              <WorkFlowCard key={index} id={(index + 1).toString()}>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-base leading-7 mb-10 text-gray-600">
                  {step.description}
                </p>
              </WorkFlowCard>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Testimonials"
          title="Loved by businesses worldwide."
          className="mb-12"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            explicabo illo necessitatibus quod qui deleniti?
          </p>
        </SectionIntro>
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
      {/* <CallToAction className="mt-20 mb-0 md:my-32">
        <CallToActionHeading>
          Let&apos;s maximize your online impact!
        </CallToActionHeading>
        <CallToActionSubHeading>
          More than just buzzwords for marketing concepts of SEO.
        </CallToActionSubHeading>
        <CallToActionMenus>
          <Link
            href=""
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Get In Touch
          </Link>
          <Link
            href=""
            className={buttonVariants({
              variant: "link",
              size: "lg",
              className: "!text-white",
            })}
          >
            Book a Demo &rarr;
          </Link>
        </CallToActionMenus>
      </CallToAction> */}
    </div>
  );
}
