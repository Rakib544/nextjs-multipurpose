import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { ArrowRight } from "@/components/icons";
import { List, ListItem } from "@/components/list";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import WorkFlowCard from "@/components/workflow-card";
import serviceDetailsHeroImage from "@/images/service/service-details-hero.webp";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    title: "Uncovering Insights",
    description:
      "Delving deep to understand your audience, objectives, and market landscape.",
  },
  {
    title: "Creative Exploration",
    description:
      "Collaborative brainstorming to generate innovative solutions aligned with your vision.",
  },
  {
    title: "Bringing Ideas to Life",
    description:
      "Transforming concepts into interactive prototypes for detailed feedback and iterative refinement.",
  },
  {
    title: "Refining for Perfection",
    description:
      "Conducting rigorous testing to ensure seamless user experiences and continuous improvement.",
  },
  {
    title: "Launching Success",
    description:
      "Providing comprehensive support and maintenance to ensure continued excellence post-launch.",
  },
];

export const metadata: Metadata = {
  title: "Product design solution",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServiceDetails() {
  return (
    <div>
      <Container className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-16">
          <div>
            <PageIntro
              className="mt-0"
              eyebrow="Product Design Solution"
              pageTitle="Elevate your digital experience with expert UI/UX design services"
            >
              In the dynamic digital landscape, crafting remarkable user
              experiences is paramount. User Experience (UX) design and User
              Interface (UI) design are the twin pillars that shape the digital
              realm. While UX focuses on enhancing usability and satisfaction,
              UI ensures an intuitive and visually captivating interface.
            </PageIntro>

            <Link href="/contact-1" className={buttonVariants({ size: "lg" })}>
              Get A Free Audit <ArrowRight className="size-4 ml-1" />
            </Link>
          </div>
          <FadeIn>
            <Image
              src={serviceDetailsHeroImage}
              alt=""
              height={700}
              width={450}
              priority
              className="aspect-square block rounded-xl mt-8 object-cover w-full lg:w-auto lg:ml-auto"
            />
          </FadeIn>
        </div>
      </Container>

      <div className="mt-20 md:mt-32 ">
        <Container>
          <SectionIntro
            title="Unleash the power of exceptional design services"
            className="mb-12"
            eyebrow="Services"
          >
            Craft visually captivating interfaces, Understand user behavior
            deeply, Bring your vision to life with expert guidance
          </SectionIntro>

          <FadeInStagger
            faster
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <FadeIn className="p-4 md:p-8 bg-white shadow-xl shadow-gray-200 border-b-4 border-indigo-600">
              <h3 className="text-xl text-foreground font-extrabold">
                UI Design
              </h3>
              <p className="text-base text-muted-foreground leading-8 mt-4 ">
                Craft visually appealing interfaces that enhance user engagement
                and reflect your brand identity.
              </p>
            </FadeIn>
            <FadeIn className="p-4 md:p-8 bg-white shadow-xl shadow-gray-200 border-b-4 border-indigo-600">
              <h3 className="text-xl text-foreground font-extrabold">
                UX Research
              </h3>
              <p className="text-base text-muted-foreground leading-8 mt-4 ">
                Dive deep into user behavior and preferences to uncover insights
                that inform strategic design decisions.
              </p>
            </FadeIn>
            <FadeIn className="p-4 md:p-8 bg-white shadow-xl shadow-gray-200 border-b-4 border-indigo-600">
              <h3 className="text-xl text-foreground font-extrabold">
                Prototyping
              </h3>
              <p className="text-base text-muted-foreground leading-8 mt-4 ">
                Bring concepts to life with interactive prototypes that validate
                ideas and streamline development.
              </p>
            </FadeIn>
          </FadeInStagger>
        </Container>
      </div>
      <Container className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          <div>
            <div className="sticky top-24">
              <SectionIntro
                title="Our design process"
                className="mb-12"
                eyebrow="Process"
              >
                Discover how we turn ideas into reality, Step-by-step approach
                for seamless collaboration, Crafting solutions that exceed
                expectations
              </SectionIntro>
            </div>
          </div>
          <div>
            {processSteps.map((process, index) => (
              <WorkFlowCard key={index} id={(index + 1).toString()}>
                <div className="">
                  <h3 className="text-xl font-extrabold mb-2">
                    {process.title}
                  </h3>
                  <p className="text-base leading-8 text-muted-foreground pb-10">
                    {process.description}
                  </p>
                </div>
              </WorkFlowCard>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-32">
          <SectionIntro
            title="Service outcome"
            className="mb-8"
            eyebrow="Outcome"
          >
            Discover how we turn ideas into reality, Step-by-step approach for
            seamless collaboration, Crafting solutions that exceed expectations
          </SectionIntro>
          <FadeIn>
            <List>
              <ListItem>
                Leaving a lasting impression on your audience.
              </ListItem>
              <ListItem>
                Immerse your audience in an enchanting digital realm.
              </ListItem>
              <ListItem>Experience a flourishing digital ecosystem.</ListItem>
              <ListItem>Our designs bring your vision to life.</ListItem>
              <ListItem>
                Experience a 90% surge in product sales month over month.
              </ListItem>
            </List>
          </FadeIn>
        </div>
        <div className="mt-20 md:mt-32">
          <SectionIntro
            title="Service final result"
            className="mb-8"
            eyebrow="Result"
          ></SectionIntro>

          <StatList>
            <StatListItem label="Product Sales Growth Per Month" value="90%" />
            <StatListItem label="Product Sales Growth Per Month" value="90%" />
            <StatListItem label="Product Sales Growth Per Month" value="90%" />
          </StatList>
        </div>
      </Container>
    </div>
  );
}
