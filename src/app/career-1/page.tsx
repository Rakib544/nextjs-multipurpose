import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { JobCard } from "@/components/job-card";
import { PageIntro } from "@/components/page-intro";
import { jobs } from "@/lib/data/job-data";

export default function Career1() {
  return (
    <div>
      <PageIntro title="Start doing works that matters">
        <p>
          Our Philosophy is simple - hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
      </PageIntro>
      <Container className="my-12">
        <Border />
        <div className="grid grid-cols-12 py-10">
          <div className="col-span-5">
            <h2 className="text-lg font-bold text-neutral-950 mb-2">Design</h2>
            <p className="text-base text-neutral-600">
              Open Positions for our design team
            </p>
          </div>
          <div className="col-span-7 space-y-4">
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
          </div>
        </div>
      </Container>
      <Container className="my-12">
        <Border />
        <div className="grid grid-cols-12 py-10">
          <div className="col-span-5">
            <h2 className="text-lg font-bold text-neutral-950 mb-2">
              Marketing
            </h2>
            <p className="text-base text-neutral-600">
              Open Positions for our design team
            </p>
          </div>
          <div className="col-span-7 space-y-4">
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
          </div>
        </div>
      </Container>
    </div>
  );
}
