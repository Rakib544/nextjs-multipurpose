import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { ArrowRight, TextUnderline } from "@/components/icons";
import { JobCard1 } from "@/components/job-cards";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import careerHeroImage from "@/images/career/hero.webp";
import { jobs } from "@/lib/data/job-data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Career1() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-6 items-center mt-4">
          <div>
            <PageIntro
              className="mt-20 mb-10"
              eyebrow="Careers"
              pageTitle={
                <>
                  Help us building technology for the next era of
                  <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                    {" "}
                    <span className="relative"> digital solution</span>{" "}
                    <TextUnderline />
                  </span>{" "}
                </>
              }
            >
              Join us and become the trusted expert relied upon by the world’s
              biggest brands, venues, and entertainers to solve their most
              complex challenges.
              <div>
                <Link
                  href="/about-1"
                  aria-label="Click here to learn more about us"
                  className={buttonVariants({ className: "mt-4", size: "lg" })}
                >
                  Learn More <ArrowRight className="ml-1 size-5" />
                </Link>
              </div>
            </PageIntro>
          </div>
          <FadeIn>
            <Image
              priority
              height={450}
              width={450}
              className="block ml-auto rounded-2xl w-full"
              src={careerHeroImage}
              alt=""
            />
          </FadeIn>
        </div>
      </Container>
      <Container className="my-12">
        <Border />
        <FadeInStagger faster className="grid grid-cols-12 py-10 gap-y-6">
          <FadeIn className="col-span-12 lg:col-span-5">
            <h2 className="text-lg font-bold text-foreground mb-2">Design</h2>
            <p className="text-base text-muted-foreground">
              Open Positions for our design team
            </p>
          </FadeIn>
          <FadeIn className="col-span-12 lg:col-span-7 space-y-4">
            {jobs
              .filter((item) => item.category.toLowerCase() === "design")
              .map((job, index) => (
                <JobCard1
                  key={index}
                  address={job.address}
                  category={job.category}
                  salary={job.category}
                  jobType={job.jobType}
                  slug={job.slug}
                  subtitle={job.subtitle}
                  title={job.title}
                />
              ))}
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Container className="my-12">
        <Border />
        <FadeInStagger faster className="grid grid-cols-12 py-10 gap-y-6">
          <FadeIn className="col-span-12 lg:col-span-5">
            <h2 className="text-lg font-bold text-foreground mb-2">
              Marketing
            </h2>
            <p className="text-base text-muted-foreground">
              Open Positions for our design team
            </p>
          </FadeIn>
          <FadeIn className="col-span-12 lg:col-span-7 space-y-4">
            {jobs
              .filter((item) => item.category.toLowerCase() === "marketing")
              .map((job, index) => (
                <JobCard1
                  key={index}
                  address={job.address}
                  category={job.category}
                  salary={job.category}
                  jobType={job.jobType}
                  slug={job.slug}
                  subtitle={job.subtitle}
                  title={job.title}
                />
              ))}
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  );
}
