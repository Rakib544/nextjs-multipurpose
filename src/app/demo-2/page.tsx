import { BlogCard2 } from "@/components/blog-card";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import {
  AnalyticsIcon,
  DollarBagIcon,
  HomeIcon,
  MegaphoneIcon,
} from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { TestimonialCard } from "@/components/testimonial-card";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WorkFlowCard from "@/components/workflow-card";
import { blogsData } from "@/lib/data/blog-data";
import { seoRevenueEarningProcess } from "@/lib/data/seo-agency";
import { seoServices } from "@/lib/data/seo-services";
import { testimonials } from "@/lib/data/testimonials-data";
import Image from "next/image";
import Link from "next/link";

function Testimonials() {
  return (
    <Container className="mt-20 md:mt-32 relative">
      <SectionIntro
        eyebrow="Testimonials"
        title="Here’s what our amazing clients are saying"
      ></SectionIntro>

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
      <div
        style={{
          backgroundImage: `linear-gradient(180deg,#6754E9 0%,#4534B8 100%)`,
        }}
        className="rounded-bl-[40px] rounded-br-[40px] z-20 relative"
      >
        <Container className="py-12 md:py-20">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-7">
              <FadeIn className="order-2 lg:order-1 z-10">
                <span className="inline-flex px-5 py-1 text-sm rounded-full border border-indigo-400 mb-2 bg-[#6754E9] text-white">
                  <HomeIcon className="h-4 w-4 mr-1 fill-white" /> Most trusted
                  seo agency
                </span>
                <h1 className="text-3xl max-w-xl text-white pr-10 font-extrabold md:text-4xl/tight">
                  Increase your online visibility and drive more traffic
                </h1>
                <p className="mt-3 text-base text-white leading-8 max-w-lg">
                  Elevating your online presence: our strategies drive traffic,
                  boost rankings, and enhance visibility in search engine
                  results.
                </p>
                <div className="flex gap-4 mt-6">
                  <Link
                    href="/about-us"
                    className={buttonVariants({
                      size: "lg",
                      variant: "secondary",
                    })}
                  >
                    Get A Free Audit
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
      </div>
      <div className="bg-[#F7F7FA] -mt-10 z-[-1] rounded-bl-[40px] rounded-br-[40px] pt-12 pb-2">
        <Container>
          {/* <p className="text-center pb-3 font-bold text-xs text-primary uppercase tracking-wider pt-7">
            global partners
          </p> */}
          <Clients />
        </Container>
      </div>
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
      <Container className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full relative">
          <div>
            <div className="sticky top-6">
              <SectionIntro
                eyebrow="Why choose us"
                title="How we drive revenue"
              >
                We start by conducting in-depth SEO audits to identify
                opportunities and areas for improvement. Our team analyzes your
                website&apos;s current performance, content, and technical setup
                to create a tailored strategy.
              </SectionIntro>
            </div>
          </div>
          <div>
            {seoRevenueEarningProcess.map((process, index) => (
              <WorkFlowCard key={index} id={(index + 1).toString()}>
                <span className="size-12 md:size-14  rounded-full bg-indigo-50 inline-flex justify-center items-center mb-4">
                  {process.icon}
                </span>
                <h3 className="text-lg sm:text-xl text-indigo-950 font-bold mb-2">
                  {process.title}
                </h3>
                <p className="text-base leading-8 pb-10 text-gray-600">
                  {process.description}
                </p>
              </WorkFlowCard>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          className="mb-12"
          title="We are the best online seo marketing agency in the world."
        >
          <p>
            You can help customer in real time across all of your channels from
            email, social, website, IOS and android apps.
          </p>
        </SectionIntro>
        <StatList>
          <StatListItem value="2B" label="Related keywords" />
          <StatListItem value="100M" label="Competitors keywords" />
          <StatListItem value="2K" label="Supported locations" />
          <StatListItem value="2011" label="Year founded" />
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
          {blogsData.slice(0, 3).map((blog, index) => (
            <BlogCard2
              createdAt={blog.createdAt}
              subtitle={blog.subtitle}
              title={blog.title}
              thumbnail={blog.thumbnail}
              key={index}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
