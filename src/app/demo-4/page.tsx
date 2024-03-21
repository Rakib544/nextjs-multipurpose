import { Container } from "@/components/container";
import { FaqCard1 } from "@/components/faq-card";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { Accordion } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import heroImage1 from "@/images/construction-template/hero-1.jpg";
import heroImage2 from "@/images/construction-template/hero-2.jpg";
import aboutImage from "@/images/construction-template/market-leader.jpg";
import { faqData } from "@/lib/data/faq-data";
import Image from "next/image";
import Link from "next/link";

function Faq() {
  return (
    <Container className="mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative">
          <SectionIntro eyebrow="Question" title="Frequently Asked Questions">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              minus doloribus natus ipsa pariatur obcaecati facere repellendus
              eos quibusdam dolores?
            </p>
          </SectionIntro>
          <Image
            src={heroImage2}
            alt=""
            className="w-full object-cover object-center rounded-xl mt-6 "
          />
        </div>
        <div>
          <Accordion type="single" className="mt-40" defaultValue="item=1">
            {faqData.slice(0, 9).map((faq) => (
              <FaqCard1
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                id={faq.id.toString()}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
}

export default function Demo4() {
  return (
    <div>
      <Container className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 lg:col-span-6 mt-20">
          <h1 className="text-4xl pr-10 font-bold md:text-4xl/tight max-w-lg">
            Create The Building you want here.
          </h1>
          <p className="mt-3 text-lg text-neutral-600 leading-8">
            We provide the best architectural design, construction, and building
            maintenance services for you.
          </p>
          <div className="flex gap-4 mb-16 mt-6">
            <Link href="" className={buttonVariants({ size: "lg" })}>
              Our Services
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              quod veniam molestiae quos.
            </p>
            <ul className="mt-3 space-y-1 text-neutral-700 list-disc list-inside">
              <li>Award Wining Projects</li>
              <li>Powerful Project Strategy</li>
              <li>Expert Team Member</li>
              <li>Ready to Service</li>
            </ul>
            <Link
              href=""
              className={buttonVariants({ className: "mt-2", size: "lg" })}
            >
              Learn More
            </Link>
          </SectionIntro>
        </div>
      </Container>
      <Container className="my-32">
        <SectionIntro
          eyebrow="Our advantage"
          title="Proving the best service to build your dream factory."
        />
      </Container>
      <Faq />
    </div>
  );
}
