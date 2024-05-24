import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import aboutImage from "@/images/about/about-1.png";
import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import { About4 } from "@/sections/about";
import { Clients3 } from "@/sections/clients";
import CoreValues from "@/sections/core-values";
import { Fact4 } from "@/sections/facts";
import Team from "@/sections/team";
import { Testimonial1 } from "@/sections/testimonial";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  robots: {
    index: true,
    follow: true,
  },
};

export default function About1() {
  return (
    <div>
      <Container>
        <PageIntro
          className="max-w-4xl mx-auto z-10 mt-12 mb-0 md:mt-20"
          eyebrow="About us"
          pageTitle="Discover the story behind our agency that’s dedicated to bring your
            creative vision to life"
          centered
        >
          With a passion for technology and a commitment to excellence, we
          empower businesses to thrive in the digital landscape.
        </PageIntro>
      </Container>
      <Container>
        <FadeIn className="">
          <Image
            placeholder="blur"
            blurDataURL={generateBlurImageURL()}
            src={aboutImage}
            alt=""
            height={300}
            width={1200}
            className="object-cover"
          />
        </FadeIn>
      </Container>
      <Fact4 />
      <About4 />
      <CoreValues />
      <Team />
      <Clients3 />
      <Testimonial1 />
    </div>
  );
}
