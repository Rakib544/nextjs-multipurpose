import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight, TextUnderline } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { buttonVariants } from "@/components/ui/button";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { previewData } from "@/lib/data/previw-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <FadeIn className="max-w-3xl mx-auto text-center z-10 mt-20 mb-12">
          <h1 className="text-3xl font-black md:text-4.5xl/tight text-foreground">
            A Next-Generation Multipurpose Template Built with
            <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
              {" "}
              <span className="relative">React & Next.js</span>{" "}
              <TextUnderline />
            </span>{" "}
          </h1>
          <p className="mt-3 mb-5 text-lg text-foreground leading-8 max-w-xl mx-auto">
            Agenify is a highly SEO-optimized Next.js template, enabling you to
            build your website swiftly with easy-to-use, copy-paste blocks.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/about-1"
              className={buttonVariants({
                size: "lg",
              })}
            >
              See demo pages <ArrowRight className="size-4 ml-1" />
            </Link>
            <Link
              href="/about-1"
              className={buttonVariants({
                variant: "outline",

                size: "lg",
              })}
            >
              Documentation
            </Link>
          </div>
        </FadeIn>
      </Container>
      <InfiniteMoving>
        {previewData.homepage.map((item, index) => (
          <InfiniteMovingItem key={index} className="md:w-[350px] relative">
            <Image
              src={item.image}
              alt=""
              height={500}
              width={400}
              className="border object-cover object-center rounded-lg border-border/50 "
            />
          </InfiniteMovingItem>
        ))}
      </InfiniteMoving>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="5 Pre-Built Demos"
          title="We carefully crafted all demos for your business needs"
          centered
          className="mb-12"
        >
          Discover a Range of Ready-Made Pages to Suit Every Need
        </SectionIntro>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewData.homepage.map((item, index) => (
            <div className="" key={index}>
              <Image
                src={item.image}
                alt={item.title}
                height={550}
                width={400}
                className="border border-border rounded-lg"
              />
              <h3 className="mt-3 font-bold text-center">{item.title}</h3>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">hwllo</Container>
    </main>
  );
}
