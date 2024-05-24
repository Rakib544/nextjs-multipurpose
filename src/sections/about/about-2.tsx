import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import Link from "next/link";
import { Fact2 } from "../facts";

export default function About2() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Who We are"
        title="Meet our passionate and innovative team of digital marketing experts"
        className="mb-12 !max-w-2xl lg:pr-12"
      >
        <p className="text-foreground leading-7">
          Agenify is a tech-enabled digital marketing solutions provider, and we
          create custom strategies for each of our clients based on their needs
          and goals.
        </p>
        <Link
          href="/about-1"
          className="mt-4 hover:text-primary border-b-2 border-primary inline-flex gap-x-1 items-center tracking-wide text-xs uppercase font-semibold "
        >
          Learn more about us
        </Link>
      </SectionIntro>
      <Fact2 />
    </Container>
  );
}
