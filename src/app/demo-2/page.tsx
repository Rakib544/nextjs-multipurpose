import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import {
  AnalyticsIcon,
  DollarBagIcon,
  MegaphoneIcon,
} from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import WorkFlowCard from "@/components/workflow-card";
import { seoRevenueEarningProcess } from "@/lib/data/seo-agency";
import { seoServices } from "@/lib/data/seo-services";
import Blogs from "@/sections/blogs";
import { Hero2 } from "@/sections/hero";
import { Testimonial2 } from "@/sections/testimonial";
import Link from "next/link";

export default function Demo2() {
  return (
    <main>
      <Hero2 />
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
        <FadeInStagger
          faster
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <FadeIn className="border rounded-2xl p-8">
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
          </FadeIn>
          <FadeIn className="border rounded-2xl p-8">
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
          </FadeIn>
          <FadeIn className="border rounded-2xl p-8">
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
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Services"
          className="mb-12"
          title="Optimized to the unique needs of each business we work with"
        />
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {seoServices.map((service) => (
            <FadeIn className="border rounded-2xl p-6" key={service.id}>
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
            </FadeIn>
          ))}
        </FadeInStagger>
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
          <FadeIn>
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
          </FadeIn>
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

      <Testimonial2 />
      <Blogs />
    </main>
  );
}
