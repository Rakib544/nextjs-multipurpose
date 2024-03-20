import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { GridPattern } from "@/components/grid-pattern";
import { Pricing } from "@/components/pricing";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
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
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-20 my-24 items-center">
          <FadeIn className="col-span-12 lg:col-span-6 relative">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={400}
              width={300}
              className="aspect-[16/14] object-cover rounded-xl w-full"
            />
          </FadeIn>
          <div className="col-span-12 lg:col-span-6 max-w-lg">
            <SectionIntro
              eyebrow="Why Choose Us"
              title="Unlock opportunities Maximizing Potentials"
            >
              <p>
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-x-2">
                  <div className="font-semibold text-neutral-950">{">"}</div>
                  <div>
                    <h3 className="font-bold text-neutral-950">
                      Proven Track Record
                    </h3>
                    <p className="leading-7">
                      With 7 years of industry experience, it has a proven track
                      record of delivering innovative software solutions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-x-2">
                  <div className="font-semibold text-neutral-950">{">"}</div>
                  <div>
                    <h3 className="font-bold text-neutral-950">
                      Proven Track Record
                    </h3>
                    <p className="leading-7">
                      With 7 years of industry experience, it has a proven track
                      record of delivering innovative software solutions.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="" className={buttonVariants({ className: "mt-4" })}>
                Learn More &rarr;
              </Link>
            </SectionIntro>
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
      <Container className="mt-16 lg:mt-20">
        <div className="absolute z-[-1] inset-0 top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern />
        </div>

        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-7">
            <FadeIn className="order-2 lg:order-1 z-10">
              <h1 className="text-4xl pr-10 font-bold md:text-5xl/tight">
                Unlock Your Online Potential with Expert SEO Services.
              </h1>
              <p className="mt-3 text-lg text-neutral-600 leading-8">
                Elevating Your Online Presence: Our Strategies Drive Traffic,
                Boost Rankings, and Enhance Visibility in Search Engine Results.
              </p>
              <div className="flex gap-4 mt-7">
                <Link
                  href="/about-us"
                  className={buttonVariants({
                    size: "lg",
                  })}
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="col-span-12 lg:col-span-5 relative">
            <Image
              src="/header1.png"
              alt=""
              height={300}
              width={300}
              className="object-cover object-center bg-white shadow-xl block mx-auto rounded-xl"
            />

            <Image
              src="/header2.png"
              alt=""
              height={200}
              width={300}
              className="object-cover object-center bg-white shadow-xl block mx-auto rounded-xl mt-4 ml-4"
            />
          </div>
        </div>
      </Container>
      <Container className="my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative after:absolute after:h-2 after:w-full after:border-b-2 after:border-dashed after:top-10 after:-right-10 after:z-[-1]">
            <span className="absolute h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
              01
            </span>
            <span className="h-20 w-20 rounded-full  block mb-4 bg-white">
              <Image
                src="/marketing.svg"
                alt=""
                height={100}
                width={100}
                className="border-2 border-dashed z-10 rounded-full p-1"
              />
            </span>
            <div className="pr-10">
              <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
                Better Audiance
              </h3>
              <p className="text-neutral-600 text-base leading-7">
                Bndulgence diminution so discovered mr perfect off under folly
                death wrote cause her way spite. Plan upon yet way.
              </p>
            </div>
          </div>
          <div className="mt-20 after:-right-10 relative after:absolute after:h-2 after:w-full after:border-b-2 after:border-dashed after:top-10 after:z-[-1] ">
            <span className="absolute h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
              02
            </span>
            <div className="h-20 w-20 rounded-xl mb-4 relative bg-white">
              <span className="h-20 w-20 rounded-full block bg-white  before:absolute before:h-full before:w-1 before:border-r-2 before:border-dashed before:-top-1/2 mt-2 before:left-1/2 before:z-[-1]">
                <Image
                  src="/analytics.svg"
                  alt=""
                  height={100}
                  width={100}
                  className="z-10 border-2 border-dashed rounded-full p-1"
                />
              </span>
            </div>
            <div className="pr-10">
              <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
                Better Audiance
              </h3>
              <p className="text-neutral-600 text-base leading-7">
                Bndulgence diminution so discovered mr perfect off under folly
                death wrote cause her way spite. Plan upon yet way.
              </p>
            </div>
          </div>
          <div className="mt-40 relative">
            <span className="absolute h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
              03
            </span>
            <div className="h-20 w-20 mb-4 rounded-full relative bg-white">
              <span className="h-20 w-20 mb-4 rounded-full block bg-white before:z-[-1] before:absolute before:h-full before:w-1 before:border-r-2 before:border-dashed before:-top-1/2 mt-2 before:left-1/2 after:z-[-1]">
                <Image
                  src="/earn-money.svg"
                  alt=""
                  height={200}
                  width={200}
                  className="border-2 border-dashed z-10 rounded-full p-1"
                />
              </span>
            </div>
            <div className="pr-10">
              <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
                Better Audiance
              </h3>
              <p className="text-neutral-600 text-base leading-7">
                Bndulgence diminution so discovered mr perfect off under folly
                death wrote cause her way spite. Plan upon yet way.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="my-32">
        <div className="grid grid-cols-12 gap-20 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="p-6 bg-slate-50 border rounded-xl">
                  <Image
                    src="https://uithemez.com/i/funnelio/home2_seo/assets/img/icons/f1.svg"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <h3 className="mt-5 font-bold text-lg">SEO Services</h3>
                  <p className="text-base leading-7 mt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vero incidunt cupiditate iusto!
                  </p>
                  <Link
                    href=""
                    className={buttonVariants({
                      variant: "link",
                      className: "px-0 mt-4",
                    })}
                  >
                    Read More &rarr;
                  </Link>
                </div>
                <div className="p-6 bg-slate-50 border rounded-xl">
                  <Image
                    src="https://uithemez.com/i/funnelio/home2_seo/assets/img/icons/f1.svg"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <h3 className="mt-5 font-bold text-lg">SEO Services</h3>
                  <p className="text-base leading-7 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error fugit est.
                  </p>
                  <Link
                    href=""
                    className={buttonVariants({
                      variant: "link",
                      className: "px-0 mt-2",
                    })}
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
              <div className="mt-16 space-y-6">
                <div className="p-6 bg-slate-50 border rounded-xl">
                  <Image
                    src="https://uithemez.com/i/funnelio/home2_seo/assets/img/icons/f1.svg"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <h3 className="mt-5 font-bold text-lg">SEO Services</h3>
                  <p className="text-base leading-7 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error fugit est.
                  </p>
                  <Link
                    href=""
                    className={buttonVariants({
                      variant: "link",
                      className: "px-0 mt-2",
                    })}
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <SectionIntro
              eyebrow="Core Features"
              title="So what do company do exactly?"
            >
              <p>
                We’re a full-stack firm that can help you from strategy to
                launch, and anywhere in between.
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                unde laboriosam ipsa numquam mollitia fugiat repellat distinctio
                modi voluptatem officiis!
              </p>
            </SectionIntro>
            <h4 className="mt-8 font-bold text-base mb-2">
              Easily Check Your SEO Score Now
            </h4>
            <div className="relative">
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
          </div>
        </div>
      </Container>
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
      <Container>
        <Pricing />
      </Container>
      <LetsTalk />
      <Clients />
    </main>
  );
}
