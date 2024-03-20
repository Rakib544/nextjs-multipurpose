import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { ClockIcon, DollarCircleIcon, PinIcon } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { InfiniteMovingImageCards } from "@/components/ui/infinite-moveing-image-cards";
import heroImage from "@/images/hero.jpg";
import Link from "next/link";

const images = [heroImage, heroImage, heroImage, heroImage, heroImage];

export default function Career2() {
  return (
    <div>
      <PageIntro title="Become a part of our team">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          nisi sequi? Eum hic, aperiam ea perferendis veritatis similique eius
          laudantium?
        </p>
      </PageIntro>
      <Container className="mt-12">
        <FadeIn>
          <InfiniteMovingImageCards items={images} />
        </FadeIn>
      </Container>
      <Container className="my-20">
        <SectionIntro title="Job Openings">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium, at?
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
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
