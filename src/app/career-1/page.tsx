import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { JobCard } from "@/components/job-card";
import { jobs } from "@/lib/data/job-data";
import Image from "next/image";

export default function Career1() {
  return (
    <div>
      <Container className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-0 gap-y-6 items-center">
          <div>
            <FadeIn className="z-10 mt-20 mb-10">
              <p className="uppercase text-xs tracking-wider font-bold text-indigo-600 mb-3">
                Careers
              </p>
              <h1 className="text-3xl font-extrabold md:text-4.5xl/tight text-indigo-950">
                Help us build technology for the next era of
                <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                  {" "}
                  <span className="relative"> digital solution</span>{" "}
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
              <p className="mt-3 text-base text-gray-600 leading-8 max-w-xl mx-auto">
                Join us and become the trusted expert relied upon by the world’s
                biggest brands, venues, and entertainers to solve their most
                complex challenges.
              </p>
            </FadeIn>
          </div>
          <div>
            <Image
              height={450}
              width={450}
              className="block ml-auto rounded-2xl"
              src="/about-intro-1.webp"
              alt=""
            />
          </div>
        </div>
      </Container>
      {/* <PageIntro title="Start doing works that matters">
        <p>
          Our Philosophy is simple - hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
      </PageIntro> */}
      <Container className="my-12">
        <Border />
        <div className="grid grid-cols-12 py-10 gap-y-6">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-lg font-bold text-indigo-950 mb-2">Design</h2>
            <p className="text-base text-gray-600">
              Open Positions for our design team
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-4">
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
        <div className="grid grid-cols-12 py-10 gap-y-6">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-lg font-bold text-indigo-950 mb-2">
              Marketing
            </h2>
            <p className="text-base text-gray-600">
              Open Positions for our design team
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-4">
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
