import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { JobCard } from "@/components/job-card";
import { PageIntro } from "@/components/page-intro";
import { jobs } from "@/lib/data/job-data";
import Image from "next/image";

export default function Career1() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-0 gap-y-6 items-center">
          <div>
            <PageIntro
              className="mt-20 mb-10"
              eyebrow="Careers"
              pageTitle={
                <>
                  Help us build technology for the next era of
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
            </PageIntro>
          </div>
          <FadeIn>
            <Image
              height={450}
              width={450}
              className="block ml-auto rounded-2xl w-full"
              src="/about-intro-1.webp"
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
                <JobCard
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
                <JobCard
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
