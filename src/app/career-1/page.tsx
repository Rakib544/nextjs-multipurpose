import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { ClockIcon, DollarCircleIcon, PinIcon } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import Link from "next/link";

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
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </Container>
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
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </Container>
    </div>
  );
}

function JobCard() {
  return (
    <Link
      href="/jobs/1"
      className="border bg-white p-4 rounded-xl hover:bg-neutral-50 block"
    >
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">
          Product Designer{" "}
          <span className="inline-block px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full">
            Design
          </span>
        </h3>
        <div>
          <span className="flex items-center gap-x-1 px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full">
            <PinIcon className="h-3 w-3" /> Dhaka, Bangladesh
          </span>
        </div>
      </div>
      <p className="text-base text-neutral-600 leading-7 mt-2 mb-4">
        We are looking for a mid-level product designer to join our team
      </p>
      <div className="flex gap-x-4">
        <span className="flex gap-x-1 text-sm items-center font-medium text-neutral-600">
          <ClockIcon className="h-4 w-4" /> Full Time
        </span>
        <span className="flex gap-x-1 text-sm items-center font-medium text-neutral-600">
          <DollarCircleIcon className="h-4 w-4" /> $90k - $100k
        </span>
      </div>
    </Link>
  );
}
