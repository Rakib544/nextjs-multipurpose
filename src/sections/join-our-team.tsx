import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { ArrowRight } from "@/components/icons";
import { JobCard2 } from "@/components/job-cards";
import { SectionIntro } from "@/components/section-intro";
import { buttonVariants } from "@/components/ui/button";
import { jobs } from "@/lib/data/job-data";
import Link from "next/link";

export default function JoinOurTeam() {
  return (
    <Container className="my-20 md:my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-12 items-center">
        <div>
          <SectionIntro
            eyebrow="Join our team"
            title="Opportunity to be part of a dynamic team"
          >
            <p>
              Apply now and become part of our innovative team dedicated to
              driving meaningful change. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Unde, rem!
            </p>
            <Link
              href="/career-1"
              className={buttonVariants({
                className: "mt-4 items-center",
                size: "lg",
              })}
            >
              View open positions <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </SectionIntro>
        </div>
        <FadeInStagger faster className="space-y-4">
          {jobs.slice(0, 4).map((job) => (
            <FadeIn key={job.slug}>
              <JobCard2
                address={job.address}
                slug={`/jobs/${job.slug}`}
                title={job.title}
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Container>
  );
}
