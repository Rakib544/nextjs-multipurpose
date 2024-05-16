import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import Link from "next/link";

export default function About2() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Who We are"
        title="Meet our passionate and innovative team of digital marketing experts"
        className="mb-12 !max-w-2xl lg:pr-12"
      >
        <p className="text-foreground leading-7">
          Numerique is a tech-enabled digital marketing solutions provider, and
          we create custom strategies for each of our clients based on their
          needs and goals.
        </p>
        <Link
          href="/about-1"
          className="mt-4 hover:text-primary border-b-2 border-primary inline-flex gap-x-1 items-center tracking-wide text-xs uppercase font-semibold "
        >
          Learn more about us
        </Link>
      </SectionIntro>

      <StatList>
        <StatListItem label="years of experience" value="10+" />
        <StatListItem label="satisfied clients" value="5k+" />
        <StatListItem label="successful campaigns" value="10K+" />
        <StatListItem label="fund raised by our clients" value="$350mn" />
      </StatList>
    </Container>
  );
}
