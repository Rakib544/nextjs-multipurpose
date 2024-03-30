import { BlogCard2 } from "@/components/blog-card";
import CallToAction from "@/components/call-to-action";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { GridPattern } from "@/components/grid-pattern";
import {
  AnalyticsIcon,
  DollarBagIcon,
  HomeIcon,
  MegaphoneIcon,
} from "@/components/icons";
import { List, ListItem } from "@/components/list";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { testimonials } from "@/lib/data/testimonials-data";
import Image from "next/image";
import Link from "next/link";

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

function WhatWeOffer() {
  return (
    <Container className="my-32">
      <SectionIntro
        title="We Offer Full range of digital marketing services!"
        eyebrow="What we offer"
      />
      <Tabs
        defaultValue="item-1"
        className="w-full grid grid-cols-12 gap-x-6 mt-8"
      >
        <TabsList className="col-span-3 flex flex-col h-full text-left items-start !justify-start bg-white border-r p-0">
          <TabsTrigger value="item-1" className="w-full py-3">
            Goal Tracking
          </TabsTrigger>
          <TabsTrigger value="item-2" className="w-full py-3">
            Keywords Rankings
          </TabsTrigger>
          <TabsTrigger value="item-3" className="w-full py-3">
            Site optimization
          </TabsTrigger>
          <TabsTrigger value="item-4" className="w-full py-3">
            Content Planning
          </TabsTrigger>
        </TabsList>
        <TabsContent value="item-1" className="col-span-9 ml-10">
          <h3 className="text-xl font-bold text-neutral-950 mb-2">
            How we tracking success
          </h3>
          <p className="text-base leading-7 text-neutral-700">
            SEO goals are important for measuring the success of your SEO
            strategy. To set good SEO goals, they should be specific,
            measurable, actionable, relevant, and time-bound (SMART).
          </p>

          <List className="mt-4">
            <ListItem>Improve Your Website Loading Speed.</ListItem>
            <ListItem>Get Your Site Inside of Featured Snippets</ListItem>
            <ListItem>Improve Dwell Time</ListItem>
            <ListItem>Use Site-links</ListItem>
          </List>
        </TabsContent>
        <TabsContent value="item-2" className="col-span-9 ml-10">
          <h3 className="text-xl font-bold text-neutral-950 mb-2">
            How we ranking keywords
          </h3>
          <p className="text-base leading-7 text-neutral-700">
            SEO goals are important for measuring the success of your SEO
            strategy. To set good SEO goals, they should be specific,
            measurable, actionable, relevant, and time-bound (SMART).
          </p>
          <ul className="mt-4 space-y-1 text-neutral-700 list-disc list-inside">
            <li>Improve Your Website Loading Speed</li>
            <li>Get Your Site Inside of Featured Snippets</li>
            <li>improve Dwell Time</li>
            <li>Use Site-links</li>
          </ul>
        </TabsContent>
        <TabsContent value="item-3" className="col-span-9 ml-10 rounded-xl">
          <h3 className="text-xl font-bold text-neutral-950 mb-2">
            How we site optimization
          </h3>
          <p className="text-base leading-7 text-neutral-700">
            SEO goals are important for measuring the success of your SEO
            strategy. To set good SEO goals, they should be specific,
            measurable, actionable, relevant, and time-bound (SMART).
          </p>
          <ul className="mt-4 space-y-1 text-neutral-700 list-disc list-inside">
            <li>Improve Your Website Loading Speed</li>
            <li>Get Your Site Inside of Featured Snippets</li>
            <li>improve Dwell Time</li>
            <li>Use Site-links</li>
          </ul>
        </TabsContent>
        <TabsContent value="item-4" className="col-span-9 ml-10">
          <h3 className="text-xl font-bold text-neutral-950 mb-2">
            How we plan for writing content
          </h3>
          <p className="text-base leading-7 text-neutral-700">
            SEO goals are important for measuring the success of your SEO
            strategy. To set good SEO goals, they should be specific,
            measurable, actionable, relevant, and time-bound (SMART).
          </p>
          <ul className="mt-4 space-y-1 text-neutral-700 list-disc list-inside">
            <li>Improve Your Website Loading Speed</li>
            <li>Get Your Site Inside of Featured Snippets</li>
            <li>improve Dwell Time</li>
            <li>Use Site-links</li>
          </ul>
        </TabsContent>
      </Tabs>
    </Container>
  );
}

function MainAbility() {
  return (
    <Container className="my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <SectionIntro
            eyebrow="Main Ability"
            title="We are able to play with SEO integrations"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              ratione! Quas officia voluptate maiores, deserunt odit amet rerum
              sapiente cumque!
            </p>
          </SectionIntro>
          <FadeIn>
            <Accordion type="single" className="mt-5" defaultValue="item-1">
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="font-bold text-neutral-950">
                  How can i make this happen?
                </AccordionTrigger>
                <AccordionContent className="text-base text-neutral-700 leading-7">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem, esse assumenda temporibus at perferendis hic
                  incidunt repudiandae aut necessitatibus quam?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="font-bold text-neutral-950">
                  How can i make this happen?
                </AccordionTrigger>
                <AccordionContent className="text-base text-neutral-700 leading-7">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem, esse assumenda temporibus at perferendis hic
                  incidunt repudiandae aut necessitatibus quam?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-0">
                <AccordionTrigger className="font-bold text-neutral-950">
                  How can i customize this?
                </AccordionTrigger>
                <AccordionContent className="text-base text-neutral-700 leading-7">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem, esse assumenda temporibus at perferendis hic
                  incidunt repudiandae aut necessitatibus quam?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-0">
                <AccordionTrigger className="font-bold text-neutral-950">
                  How can i achieve this?
                </AccordionTrigger>
                <AccordionContent className="text-base text-neutral-700 leading-7">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem, esse assumenda temporibus at perferendis hic
                  incidunt repudiandae aut necessitatibus quam?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>

        <FadeIn className="relative">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            height={400}
            width={300}
            className="aspect-[16/14] object-cover rounded-xl w-full"
          />
        </FadeIn>
      </div>
    </Container>
  );
}

function Testimonials() {
  return (
    <Container className="py-20 relative">
      <SectionIntro
        eyebrow="Testimonials"
        title="Loved by businesses worldwide."
      >
        <p className="text-neutral-700 leading-7 text-base">
          Our software is so simple that people can’t help but fall in love with
          it. Simplicity is easy when you just skip tons of mission-critical
          features.
        </p>
      </SectionIntro>

      <Carousel
        className="w-full md:max-w-full rounded-xl relative mt-12"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="mb-6">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              className="basis-full md:basis-[50%] bg-gradient-to-br from-indigo-50 to-white mx-2 py-2 md:py-10 rounded-xl border px-6 md:px-10"
              key={index}
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                quote={testimonial.quote}
                rating={testimonial.rating}
                role={testimonial.role}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-x-4 items-center">
          <CarouselPrevious className="!-left-4" />
          <CarouselNext className="!-right-4" />
        </div>
      </Carousel>
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
              <span className="font-medium items-center gap-x-2 mb-4 px-6 inline-flex py-2 rounded-full bg-indigo-50 text-sm text-indigo-700">
                <HomeIcon className="h-4 w-4" /> 55,000+ Business Trust
              </span>
              <h1 className="text-4xl pr-10 font-black tracking-tight md:text-5xl/tight">
                Boost Your{" "}
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  Online Presence
                </span>{" "}
                with Expert SEO Solutions
              </h1>
              <p className="mt-3 text-lg text-neutral-600 leading-8 max-w-xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-y-0 lg:grid-cols-3">
          <div className="relative after:hidden lg:after:block after:absolute after:h-2 after:w-full after:border-b-2 after:border-dashed after:top-10 after:-right-10 after:z-[-1] after:border-indigo-600">
            <span className="absolute h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
              01
            </span>
            <span className="h-20 w-20 bg-indigo-100 rounded-full relative mb-4 flex justify-center items-center">
              <MegaphoneIcon className="fill-indigo-600 text-indigo-600  h-10 w-10" />
            </span>

            <div className="pr-10">
              <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
                Better audiences
              </h3>
              <p className="text-neutral-600 text-base leading-7">
                Bndulgence diminution so discovered mr perfect off under folly
                death wrote cause her way spite. Plan upon yet way.
              </p>
            </div>
          </div>
          <div className="lg:mt-20 after:hidden lg:after:block after:-right-10 relative after:absolute after:h-2 after:w-full after:border-b-2 after:border-dashed after:top-10 after:z-[-1] after:border-indigo-600">
            <span className="absolute h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
              02
            </span>
            <div className="h-20 w-20 rounded-xl mb-4 relative bg-white">
              <span className="h-20 w-20 before:hidden lg:before:block rounded-full flex justify-center items-center bg-indigo-100  before:absolute before:h-full before:w-1 before:border-indigo-600 before:border-r-2 before:border-dashed before:-top-1/2 mt-2 before:left-1/2 before:z-[-1]">
                <AnalyticsIcon className="text-indigo-600 h-10 w-10" />
              </span>
            </div>
            <div className="pr-10">
              <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
                Better Analytics
              </h3>
              <p className="text-neutral-600 text-base leading-7">
                Bndulgence diminution so discovered mr perfect off under folly
                death wrote cause her way spite. Plan upon yet way.
              </p>
            </div>
          </div>
          <div className="lg:mt-40 relative">
            <span className="absolute h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
              03
            </span>
            <div className="h-20 w-20 mb-4 rounded-full relative">
              <span className="h-20 w-20 mb-4 before:hidden lg:before:block after:hidden lg:after:block rounded-full flex justify-center items-center bg-indigo-100 before:z-[-1] before:absolute before:h-full before:w-1 before:border-indigo-600 before:border-r-2 before:border-dashed before:-top-1/2 mt-2 before:left-1/2 after:z-[-1]">
                <DollarBagIcon className="h-10 w-10 text-indigo-600" />
              </span>
            </div>
            <div className="pr-10">
              <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
                Better outcomes
              </h3>
              <p className="text-neutral-600 text-base leading-7">
                Bndulgence diminution so discovered mr perfect off under folly
                death wrote cause her way spite. Plan upon yet way.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="my-32 py-20 bg-indigo-50">
        <Container>
          <div className="grid grid-cols-12 gap-y-6 lg:gap-x-20 items-center">
            <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="p-6 bg-white rounded-xl">
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
                        className: "!px-0 mt-4",
                      })}
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                  <div className="p-6 bg-white rounded-xl">
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
                        className: "!px-0 mt-2",
                      })}
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
                <div className="lg:mt-16 space-y-6">
                  <div className="p-6 bg-white rounded-xl">
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
                        className: "!px-0 mt-2",
                      })}
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
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
                  unde laboriosam ipsa numquam mollitia fugiat repellat
                  distinctio modi voluptatem officiis!
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
                  className="block w-full rounded-full border border-indigo-300 bg-white bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
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
      <WhatWeOffer />
      <MainAbility />
      <Testimonials />
      <Container className="mb-32">
        <SectionIntro eyebrow="NEWS & EVENTS" title="Check out our blog posts">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quo quibusdam omnis deleniti itaque praesentium enim repellendus,
            nisi porro odit?
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
          <BlogCard2 />
          <BlogCard2 />
          <BlogCard2 />
        </div>
      </Container>
      <CallToAction
        title="Ready to Boost Your Rankings?"
        subtitle="Contact Us Today to Get Started on Your SEO Journey"
        btnText="Contact us"
        link="/contact"
      />
    </main>
  );
}
