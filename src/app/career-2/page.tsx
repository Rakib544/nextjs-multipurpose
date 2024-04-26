import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { JobCard } from "@/components/job-card";
import JobFilter from "@/components/job-filter";
import MobileFilterDrawer from "@/components/mobile-filter-drawer";
import { PageIntro } from "@/components/page-intro";
import SearchField from "@/components/search-field";
import Pagination from "@/components/ui/pagination";
import { jobs } from "@/lib/data/job-data";
import { Suspense } from "react";

export default function Career2() {
  const jobType = jobs.map((job) => job.jobType);
  const uniqueJobType = [...new Set(jobType)];

  const jobCategories = jobs.map((job) => job.category);

  return (
    <div>
      <Container>
        <PageIntro
          eyebrow="Careers"
          className="mt-20 mb-10"
          pageTitle={
            <>
              Join our team of
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">revolutionaries</span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Join us and become the trusted expert relied upon by the world’s
          biggest brands, venues, and entertainers to solve their most complex
          challenges.
        </PageIntro>
      </Container>
      <Container className="mb-20 mt-12">
        <FadeInStagger faster className="grid grid-cols-12 gap-6">
          <FadeIn className="col-span-12 md:col-span-8 space-y-4">
            <Suspense>
              <SearchField
                placeholder="Search by title"
                type="Search"
                className="rounded-full pl-10"
              />
            </Suspense>
            <FadeIn className="flex justify-end md:hidden">
              <MobileFilterDrawer />
            </FadeIn>
            <FadeInStagger faster className="space-y-4">
              {jobs.map((job, index) => (
                <FadeIn key={index}>
                  <JobCard
                    address={job.address}
                    category={job.category}
                    salary={job.category}
                    jobType={job.jobType}
                    slug={job.slug}
                    subtitle={job.subtitle}
                    title={job.title}
                  />
                </FadeIn>
              ))}
            </FadeInStagger>
            <FadeIn className="pt-12">
              <Pagination perPageItems={10} totalItems={45} />
            </FadeIn>
          </FadeIn>
          <FadeIn className="col-span-12 md:col-span-4 hidden md:block">
            <JobFilter categories={jobCategories} jobTypes={uniqueJobType} />
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  );
}
