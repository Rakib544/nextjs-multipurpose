import OurAwards from "@/components/awards";
import { BlogCard2 } from "@/components/blog-card";
import CallToAction from "@/components/call-to-action";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { GridPattern } from "@/components/grid-pattern";
import Portfolios from "@/components/portfolio";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import TeamCard1 from "@/components/team-card/team-card-1";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imageDriesVincent from "@/images/team/dries-vincent.jpeg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpeg";
import imageMichaelFoster from "@/images/team/michael-foster.jpeg";
import Link from "next/link";
import TestingSection from "./testing";

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

function OurTeam() {
  return (
    <div>
      <SectionIntro
        eyebrow="Our Team"
        title="Our Excellence Team That Can Digitalize Your Brand"
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
      <div className="absolute z-[-1] inset-0 top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern />
      </div>
      <Container className="mt-20">
        <FadeIn>
          <h1 className="font-extrabold text-8xl max-w-2xl tracking-tight">
            Creative Design Studio
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="max-w-xl text-base leading-8 mt-6">
            Welcome to our digital agency! We specialize in helping businesses
            like yours succeed online. From website design and development to
            digital marketing and advertising, we have the tools.
          </p>
          <Link
            href=""
            className={buttonVariants({ size: "lg", className: "mt-8" })}
          >
            Explore our works <span className="ml-2">&rarr;</span>
          </Link>
        </FadeIn>
      </Container>
      <Container className="my-32">
        <SectionIntro
          className="mb-12"
          title="We Providing Digital Services in USA."
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            assumenda voluptatibus quos voluptate asperiores impedit veniam sed
            illum soluta explicabo?
          </p>
        </SectionIntro>
        <StatList>
          <StatListItem value="10K" label="Project Completed" />
          <StatListItem value="180" label="Skilled professionals" />
          <StatListItem value="500" label="Visited Conference" />
          <StatListItem value="50K" label="Happy Clients" />
        </StatList>
      </Container>
      <Container className="my-32">
        <TestingSection />
      </Container>
      <OurAwards />
      <Portfolios />
      <div className="my-32 py-20 bg-neutral-950 text-white">
        <Container>
          <div className="grid grid-cols-12 gap-20">
            <div className="col-span-12 lg:col-span-5 relative">
              <SectionIntro
                invert
                title="Some Of Our Respected Happy Clients Says"
              ></SectionIntro>
            </div>
            <div className="col-span-12 lg:col-span-12">
              <div>
                <Carousel opts={{ loop: true }}>
                  <CarouselContent>
                    {[1, 2, 3, 4].map((i) => (
                      <CarouselItem key={i}>
                        <p className="leading-7 text-center">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Dolorum, modi quaerat. Eligendi ab, itaque
                          tenetur earum necessitatibus ipsum assumenda veniam
                          consequatur sequi sed animi rem porro neque voluptas,
                          nisi maxime corporis fuga laudantium eum nesciunt
                          temporibus ducimus et. In, explicabo.
                        </p>

                        <h4 className="text-center text-lg mt-6 font-semibold">
                          Rakib
                        </h4>
                        <p className="text-center text-sm text-neutral-300">
                          Fullstack Developer.
                        </p>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div>
                    <CarouselNext variant="default" />
                    <CarouselPrevious variant="default" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="mt-32">
        <OurTeam />
      </Container>
      <Clients />
      <Container className="mt-32">
        <SectionIntro eyebrow="Our Blogs" title="Latest News & Updates.">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ratione consectetur iusto hic sapiente perspiciatis delectus unde
            labore quia quam!
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <BlogCard2 />
          <BlogCard2 />
          <BlogCard2 />
        </div>
      </Container>
      <div className="mt-32">
        <CallToAction
          title=" We would Be Interested In Learning More About Your Project."
          subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid quam facilis temporibus cum hic voluptatibus, a laborum consequatur illum."
          btnText="Contact Us"
          link="/contact"
        />
      </div>
    </div>
  );
}
