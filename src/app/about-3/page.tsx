import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { GridPattern } from "@/components/grid-pattern";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import TeamCard2 from "@/components/team-card/team-card-2";
import { buttonVariants } from "@/components/ui/button";
import imageDriesVincent from "@/images/team/dries-vincent.jpeg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpeg";
import imageMichaelFoster from "@/images/team/michael-foster.jpeg";
import Image from "next/image";
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

export default function About2() {
  return (
    <div>
      <div>
        <div className="absolute inset-0 z-[-1] top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern />
        </div>
        <PageIntro
          eyebrow="About Us"
          title="Reimagining the power of Finance Service"
        >
          <p>
            Studio is a leading provider of innovative software solutions
            designed to streamline [industry/sector] operations and empower
            businesses to achieve their goals. Founded in [year], our company
            has quickly established itself as a trusted partner for
            organizations seeking cutting-edge technology solutions that drive
            efficiency, productivity, and growth.
          </p>
        </PageIntro>
      </div>
      <Container className="my-32">
        <StatList>
          <StatListItem
            label="of sharing architectural landscapes"
            value="50+ Years"
          />
          <StatListItem
            label="of sharing architectural landscapes"
            value="100+ Projects"
          />
          <StatListItem
            label="of sharing architectural landscapes"
            value="20+ Awards"
          />
          <StatListItem
            label="of sharing architectural landscapes"
            value="99+ Success"
          />
        </StatList>
      </Container>
      <Container>
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-20 my-24 items-center">
          <FadeIn className="col-span-12 lg:col-span-6 relative">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={400}
              width={300}
              className="aspect-[16/14] object-cover rounded-xl w-full"
            />
          </FadeIn>
          <div className="col-span-12 lg:col-span-6 max-w-lg">
            <SectionIntro
              eyebrow="Why Choose Us"
              title="Unlock opportunities Maximizing Potentials"
            >
              <p>
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-x-2">
                  <div className="font-semibold text-neutral-950">{">"}</div>
                  <div>
                    <h3 className="font-bold text-neutral-950">
                      Proven Track Record
                    </h3>
                    <p className="leading-7">
                      With 7 years of industry experience, it has a proven track
                      record of delivering innovative software solutions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-x-2">
                  <div className="font-semibold text-neutral-950">{">"}</div>
                  <div>
                    <h3 className="font-bold text-neutral-950">
                      Proven Track Record
                    </h3>
                    <p className="leading-7">
                      With 7 years of industry experience, it has a proven track
                      record of delivering innovative software solutions.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="" className={buttonVariants({ className: "mt-4" })}>
                Learn More &rarr;
              </Link>
            </SectionIntro>
          </div>
        </div>
      </Container>
      <Container className="my-32">
        <SectionIntro
          title="Empowering Excellence: Fostering Innovation, Integrity, and Collaboration"
          eyebrow="Core Values"
        >
          <p>
            Discover Our Commitment to Driving Growth and Making a Positive
            Impact in Every Interaction
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
          <div>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-neutral-600">
                <span className="font-bold text-neutral-950">Integrity. </span>
                We prioritize the needs and satisfaction of our customers above
                all else, striving to exceed expectations in every interaction.
              </p>
            </Border>
          </div>
          <div>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-neutral-600">
                <span className="font-bold text-neutral-950">Integrity. </span>
                We prioritize the needs and satisfaction of our customers above
                all else, striving to exceed expectations in every interaction.
              </p>
            </Border>
          </div>
          <div>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-neutral-600">
                <span className="font-bold text-neutral-950">Integrity. </span>
                We prioritize the needs and satisfaction of our customers above
                all else, striving to exceed expectations in every interaction.
              </p>
            </Border>
          </div>
        </div>
      </Container>
      <Container className="mt-12 mb-20">
        <SectionIntro eyebrow="Behind the block" title="Our Leadership Team">
          <p>
            Unveiling the Pillars of Success: Meet the Visionaries Leading Our
            Journey Towards Excellence.
          </p>
        </SectionIntro>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 mt-12">
          {peoples.map((person) => (
            <li key={person.name}>
              <TeamCard2
                image={person.image.src}
                name={person.name}
                role={person.role}
              />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
