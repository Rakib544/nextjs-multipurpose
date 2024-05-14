import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import TeamCard1 from "@/components/team-card/team-card-1";
import { Button, buttonVariants } from "@/components/ui/button";
import imageDriesVincent from "@/images/team/dries-vincent.jpeg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpeg";
import imageMichaelFoster from "@/images/team/michael-foster.jpeg";
import OurAwards from "@/sections/awards";
import Blogs from "@/sections/blogs";
import { Hero5 } from "@/sections/hero";
import OurPortfolios from "@/sections/our-portfolios";
import { Testimonial1 } from "@/sections/testimonial";
import Link from "next/link";

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

function OurTeam() {
  return (
    <div>
      <SectionIntro
        eyebrow="Our Team"
        title="Our excellence team that can digitalize your brand"
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ex quis
          earum possimus tempore dolore praesentium ad esse non iste!
        </p>
      </SectionIntro>
      <div className="mt-12 grid grid-cols-12 gap-6">
        {peoples.map((people) => (
          <div
            key={people.name}
            className="col-span-12 md:col-span-6 lg:col-span-3"
          >
            <TeamCard1
              name={people.name}
              role={people.role}
              image={people.image.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CreativeDigitalStudio() {
  return (
    <div>
      <Hero5 />
      <div>
        <Container className="mt-20 text-center">
          <FadeIn>
            <p className="block font-display uppercase text-xs tracking-wider font-bold text-primary">
              Our journey story{" "}
            </p>
            <h2 className="text-3xl max-w-5xl leading-normal font-bold mb-6 mt-3 mx-auto">
              Leading digital agency with solid design and development
              expertise. We build ready made websites, mobile applications, and
              elaborate online business services.
            </h2>
            <Link
              href="/about-1"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Learn More
            </Link>
          </FadeIn>
        </Container>
      </div>
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
      <OurAwards />
      <OurPortfolios />

      <Testimonial1 />

      <Container className="mt-20 md:mt-32">
        <OurTeam />
      </Container>
      <Container className="mt-20 md:mt-32">
        <Clients />
      </Container>
      <Blogs />
    </div>
  );
}
