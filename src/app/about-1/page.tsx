import { Border } from "@/components/border";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { About4 } from "@/sections/about";
import Team from "@/sections/team";

import { Testimonial1 } from "@/sections/testimonial";
import Image from "next/image";

export default function About1() {
  return (
    <div>
      <Container>
        <PageIntro
          className="max-w-5xl mx-auto z-10 mt-12 mb-0 md:mt-20"
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
            src="/test.png"
            alt=""
            height={300}
            width={1200}
            className="object-cover"
          />
        </FadeIn>
      </Container>
      <Container className="mt-20 md:mt-32">
        <StatList>
          <StatListItem label="Loyal Customers" value="200K+" />
          <StatListItem label="Capital Raised" value="500M+" />
          <StatListItem label="Tracked Leads" value="2B+" />
          <StatListItem label="Active Users" value="450K+" />
        </StatList>
      </Container>
      <About4 />
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          title="Guiding principles that define our company"
          eyebrow="Core Values"
          className="mb-12"
        >
          Discover Our Commitment to Driving Growth and Making a Positive Impact
          in Every Interaction
        </SectionIntro>
        <FadeInStagger
          faster
          className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-6"
        >
          <FadeIn>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-gray-600">
                <span className="font-bold text-indigo-600">Integrity. </span>
                We upholds the highest ethical standards in all our dealings and
                embrace creativity and strive for improvement.
              </p>
            </Border>
          </FadeIn>
          <FadeIn>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-gray-600">
                <span className="font-bold text-indigo-600">
                  Customer Focus.{" "}
                </span>
                We are dedicated to exceeding customer exceptions and delivering
                value.
              </p>
            </Border>
          </FadeIn>
          <FadeIn>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-gray-600">
                <span className="font-bold text-indigo-600">Teamwork. </span>
                We collaborate openly, respect diversity, help each other and
                support each others success.
              </p>
            </Border>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Team />
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Partnership"
          title="We are happy to work with all largest brands"
          className="mb-12"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
          earum?
        </SectionIntro>
        <Clients />
      </Container>
      <Testimonial1 />
    </div>
  );
}
