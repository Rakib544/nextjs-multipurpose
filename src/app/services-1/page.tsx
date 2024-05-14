import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Faq2 } from "@/sections/faq";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Expand functionality effortlessly with versatile plugins and extensions tailored to enhance your analytics experience",
    image: "/ui-ux.webp",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Expand functionality effortlessly with versatile plugins and extensions tailored to enhance your analytics experience",
    image: "/web-development.webp",
  },
  {
    id: 4,
    title: "App Development",
    description:
      "Expand functionality effortlessly with versatile plugins and extensions tailored to enhance your analytics experience",
    image: "/app-development.webp",
  },
];

export default function Services1() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-6 items-center">
          <div>
            <PageIntro
              className="mt-20 mb-10"
              eyebrow="Our Services"
              pageTitle={
                <>
                  Transform your digital
                  <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                    {" "}
                    <span className="relative">online presence</span>{" "}
                    <TextUnderline />
                  </span>{" "}
                  with our services
                </>
              }
            >
              With a passion for technology and a commitment to excellence, we
              empower businesses to thrive in the digital landscape. We see more
              and more ads in search results and not enough care for the people
              who are actually creating content.
            </PageIntro>
          </div>
          <FadeIn>
            <Image
              height={450}
              width={450}
              className="block w-full lg:w-auto lg:ml-auto rounded-2xl"
              src="/about-intro-1.webp"
              alt=""
            />
          </FadeIn>
        </div>
      </Container>

      <div className="bg-indigo-600 py-20 md:py-32 rounded-[40px] mt-20 md:mt-32 ">
        <Container className="relative">
          <SectionIntro
            className="mb-12"
            eyebrow="Services"
            invert
            title="Our comprehensive digital strategy transformation"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            officiis ipsa veniam perspiciatis harum facere.
          </SectionIntro>
          <FadeInStagger faster className="space-y-4">
            {services.map((service, index) => (
              <FadeIn key={service.id}>
                <Link
                  href="/services/1"
                  className="block group border-t border-indigo-500"
                >
                  <div className="grid grid-cols-12 gap-6 items-end py-4">
                    <div className="col-span-12 md:col-span-4">
                      <span className="text-xl font-bold text-white/80">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {service.title}
                      </h3>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                      <p className="text-base leading-7 text-white/80">
                        {service.description}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex justify-end md:justify-center">
                      <Button
                        size="icon"
                        className="border-[1.5px] group-hover:bg-white group-hover:text-indigo-600"
                      >
                        &rarr;
                      </Button>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </div>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          title="The Best Package Just For You!"
          eyebrow="Pricing Plan"
          className="mb-6"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
            soluta?
          </p>
        </SectionIntro>
        <Pricing2 />
      </Container>
      <Faq2 />
    </div>
  );
}
