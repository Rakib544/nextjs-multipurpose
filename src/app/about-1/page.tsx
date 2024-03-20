import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { GridPattern } from "@/components/grid-pattern";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import TeamCard1 from "@/components/team-card/team-card-1";
import { buttonVariants } from "@/components/ui/button";
import Workflow from "@/components/work-flow";
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
          title="We are the people who make up Studio H"
          centered
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea tempore
            voluptatibus dicta, officiis atque laboriosam est ab sunt, quia
            porro suscipit repellendus sapiente aliquam nihil vitae. At nobis
            iusto alias.
          </p>
        </PageIntro>
      </div>
      <Container className="mt-12 mb-20">
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
      </Container>
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
              className="aspect-[16/12] object-cover rounded-xl w-full"
            />
          </FadeIn>
          <div className="col-span-12 lg:col-span-6 max-w-lg">
            <SectionIntro
              eyebrow="Why Choose Us"
              title="Unlock opportunities Maximizing Potentials"
            >
              <p>
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design. We are a
                digital and branding company that believes in the power of
                creative strategy and along with great design. We are a digital
                and branding company that believes in the power of creative
                strategy and along with great design.
              </p>
              <Link href="" className={buttonVariants({ className: "mt-4" })}>
                Learn More &rarr;
              </Link>
            </SectionIntro>
          </div>
        </div>

        <Clients />
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-20 my-24 items-center">
          <div className="col-span-12 lg:col-span-6 max-w-lg order-2 lg:order-1">
            <SectionIntro
              eyebrow="Why Choose Us"
              title="Unlock opportunities Maximizing Potentials"
            >
              <p>
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design. We are a
                digital and branding company that believes in the power of
                creative strategy and along with great design. We are a digital
                and branding company that believes in the power of creative
                strategy and along with great design.
              </p>
              <Link href="" className={buttonVariants({ className: "mt-4" })}>
                Learn More &rarr;
              </Link>
            </SectionIntro>
          </div>
          <FadeIn className="col-span-12 lg:col-span-6 relative order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={400}
              width={500}
              className="aspect-[16/12] object-cover rounded-xl w-full"
            />
          </FadeIn>
        </div>

        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-20 my-24 items-center">
          <FadeIn className="col-span-12 lg:col-span-6 relative">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={400}
              width={500}
              className="aspect-[16/12] object-cover rounded-xl w-full"
            />
          </FadeIn>

          <div className="col-span-12 lg:col-span-6 max-w-lg">
            <SectionIntro
              eyebrow="Why Choose Us"
              title="Unlock opportunities Maximizing Potentials"
            >
              <p>
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design. We are a
                digital and branding company that believes in the power of
                creative strategy and along with great design. We are a digital
                and branding company that believes in the power of creative
                strategy and along with great design.
              </p>
              <Link href="" className={buttonVariants({ className: "mt-4" })}>
                Learn More &rarr;
              </Link>
            </SectionIntro>
          </div>
        </div>

        <Workflow />
        {/* <Team /> */}
      </Container>
    </div>
  );
}
