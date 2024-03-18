import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { GridPattern } from "@/components/grid-pattern";
import { PageIntro } from "@/components/page-intro";
import { Pricing1 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import ServiceCard from "@/components/service-card";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import Workflow from "@/components/work-flow";
import partnershipIcon from "@/images/key-features/partnership.svg";
import performanceIcon from "@/images/key-features/performance.svg";
import subscriptionIcon from "@/images/key-features/subscription.svg";
import supportIcon from "@/images/key-features/support.svg";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Fast Performance",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: performanceIcon,
  },
  {
    id: 2,
    title: "Partnership deal",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: partnershipIcon,
  },
  {
    id: 3,
    title: "Pro Subscription",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: subscriptionIcon,
  },
  {
    id: 4,
    title: "Customer Support",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: supportIcon,
  },
];

export default function Services1() {
  return (
    <div>
      <PageIntro title="Our Comprehensive Digital Solution">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe
          facilis in ratione necessitatibus, consequatur exercitationem rerum
          laboriosam. Minima illo enim fugiat totam corporis neque placeat alias
          natus dolorem excepturi numquam sed asperiores ex laborum, vitae
          voluptate tempore modi facere deleniti. Eaque sapiente totam
          recusandae facilis distinctio id, animi facere!
        </p>
      </PageIntro>
      <Container className="my-32">
        <StatList>
          <StatListItem
            label="of sharing architectural landscapes"
            value="50+ Years"
          />
          <StatListItem
            label="of sharing architectural landscapes"
            value="100+ Projects"
          />
          <StatListItem
            label="of sharing architectural landscapes"
            value="20+ Awards"
          />
          <StatListItem
            label="of sharing architectural landscapes"
            value="99+ Success"
          />
        </StatList>
      </Container>
      <Container className="my-32">
        <SectionIntro eyebrow="Services" title="Our Services">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            obcaecati ipsam rem excepturi perferendis iusto provident sapiente
            autem officiis laboriosam.
          </p>
        </SectionIntro>
        <FadeInStagger faster className="grid grid-cols-12 gap-4 mt-12">
          {data.map((d) => (
            <ServiceCard
              key={d.id}
              title={d.title}
              description={d.description}
              icon={d.icon}
            />
          ))}
        </FadeInStagger>

        <Workflow />
      </Container>
      <div className="relative isolate bg-[#F6F9FC] py-16 sm:py-28 md:py-32">
        <div className="absolute inset-0 top-0 z-[-1] text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern />
        </div>
        <Container>
          <FadeIn className="max-w-xl mx-auto text-center z-20">
            <h2 className="block tracking-tight [text-wrap:balance] text-4xl font-bold text-neutral-950 mb-2">
              Get started today
            </h2>
            <p className="text-neutral-700 leading-7">
              It’s time to take control of your books. Buy our software so you
              can feel like you’re doing something productive.
            </p>
            <Link
              href=""
              className={buttonVariants({ size: "lg", className: "mt-5 z-10" })}
            >
              Contact us
            </Link>
          </FadeIn>
        </Container>
      </div>
      <Container className="my-32">
        <Pricing1 />
      </Container>
      <p>Faq will be here</p>
    </div>
  );
}
