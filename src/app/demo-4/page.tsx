import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import heroImage1 from "@/images/construction-template/hero-1.jpg";
import heroImage2 from "@/images/construction-template/hero-2.jpg";
import aboutImage from "@/images/construction-template/market-leader.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Demo4() {
  return (
    <div>
      <Container className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 mt-12">
          <h1 className="text-3xl font-bold tracking-tighter md:text-5xl/tight pr-20">
            Create The Building you want here.
          </h1>
          <p className="mt-3 text-lg text-neutral-600 leading-8">
            We provide the best architectural design, construction, and building
            maintenance services for you.
          </p>
          <div className="flex gap-4 mb-16 mt-6">
            <Link href="" className={buttonVariants({ size: "lg" })}>
              Get Started
            </Link>
            <Link
              href=""
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              View Projects
            </Link>
          </div>
          <StatList>
            <StatListItem label="Years of experience" value="10+" />
            <StatListItem label="Project Complete" value="300" />
          </StatList>
        </div>
        <div className="col-span-12 lg:col-span-6 relative">
          <Image
            src={heroImage1}
            alt=""
            height={400}
            width={400}
            className="absolute top-0 right-0 h-[400px] w-auto"
          />
          <Image
            src={heroImage2}
            alt=""
            height={400}
            width={400}
            className="absolute top-24 right-52 h-[350px] w-auto"
          />
        </div>
      </Container>
      <Container className="my-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={aboutImage}
            alt=""
            height={400}
            width={500}
            className=""
          />
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <SectionIntro
            eyebrow="About Us"
            title="We are a leader in the construction field."
          >
            <p className="text-base text-neutral-700 leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              quod veniam molestiae quos illo cupiditate facilis fuga quo omnis
              laboriosam? Qui odio natus, vitae necessitatibus dolorem, magni
              maiores recusandae praesentium, quaerat distinctio ullam. Cum
              magnam quo velit quos excepturi nemo!
            </p>
          </SectionIntro>
        </div>
      </Container>
      <Container className="my-32">
        <SectionIntro
          eyebrow="Our advantage"
          title="Proving the best service to build your dream factory."
        />
      </Container>
    </div>
  );
}
