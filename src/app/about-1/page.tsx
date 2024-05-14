import { Border } from "@/components/border";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { CheckIcon } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
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
      <Container className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <SectionIntro
              eyebrow="About Company"
              className="mb-12"
              title="Nubi was founded in 2015 by a group of passionate people who believed in the power of design."
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              quam natus, unde harum fugiat laudantium eligendi mollitia
              reprehenderit? Quasi, inventore!
            </SectionIntro>

            <FadeIn className="mt-6 grid grid-cols-2 gap-6 border-t pt-10">
              <div>
                <span className="h-6 w-6 inline-flex justify-center items-center rounded-full bg-indigo-600 ">
                  <CheckIcon className="h-5 w-5 fill-white" />
                </span>
                <p className="text-xl font-bold mt-3">Expert Team Member</p>
                <p className="text-base text-gray-600 mt-2">
                  An SEO Optimization agency is company that specializes
                </p>
              </div>
              <div>
                <span className="h-6 w-6 inline-flex justify-center items-center rounded-full bg-indigo-600 ">
                  <CheckIcon className="h-5 w-5 fill-white" />
                </span>
                <p className="text-xl font-bold mt-3">Expert Team Member</p>
                <p className="text-base text-gray-600 mt-2">
                  An SEO Optimization agency is company that specializes
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn className="relative">
            <div className="absolute w-[210px] p-5 bottom-10 left-10 bg-indigo-600 text-white rounded-xl">
              <span className="block text-sm">We Have</span>
              <span className="text-lg font-bold mt-3 block leading-6">
                25+ Years of Experience
              </span>
            </div>
            <Image
              src="/about-intro.webp"
              alt=""
              height={300}
              width={400}
              className="block ml-auto w-full lg:w-[400px]"
            />
          </FadeIn>
        </div>
      </Container>
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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
            earum?
          </p>
        </SectionIntro>
        <Clients />
      </Container>
      <Testimonial1 />
    </div>
  );
}
