import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { Faq2 } from "@/sections/faq";
import { Features6 } from "@/sections/features";
import Image from "next/image";

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

      <Features6 />
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          title="The best package just for you!"
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
