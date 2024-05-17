import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import TeamCard1 from "@/components/team-card/team-card-1";

import imageDriesVincent from "@/images/team/dries-vincent.jpeg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpeg";
import imageMichaelFoster from "@/images/team/michael-foster.jpeg";
import { Metadata } from "next";
import Image from "next/image";

const peoples = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    image: { src: imageLeslieAlexander },
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    image: { src: imageMichaelFoster },
  },
  {
    name: "Dries Vincent",
    role: "Partner & Business Relations",
    image: { src: imageDriesVincent },
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    image: { src: imageMichaelFoster },
  },
];

export const metadata: Metadata = {
  title: "Teams",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Teams() {
  return (
    <div>
      <Container>
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-x-0 gap-y-6 items-center">
          <div>
            <PageIntro
              className="mt-20 mb-10"
              eyebrow="Our Team"
              pageTitle={
                <>
                  We bring a wealth of
                  <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                    {" "}
                    <span className="relative"> experience</span>{" "}
                    <TextUnderline />
                  </span>{" "}
                  from the wide range of backgrounds
                </>
              }
            >
              Our philosophy is simple; hire great people and give them the
              resources and support to do their best work.
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
      <Container className="mt-20 md:mb-32">
        <div>
          <SectionIntro
            eyebrow="Meet the Visionaries"
            title="Leadership Team"
            className="mb-12"
          >
            Meet the Visionaries Behind [Your Company Name]
          </SectionIntro>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {peoples.map((person) => (
              <li key={person.name}>
                <TeamCard1
                  image={person.image.src}
                  name={person.name}
                  role={person.role}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionIntro
            eyebrow="Meet the Team"
            title="Our Team"
            className="mb-12 mt-20 md:mt-32"
          >
            Meet the Talented Individuals Driving [Your Company Name] Forward
          </SectionIntro>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {peoples.map((person) => (
              <li key={person.name}>
                <TeamCard1
                  image={person.image.src}
                  name={person.name}
                  role={person.role}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
