import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import serviceHeroImage from "@/images/service/hero.webp";
import { Faq2 } from "@/sections/faq";
import { Features6 } from "@/sections/features";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  robots: {
    index: true,
    follow: true,
  },
};

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
                  <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
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
              src={serviceHeroImage}
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
