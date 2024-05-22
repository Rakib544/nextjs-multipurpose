import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight, TextUnderline } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import { previewData } from "@/lib/data/preview-data";
import { usedTechnology } from "@/lib/data/technology-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <FadeIn className="max-w-3xl mx-auto text-center z-10 mt-20 mb-12">
          <h1 className="text-3xl font-black md:text-4xl/tight text-foreground">
            A Next-Generation Multipurpose Template with Stunning Dashboards,
            Built with
            <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
              {" "}
              <span className="relative">Next.js & Tailwind</span>{" "}
              <TextUnderline />
            </span>{" "}
          </h1>
          <p className="mt-3 mb-5 text-lg text-foreground leading-8 max-w-xl mx-auto">
            Agenify is a highly SEO-optimized Next.js template, enabling you to
            build your website swiftly with easy-to-use, copy-paste blocks.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="#demos"
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
          <InfiniteMovingItem key={index} className="md:w-[324px] relative">
            <Image
              placeholder="blur"
              blurDataURL={generateBlurImageURL()}
              src={item.image}
              alt=""
              height={425}
              width={324}
              className="border object-cover object-center rounded-lg border-border/50 "
            />
          </InfiniteMovingItem>
        ))}
      </InfiniteMoving>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Features"
          centered
          title="Optimize Your Development with Agenify"
          className="mb-12"
        >
          Discover the extensive selection of home pages, inner pages, dashboard
          layouts, and customizable blocks we offer to streamline your website
          development.
        </SectionIntro>
        <div className="max-w-4xl mx-auto">
          <StatList>
            <StatListItem label="Neatly coded pages" value="65+" />
            <StatListItem label="Pre-made blocks" value="28+" />
            <StatListItem label="Components" value="160+" />
            <StatListItem label="Dashboard pages" value="22+" />
          </StatList>
        </div>
      </Container>
      <Container id="demos" className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="5 Pre-Built Demos"
          title="We carefully crafted all demos for your business needs"
          centered
          className="mb-12"
        >
          Discover a range of ready-made pages to suit every need
        </SectionIntro>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewData.homepage.map((item, index) => (
            <Link
              href={item.href}
              className=" group bg-slate-100 p-6 rounded-[30px] flex flex-col justify-between"
              key={index}
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  placeholder="blur"
                  blurDataURL={generateBlurImageURL()}
                  src={item.image}
                  alt={item.title}
                  height={425}
                  width={324}
                  className="object-cover object-center w-full transition duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm mt-2 font-bold text-center group-hover:text-primary">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow={`${previewData.innerPages.length} Inner Pages`}
          title="Different layout inner pages"
          centered
          className="mb-12"
        >
          Offer a wide range of services to help businesses establish.
        </SectionIntro>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewData.innerPages.map((item, index) => (
            <Link
              href={item.href}
              className=" group bg-slate-100 p-6 rounded-[30px] flex flex-col justify-between"
              key={index}
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  placeholder="blur"
                  blurDataURL={generateBlurImageURL()}
                  src={item.image}
                  alt={item.title}
                  height={425}
                  width={324}
                  className="object-cover object-center w-full transition duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm mt-2 font-bold text-center group-hover:text-primary">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow={`${previewData.dashboard.length} Dashboard Pages`}
          title="We also provided beautiful, modern and clean dashboard"
          centered
          className="mb-12"
        >
          See the versatile and user-friendly dashboard in action, designed to
          cater to your business needs.
        </SectionIntro>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewData.dashboard.map((item, index) => (
            <Link
              href={item.href}
              className=" group bg-slate-100 p-6 rounded-[30px] flex flex-col justify-between"
              key={index}
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  placeholder="blur"
                  blurDataURL={generateBlurImageURL()}
                  src={item.image}
                  alt={item.title}
                  height={425}
                  width={324}
                  className="object-cover object-center w-full transition duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm mt-2 font-bold text-center group-hover:text-primary">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro title="Tools & Technologies" centered>
          Using top UI frameworks and the latest technologies, build your dream
          app with our platform, supported by regular updates. Explore the tech
          we employ.
        </SectionIntro>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 items-center gap-6">
          {usedTechnology.map((technology, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-4 text-center h-full flex items-center justify-center group"
            >
              <Link href={technology.href} target="_blank">
                <span className="flex justify-center">{technology.icon}</span>
                <p className="group-hover:text-primary font-bold text-sm mt-3 text-muted-foreground">
                  {technology.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-gray-100 mt-20 md:mt-32 rounded-tr-[40px] rounded-tl-[40px]">
        <Container className="py-20 py:my-32">
          <SectionIntro
            eyebrow="Let's hurry up now and"
            title="Create your agency with amazing site!"
            centered
          >
            One-time­ payment­ &­ get­ free­ life­ time­ license­ and­update
          </SectionIntro>
          <div className="flex justify-center">
            <Link
              href="mailto:md.rakib10122003@gmail.com"
              className={buttonVariants({ size: "lg", className: "mt-4" })}
            >
              Contact Now
            </Link>
          </div>
        </Container>
      </div>
    </main>
  );
}
