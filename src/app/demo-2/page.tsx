import { BlogCard2 } from "@/components/blog-card";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import {
  AnalyticsIcon,
  DollarBagIcon,
  MegaphoneIcon,
} from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { TestimonialCard } from "@/components/testimonial-card";
import { buttonVariants } from "@/components/ui/button";
import {
  CallToAction,
  CallToActionHeading,
  CallToActionMenus,
  CallToActionSubHeading,
} from "@/components/ui/call-to-action";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WhyChooseUs from "@/components/why-choose-us";
import { seoServices } from "@/lib/data/seo-services";
import { testimonials } from "@/lib/data/testimonials-data";
import Image from "next/image";
import Link from "next/link";

function Testimonials() {
  return (
    <Container className="mt-20 md:mt-32 relative">
      <SectionIntro
        eyebrow="Testimonials"
        title="Loved by businesses worldwide."
      >
        <p className="text-neutral-700 leading-7 text-base">
          Our software is so simple that people can’t help but fall in love with
          it. Simplicity is easy when you just skip tons of mission-critical
          features.
        </p>
      </SectionIntro>

      <Carousel
        className="w-full md:max-w-full rounded-xl relative mt-12"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="mb-6">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              className="basis-full md:basis-[50%] bg-gradient-to-br from-indigo-50 to-white mx-2 py-2 md:py-10 rounded-xl border px-6 md:px-10"
              key={index}
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                quote={testimonial.quote}
                rating={testimonial.rating}
                role={testimonial.role}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-x-4 items-center">
          <CarouselPrevious className="!-left-4" />
          <CarouselNext className="!-right-4" />
        </div>
      </Carousel>
    </Container>
  );
}
export default function Demo2() {
  return (
    <main>
      <div className="absolute top-0 left-0 z-[-1] w-full min-h-screen bg-gradient-to-b from-[#ECE9FF] to-white from-40%"></div>
      <Container className="py-12 md:py-20 ">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-7">
            <FadeIn className="order-2 lg:order-1 z-10">
              {/* <span className="font-medium items-center gap-x-2 mb-4 px-6 inline-flex py-2 rounded-full bg-indigo-50 text-sm text-indigo-700">
                <HomeIcon className="h-4 w-4" /> 55,000+ Business Trust
              </span> */}
              <h1 className="text-3xl max-w-xl text-indigo-950 pr-10 font-extrabold tracking md:text-5xl/tight">
                {/* Boost Your{" "}
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  Online Presence
                </span>{" "}
                with Expert SEO Solutions */}
                Increase your online visibility and drive more traffic
              </h1>
              <p className="mt-3 text-base text-gray-600 leading-7 max-w-xl">
                Elevating Your Online Presence: Our Strategies Drive Traffic,
                Boost Rankings, and Enhance Visibility in Search Engine Results.
              </p>
              <div className="flex gap-4 mt-8">
                <Link
                  href="/about-us"
                  className={buttonVariants({
                    size: "lg",
                  })}
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="col-span-12 lg:col-span-5 relative">
            <Image
              src="/header1.png"
              alt=""
              height={300}
              width={300}
              className="object-cover object-center bg-white shadow-xl block mx-auto rounded-xl"
            />

            <Image
              src="/header2.png"
              alt=""
              height={200}
              width={300}
              className="object-cover object-center bg-white shadow-xl block mx-auto rounded-xl mt-4 ml-4"
            />
          </div>
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          className="mb-12"
          title="We solve digital challenges"
          eyebrow="What we do"
        >
          Together, we help our clients achieve tangible, measurable results.
          Focused on business outcomes — we bring a unique set of expertise and
          skills to the party.
        </SectionIntro>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded-2xl p-8">
            <span className="flex justify-center items-center size-16 bg-indigo-50 rounded-full border border-indigo-50">
              <MegaphoneIcon className="fill-indigo-600 text-indigo-600  h-7 w-7" />
            </span>
            <h3 className="text-xl font-bold mt-6 text-indigo-950">
              Better Audience
            </h3>
            <p className="text-base leading-7 mt-3 text-gray-600 ">
              Our proprietary solution leverages an in-house database of 260M+
              customers and 2,000+ custom variables to build custom predictive
              models.
            </p>
          </div>
          <div className="border rounded-2xl p-8">
            <span className="flex justify-center items-center size-16 bg-indigo-50 rounded-full border border-indigo-50">
              <AnalyticsIcon className="fill-indigo-600 text-indigo-600  h-7 w-7" />
            </span>
            <h3 className="text-xl font-bold mt-6 text-indigo-950">
              Better Analytics
            </h3>
            <p className="text-base leading-7 mt-3 text-gray-600 ">
              Our proprietary solution leverages an in-house database of 260M+
              customers and 2,000+ custom variables to build custom predictive
              models.
            </p>
          </div>
          <div className="border rounded-2xl p-8">
            <span className="flex justify-center items-center size-16 bg-indigo-50 rounded-full border border-indigo-50">
              <DollarBagIcon className="fill-indigo-600 text-indigo-600  h-7 w-7" />
            </span>
            <h3 className="text-xl font-bold mt-6 text-indigo-950">
              Better Outcomes
            </h3>
            <p className="text-base leading-7 mt-3 text-gray-600 ">
              Our proprietary solution leverages an in-house database of 260M+
              customers and 2,000+ custom variables to build custom predictive
              models.
            </p>
          </div>
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Services"
          className="mb-12"
          title="Optimized to the unique needs of each business we work with"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {seoServices.map((service) => (
            <div className="border rounded-2xl p-6" key={service.id}>
              <span className="flex justify-center items-center size-16 bg-indigo-50 rounded-full border border-indigo-50">
                <MegaphoneIcon className="fill-indigo-600 text-indigo-600  h-7 w-7" />
              </span>
              <h3 className="text-lg font-bold mt-6 text-indigo-950">
                {service.title}
              </h3>
              <p className="text-base leading-7 mt-3 text-gray-600">
                {service.description}
              </p>
              <Link
                href="/service-details"
                className={buttonVariants({
                  variant: "link",
                  className: "!px-0 mt-4",
                })}
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <WhyChooseUs />
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          className="mb-12"
          title="We are the best online software firm in the world."
        >
          <p>
            You can help customer in real time across all of your channels from
            email, social, website, IOS and android apps.
          </p>
        </SectionIntro>
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Testimonials />
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="NEWS & EVENTS"
          title="Check out our blog posts"
          className="mb-12"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quo quibusdam omnis deleniti itaque praesentium enim repellendus,
            nisi porro odit?
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard2 />
          <BlogCard2 />
          <BlogCard2 />
        </div>
      </Container>
      <CallToAction className="mt-20 mb-0 md:my-32">
        <CallToActionHeading>
          It&apos;s time to tell the world about it
        </CallToActionHeading>
        <CallToActionSubHeading>
          We will shows you exactly what content you should write to make it to
          the top of search engine results and drive the traffic you want.
        </CallToActionSubHeading>
        <CallToActionMenus>
          <Link
            href=""
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Start a SEO Audit
          </Link>
        </CallToActionMenus>
      </CallToAction>
    </main>
  );
}
