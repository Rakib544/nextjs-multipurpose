import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { JobCard } from "@/components/job-card";
import JobFilter from "@/components/job-filter";
import MobileFilterDrawer from "@/components/mobile-filter-drawer";
import SearchField from "@/components/search-field";
import Pagination from "@/components/ui/pagination";
import { jobs } from "@/lib/data/job-data";

export default function Career2() {
  const jobType = jobs.map((job) => job.jobType);
  const uniqueJobType = [...new Set(jobType)];

  const jobCategories = jobs.map((job) => job.category);

  return (
    <div>
      <Container className="mt-20">
        <FadeIn className="max-w-2xl">
          <p className="uppercase text-xs tracking-wider font-bold text-indigo-600 mb-3">
            Careers
          </p>
          <h1 className="text-3xl font-black md:text-4.5xl/tight text-indigo-950">
            Join our team of
            <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
              {" "}
              <span className="relative">revolutionaries</span>{" "}
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full z-[-1] fill-indigo-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
            </span>{" "}
          </h1>
          <p className="mt-3 text-lg text-gray-600 leading-8">
            Join us and become the trusted expert relied upon by the world’s
            biggest brands, venues, and entertainers to solve their most complex
            challenges.
          </p>
        </FadeIn>
      </Container>
      <Container className="mb-20 mt-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 space-y-4">
            <SearchField
              placeholder="Search by title"
              className="rounded-full pl-10"
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
