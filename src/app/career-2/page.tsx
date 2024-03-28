import { Container } from "@/components/container";
import { JobCard } from "@/components/job-card";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import heroImage from "@/images/hero.jpg";
import { jobs } from "@/lib/data/job-data";
import Image from "next/image";

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
        <InfiniteMoving>
          {images.map((image, index) => (
            <InfiniteMovingItem key={index} className="md:w-[350px]">
              <Image
                src={image}
                alt=""
                width={200}
                height={200}
                className="w-full h-auto object-cover rounded-xl border"
              />
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </Container>
      <Container className="my-20">
        <SectionIntro title="Job Openings">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium, at?
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
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
        </div>
      </Container>
    </div>
  );
}
