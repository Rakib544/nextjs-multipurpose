import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Demo3() {
  return (
    <div>
      <Container className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-6 max-w-md">
          <p className="uppercase font-semibold text-base">Automate and Hire</p>
          <h1 className="text-4xl font-bold">
            <span className="block">Hire For</span> What&rsquo;s Next
          </h1>
          <p className="mb-4">
            Whats next for many of us changing your companies ability to hire
            great talent is a important as ever so you will be.
          </p>
          <div className="flex gap-4">
            <Link href="" className={buttonVariants({ size: "lg" })}>
              Get Started
            </Link>
            <Link href="" className={buttonVariants({ variant: "outline" })}>
              Get Started
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Image
            src="/login.jpg"
            alt=""
            className="h-[400px]"
            height={400}
            width={400}
          />
        </div>
      </Container>
      <Clients />
      <Container className="grid grid-cols-12 gap-6 items-center my-12">
        <div className="col-span-12 lg:col-span-6">
          <Image
            src="/login.jpg"
            alt=""
            height={400}
            width={400}
            className="h-[400px] w-full"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <SectionIntro title="The best software teams ship early and often">
            <p>
              Jira software is built for every member of your software team to
              plan, track, and release great software.
            </p>
            <Button variant="outline">Watch Video</Button>
          </SectionIntro>
        </div>
      </Container>
      <Container className="grid grid-cols-12 gap-6 items-center my-12">
        <div className="col-span-12 lg:col-span-6">
          <SectionIntro
            eyebrow="Source and attracts"
            title="The best software teams ship early and often"
          >
            <p>
              Jira software is built for every member of your software team to
              plan, track, and release great software.
            </p>
            <Button variant="outline">Watch Video</Button>
          </SectionIntro>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Image
            src="/login.jpg"
            alt=""
            height={400}
            width={400}
            className="h-[400px] w-full"
          />
        </div>
      </Container>
      <Container className="my-32">
        <SectionIntro title="Many Reasons companies around the world choose Us" />
      </Container>
      <Container className="my-32">
        <SectionIntro title="Diving impact for our customers" />
      </Container>
    </div>
  );
}
