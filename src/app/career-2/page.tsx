import { Container } from "@/components/container";
import { JobCard } from "@/components/job-card";
import JobFilter from "@/components/job-filter";
import MobileFilterDrawer from "@/components/mobile-filter-drawer";
import { PageIntro } from "@/components/page-intro";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
import { jobs } from "@/lib/data/job-data";

export default function Career2() {
  const jobType = jobs.map((job) => job.jobType);
  const uniqueJobType = [...new Set(jobType)];

  const jobCategories = jobs.map((job) => job.category);

  return (
    <div>
      <PageIntro title="Become a part of our team">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          nisi sequi? Eum hic, aperiam ea perferendis veritatis similique eius
          laudantium?
        </p>
      </PageIntro>
      <Container className="my-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 space-y-4">
            <Input
              className="w-full"
              placeholder="Search Job Title"
              autoFocus
            />
            <div className="flex justify-end md:hidden">
              <MobileFilterDrawer />
            </div>
            {jobs.map((job, index) => (
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
            <div className="pt-12">
              <Pagination perPageItems={10} totalItems={45} />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 hidden md:block">
            <JobFilter categories={jobCategories} jobTypes={uniqueJobType} />
          </div>
        </div>
      </Container>
    </div>
  );
}
