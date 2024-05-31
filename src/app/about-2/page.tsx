import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import aboutImage from "@/images/about/about-3.webp";
import { About5 } from "@/sections/about";
import CoreValues from "@/sections/core-values";
import { Fact3 } from "@/sections/facts";
import JoinOurTeam from "@/sections/join-our-team";
import Team from "@/sections/team";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  robots: {
    index: true,
    follow: true,
  },
};

export default function About2() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-6 items-center">
          <div>
            <PageIntro
              className="mt-20 mb-10"
              eyebrow="About Us"
              pageTitle={
                <>
                  <span className="text-3xl font-extrabold md:text-4.5xl/tight text-foreground">
                    Digital marketing solutions designed to{" "}
                    <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                      {" "}
                      <span className="relative">generate revenue</span>{" "}
                      <TextUnderline />
                    </span>{" "}
                    for your business
                  </span>
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
              priority
              className="block w-full lg:w-auto lg:ml-auto rounded-2xl"
              src={aboutImage}
              alt=""
            />
          </FadeIn>
        </div>
      </Container>
      <Container className="mt-20">
        <Clients />
      </Container>
      <About5 />
      <Fact3 />
      <CoreValues />
      <Team />
      <JoinOurTeam />
    </div>
  );
}
