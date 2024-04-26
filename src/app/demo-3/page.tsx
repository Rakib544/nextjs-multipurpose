import { BlogCard2 } from "@/components/blog-card";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import WorkFlowCard from "@/components/workflow-card";
import { blogsData } from "@/lib/data/blog-data";
import { seoRevenueEarningProcess } from "@/lib/data/seo-agency";
import Link from "next/link";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-12">
          <SectionIntro
            eyebrow="Who We are"
            title="Introducing our passionate and innovative team of digital marketing experts"
            className="!max-w-lg"
          />
          <div>
            <p className="text-gray-800 leading-7">
              Numerique is a tech-enabled digital marketing solutions provider,
              and we create custom strategies for each of our clients based on
              their needs and goals.
            </p>
            <Link
              href="/about-1"
              className="mt-3 hover:text-primary border-b-2 border-primary inline-flex gap-x-1 items-center tracking-wide text-xs uppercase font-semibold "
            >
              Learn more about us
            </Link>
          </div>
        </div>
        <StatList>
          <StatListItem label="years of experience" value="10+" />
          <StatListItem label="satisfied clients" value="5k+" />
          <StatListItem label="successful campaigns" value="10K+" />
          <StatListItem label="fund raised by our clients" value="$350mn" />
        </StatList>
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
