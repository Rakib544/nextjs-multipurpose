import { BlogCard2 } from "@/components/blog-card";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { ArrowRight } from "@/components/icons";
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
import WorkFlowCard from "@/components/workflow-card";
import { blogsData } from "@/lib/data/blog-data";
import { seoRevenueEarningProcess } from "@/lib/data/seo-agency";
import { testimonials } from "@/lib/data/testimonials-data";
import Link from "next/link";

const services = [
  {
    name: "Search engine optimization",
  },
  {
    name: "Paid search marketing",
  },
  {
    name: "Conversion rate optimization",
  },
  {
    name: "Social media marketing",
  },
];

export default function Demo3() {
  return (
    <div>
      <section
        className="w-full py-20 md:py-32 rounded-bl-[40px] rounded-br-[40px]"
        style={{
          backgroundImage: `linear-gradient(180deg,#6754E9 0%,#4534B8 100%)`,
        }}
      >
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl/tight font-extrabold text-white leading-tight max-w-3xl mx-auto">
            Elevate Your Digital Presence with Our Expertise
          </h1>
          <p className="text-base md:text-[17px] leading-8 text-gray-200 mt-6 max-w-2xl mx-auto">
            As a leading digital agency, we specialize in crafting captivating
            websites, developing powerful web applications, and delivering
            innovative digital solutions that drive your business forward.
          </p>
          <div className="mt-6">
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#"
            >
              Free consultation
            </Link>
          </div>
        </div>
      </section>
      <section>
        <Container className="mt-20">
          <p className="max-w-xs text-base font-medium text-gray-800 leading-7">
            Worked with 100+ clients around the world including:
          </p>
          <Clients />
        </Container>
      </section>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Who We are"
          title="Meet our passionate and innovative team of digital marketing experts"
          className="mb-12 !max-w-2xl lg:pr-12"
        >
          <p className="text-gray-800 leading-7">
            Numerique is a tech-enabled digital marketing solutions provider,
            and we create custom strategies for each of our clients based on
            their needs and goals.
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
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Services"
          title="Driving a better way of doing marketing"
          className="mb-12"
        >
          We deliver business impact through PR & marketing with a combination
          of intellectual curiosity, industry experience, urgency, and
          precision.
        </SectionIntro>
        <div>
          <Tabs
            defaultValue="tab-1"
            className="hidden lg:grid grid-cols-12 bg-[#F7F7FA] rounded-[40px]"
          >
            <TabsList className="flex flex-col gap-y-4 items-start col-span-4 bg-black h-full px-8 py-10 rounded-[40px]">
              {services.map((service, i) => (
                <TabsTrigger
                  key={i}
                  value={`tab-${i + 1}`}
                  className="border-none data-[state=active]:bg-primary w-full text-lg pl-10 pr-3 py-4 rounded-full !text-white font-bold flex justify-between group"
                >
                  <p className="text-wrap text-left">{service.name}</p>
                  <span className="inline-flex opacity-0 group-data-[state=active]:opacity-100  justify-center items-center size-14 rounded-full shrink-0 bg-black">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="tab-1" className="col-span-8 p-10">
              <h3 className="text-xl mb-4 font-bold leading-8">
                Increase your organic traffic by ranking high on search engines
                and AI discovery tools like ChatGPT
              </h3>
              <List>
                <ListItem>Keyword and competitor research</ListItem>
                <ListItem>SKAGS (single keyword ad groups)</ListItem>
                <ListItem>Negative keyword pruning</ListItem>
                <ListItem>Ad copy optimization</ListItem>
                <ListItem>Backlink Generation</ListItem>
              </List>
            </TabsContent>
            <TabsContent value="tab-2" className="col-span-8 p-10">
              <h3 className="text-xl mb-4 font-bold leading-8">
                Increase your organic traffic by ranking high on search engines
                and AI discovery tools like ChatGPT
              </h3>
              <List>
                <ListItem>Keyword and competitor research</ListItem>
                <ListItem>SKAGS (single keyword ad groups)</ListItem>
                <ListItem>Negative keyword pruning</ListItem>
                <ListItem>Ad copy optimization</ListItem>
                <ListItem>Backlink Generation</ListItem>
              </List>
            </TabsContent>
            <TabsContent value="tab-3" className="col-span-8 p-10">
              <h3 className="text-xl mb-4 font-bold leading-8">
                Increase your organic traffic by ranking high on search engines
                and AI discovery tools like ChatGPT
              </h3>
              <List>
                <ListItem>Keyword and competitor research</ListItem>
                <ListItem>SKAGS (single keyword ad groups)</ListItem>
                <ListItem>Negative keyword pruning</ListItem>
                <ListItem>Ad copy optimization</ListItem>
                <ListItem>Backlink Generation</ListItem>
              </List>
            </TabsContent>
            <TabsContent value="tab-4" className="col-span-8 p-10">
              <h3 className="text-xl mb-4 font-bold leading-8">
                Increase your organic traffic by ranking high on search engines
                and AI discovery tools like ChatGPT
              </h3>
              <List>
                <ListItem>Keyword and competitor research</ListItem>
                <ListItem>SKAGS (single keyword ad groups)</ListItem>
                <ListItem>Negative keyword pruning</ListItem>
                <ListItem>Ad copy optimization</ListItem>
                <ListItem>Backlink Generation</ListItem>
              </List>
            </TabsContent>
          </Tabs>
          <Accordion
            type="single"
            defaultValue="tab-1"
            className="bg-black rounded-[30px] p-4 sm:p-6 space-y-4 lg:hidden"
          >
            {services.map((service, i) => (
              <AccordionItem
                value={`tab-${i + 1}`}
                key={i}
                className="border-none"
              >
                <AccordionTrigger className="bg-black text-white data-[state=open]:bg-primary px-4 rounded-full text-[17px] font-semibold text-left">
                  {service.name}
                </AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-[30px] mt-2">
                  <h3 className="text-lg mb-4 font-bold">
                    Increase your organic traffic by ranking high on search
                    engines and AI discovery tools like ChatGPT
                  </h3>
                  <List className="space-y-1">
                    <ListItem>Keyword and competitor research</ListItem>
                    <ListItem>SKAGS (single keyword ad groups)</ListItem>
                    <ListItem>Negative keyword pruning</ListItem>
                    <ListItem>Ad copy optimization</ListItem>
                    <ListItem>Backlink Generation</ListItem>
                  </List>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full relative">
          <div>
            <div className="sticky top-6">
              <SectionIntro
                eyebrow="Our process"
                title="A systematic approach to digital marketing"
              >
                We start by conducting in-depth SEO audits to identify
                opportunities and areas for improvement. Our team analyzes your
                website&apos;s current performance, content, and technical setup
                to create a tailored strategy.
              </SectionIntro>
            </div>
          </div>
          <FadeIn>
            {seoRevenueEarningProcess.map((process, index) => (
              <WorkFlowCard key={index} id={(index + 1).toString()}>
                <span className="size-12 md:size-14  rounded-full bg-indigo-50 inline-flex justify-center items-center mb-4">
                  {process.icon}
                </span>
                <h3 className="text-lg sm:text-xl text-indigo-950 font-bold mb-2">
                  {process.title}
                </h3>
                <p className="text-base leading-8 pb-10 text-gray-600">
                  {process.description}
                </p>
              </WorkFlowCard>
            ))}
          </FadeIn>
        </div>
      </Container>
      <section className="bg-[#F7F7FA] rounded-[40px] py-20 md:py-32 mt-20 md:mt-32">
        <Container>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-24 lg:gap-x-20">
            <div>
              <SectionIntro
                eyebrow="Client Review"
                title="Here’s what our amazing clients are saying"
                className=""
              >
                Discover and be inspired by the heartfelt testimonials and
                success stories shared by our amazing clients, highlighting
                their journey and achievements with us.
              </SectionIntro>
            </div>
            <FadeIn className="relative">
              <div className="absolute -top-16 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="fill-primary text-primary size-10"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <Carousel
                className="w-full md:max-w-full rounded-xl relative"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="mb-2">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem className="basis-full" key={index}>
                      <TestimonialCard
                        className="!pt-0 pb-6"
                        image={testimonial.image}
                        name={testimonial.name}
                        quote={testimonial.quote}
                        rating={testimonial.rating}
                        role={testimonial.role}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-start gap-x-4 items-center">
                  <CarouselPrevious className="!left-4 lg:relative" />
                  <CarouselNext className="!-right-4 lg:relative" />
                </div>
              </Carousel>
            </FadeIn>
          </div>
        </Container>
      </section>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="NEWS & EVENTS"
          title="Digital marketing & industry insights"
          className="mb-12"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quo
          quibusdam omnis deleniti itaque praesentium enim repellendus, nisi
          porro odit?
        </SectionIntro>
        <FadeInStagger
          faster
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogsData.slice(3, 6).map((blog, index) => (
            <FadeIn key={index}>
              <BlogCard2
                createdAt={blog.createdAt}
                subtitle={blog.subtitle}
                title={blog.title}
                thumbnail={blog.thumbnail}
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  );
}
