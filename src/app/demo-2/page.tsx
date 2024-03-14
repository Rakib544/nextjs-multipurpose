import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { Pricing } from "@/components/pricing";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { seoServices } from "@/lib/data/seo-services";
import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <section className="grid grid-cols-12 gap-4 mt-14">
      {seoServices.map((service) => (
        <div
          className="col-span-12 md:col-span-6 lg:col-span-3"
          key={service.id}
        >
          <p>Icon</p>
          <h3 className="text-lg font-bold leading-7 text-neutral-950 mb-2">
            {service.title}
          </h3>
          <p className="text-base leading-7 text-neutral-700">
            {service.description}
          </p>
        </div>
      ))}
    </section>
  );
}

function Analyze() {
  return (
    <section className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-6">
        <SectionIntro
          eyebrow="Analyze Now"
          title="Wonder how much faster you site can go? Easily check you SEO score now"
        >
          <p className="text-base leading-7 text-neutral-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            explicabo temporibus? Voluptatem dignissimos odit totam earum animi
            sequi, libero laudantium! Autem, sunt eveniet? Necessitatibus id
            consequatur itaque soluta et cum dolore eaque eius excepturi nostrum
            doloribus ea quia, ipsum commodi.
          </p>
        </SectionIntro>
        <Container>
          <div className="relative mt-6">
            <input
              type="link"
              placeholder="Enter Website URL"
              aria-label="Enter Website URL"
              className="block w-full rounded-full border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
            />
            <div className="absolute inset-y-1 right-1 flex justify-end">
              <button
                type="submit"
                aria-label="Submit"
                className="flex w-full px-6 h-full items-center justify-center rounded-full bg-neutral-950 text-white transition hover:bg-neutral-800"
              >
                Check
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <Image src="/banner-2.svg" height={450} width={450} alt="" />
      </div>
    </section>
  );
}

function Strategy() {
  return (
    <Container className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-6">
        <SectionIntro
          eyebrow="Our Strategy"
          title="Here are 3 working steps to organize our business projects."
        >
          <p className="text-base leading-7 text-neutral-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            minima, inventore tempore odio aut repellendus ipsa ipsam enim
            facilis ipsum dolorem, suscipit aspernatur dolores eius iste. Quo
            molestias sed sint.
          </p>
          <p className="text-base leading-7 text-neutral-700 mt-2 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            dolorum alias libero mollitia ipsa sit?
          </p>
        </SectionIntro>
        <Container>
          <Link href="" className={buttonVariants({ size: "lg" })}>
            Learn More
          </Link>
        </Container>
      </div>
      <Container className="col-span-12 lg:col-span-6 space-y-6">
        <div className="border p-6 rounded-xl flex gap-x-6 relative">
          <span className="text-3xl font-bold">01</span>
          <div>
            <h3 className="font-bold text-lg mb-1 text-neutral-950">
              Lorem ipsum dolor sit.
            </h3>
            <p className="text-base leading-7 text-neutral-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam.
            </p>
            <Image
              src="/arrowOdd.svg"
              alt=""
              height={10}
              width={170}
              className="absolute top-20 -right-28 rotate-90"
            />
          </div>
        </div>
        <div className="border p-6 rounded-xl flex gap-x-6 relative">
          <span className="text-3xl font-bold">01</span>
          <div>
            <h3 className="font-bold text-lg mb-1 text-neutral-950">
              Lorem ipsum dolor sit.
            </h3>
            <p className="text-base leading-7 text-neutral-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam.
            </p>
            <Image
              src="/arrowOdd.svg"
              alt=""
              height={10}
              width={170}
              className="absolute top-36 -right-28 rotate-90"
            />
          </div>
        </div>
        <div className="border p-6 rounded-xl flex gap-x-6">
          <span className="text-3xl font-bold">01</span>
          <div>
            <h3 className="font-bold text-lg mb-1 text-neutral-950">
              Lorem ipsum dolor sit.
            </h3>
            <p className="text-base leading-7 text-neutral-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam.
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
}

function WhyChooseUs() {
  return (
    <section className="my-32">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <Image src="/banner-2.svg" alt="" height={450} width={450} />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SectionIntro
              title="We bring solutions to make life easier for clients"
              eyebrow="Why choose us?"
            />
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="mt-6"
            >
              <AccordionItem className="border-none" value="item-1">
                <AccordionTrigger className="font-semibold text-base text-neutral-950">
                  Professional Design
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-neutral-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                  quibusdam quae accusantium ea repudiandae, rerum, deleniti
                  pariatur iste omnis quod, ipsa placeat neque ullam. Nisi eius
                  ullam optio hic cum.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="border-none" value="item-2">
                <AccordionTrigger className="font-semibold text-base text-neutral-950">
                  Professional Design
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-neutral-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                  quibusdam quae accusantium ea repudiandae, rerum, deleniti
                  pariatur iste omnis quod, ipsa placeat neque ullam. Nisi eius
                  ullam optio hic cum.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="border-none" value="item-3">
                <AccordionTrigger className="font-semibold text-base text-neutral-950">
                  Professional Design
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-neutral-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                  quibusdam quae accusantium ea repudiandae, rerum, deleniti
                  pariatur iste omnis quod, ipsa placeat neque ullam. Nisi eius
                  ullam optio hic cum.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LetsTalk() {
  return (
    <Container className="my-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <Image src="/banner-2.svg" alt="" height={450} width={450} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <SectionIntro
            eyebrow="Lets Talk"
            title="Lets make sometihng great together. We are trusted by over 3000+ clients"
          >
            <p className="text-base leading-7 text-neutral-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, minima, inventore tempore odio aut repellendus ipsa
              ipsam enim facilis ipsum dolorem, suscipit aspernatur dolores eius
              iste. Quo molestias sed sint.
            </p>
          </SectionIntro>
          <Link href="" className={buttonVariants({ size: "lg" })}>
            Join Us
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default function Demo2() {
  return (
    <main>
      <Container>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6">
            <Image src="/banner-2.svg" height={450} width={450} alt="" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl/tight">
              Grow Your Business With Our Solutions
            </h1>
            <p className="mt-3 text-lg text-neutral-600 leading-8 mb-4">
              We Help you clients to increase their website traffic, ranking and
              visibility in search result.
            </p>
            <Link href="" className={buttonVariants({ size: "lg" })}>
              Try It For Free
            </Link>
          </div>
        </div>
      </Container>
      <div className="my-32">
        <SectionIntro
          title="The service we offer is specially designed to meet your needs."
          eyebrow="What we do?"
        />
        <Container>
          <Services />
        </Container>
      </div>
      <div className="my-32">
        <Analyze />
      </div>
      <div className="my-32">
        <Strategy />
      </div>
      <WhyChooseUs />
      <Container className="mt-16 mb-32">
        <SectionIntro
          className="mb-20"
          title="We are the best online software firm in the world."
        >
          <p>
            You can help customer in real time across all of your channels from
            email, social, website, IOS and android apps.
          </p>
        </SectionIntro>
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Pricing />
      <LetsTalk />
      <Clients />
    </main>
  );
}
