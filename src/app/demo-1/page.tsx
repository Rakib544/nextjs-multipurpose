import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import Features from "@/components/features";
import { GridPattern } from "@/components/grid-pattern";
import { Pricing1 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { Testimonials } from "@/components/testimonials";
import { buttonVariants } from "@/components/ui/button";
import Workflow from "@/components/work-flow";
import heroImage from "@/images/hero.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container className="mt-16 lg:mt-32 grid grid-cols-12 gap-x-4 items-center">
        <div className="absolute z-[-1] inset-0 top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern />
        </div>
        <FadeIn className="max-w-4xl mx-auto col-span-12 text-center order-2 lg:order-1 z-10">
          <h1 className="text-3xl font-bold tracking-tighter md:text-5xl/tight">
            Experience the workflow the best frontend teams love.
          </h1>
          <p className="mt-3 text-lg text-neutral-600 leading-8">
            We are developer studio working at the intersection of design and
            technology. It’s a really busy intersection though — a lot of our
            staff have been involved in hit and runs.
          </p>
          <div className="flex gap-4 mt-7 justify-center flex-col sm:flex-row">
            <Link
              href="/about-us"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Get Started
            </Link>
            <Link
              href="/about-us"
              className={buttonVariants({
                variant: "outline",

                size: "lg",
              })}
            >
              Free Trail
            </Link>
          </div>
        </FadeIn>
        <FadeIn className="col-span-12 md:col-span-6 mb-6 lg:mb-0 lg:p-4 z-10 order-1 lg:order-2 hidden">
          <Image src={heroImage} alt="" className="rounded" />
        </FadeIn>
      </Container>
      <Clients />
      <Features />
      <section className="max-w-xl mx-auto mt-12">
        <SectionIntro
          className="text-center"
          title="We are the best online software firm in the world."
        >
          <p>
            You can help customer in real time across all of your channels from
            email, social, website, IOS and android apps.
          </p>
        </SectionIntro>
      </section>
      <Container className="mt-16 mb-32 flex justify-center">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Workflow />
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
              Get 6 Month Free
            </Link>
          </FadeIn>
        </Container>
      </div>
      <Container className="py-20 sm:py-32">
        <div className="flex justify-center text-center">
          <SectionIntro
            title="We offer great prices for your
            business."
          >
            <p className="mt-4 text-slate-700">
              It doesn’t matter what size your business is, our software won’t
              work well for you.
            </p>
          </SectionIntro>
        </div>
        <Pricing1 />
      </Container>
      <Testimonials />
      {/* <Services services={caseStudies} /> */}
    </main>
  );
}
