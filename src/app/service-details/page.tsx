import { Container } from "@/components/container";
import { List, ListItem } from "@/components/list";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
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

export default function ServiceDetails() {
  return (
    <div>
      <Container className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-16">
          <div>
            <p className="uppercase text-xs tracking-wider font-bold text-indigo-600 mb-3">
              Product Design Solution
            </p>
            <h1 className="text-3xl font-extrabold md:text-4xl/tight text-indigo-950">
              Elevate Your Digital Experience with Expert UI/UX Design Services
            </h1>
            <p className="text-base text-neutral-800 leading-8 mt-3 mb-6">
              In the dynamic digital landscape, crafting remarkable user
              experiences is paramount. User Experience (UX) design and User
              Interface (UI) design are the twin pillars that shape the digital
              realm. While UX focuses on enhancing usability and satisfaction,
              UI ensures an intuitive and visually captivating interface.
            </p>
            <Link href="/audit" className={buttonVariants({ size: "lg" })}>
              Get A Free Audit <span className="ml-2">&rarr;</span>
            </Link>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1568584263125-bf8f0a77d51c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={700}
              width={450}
              className="aspect-square block rounded-xl mt-8 object-cover w-full lg:w-auto lg:ml-auto"
            />
          </div>
        </div>
      </Container>

      <div className="mt-20 md:mt-32 ">
        <Container>
          <SectionIntro
            title="Unleash the Power of Exceptional Design Services"
            className="mb-12"
            eyebrow="Services"
          >
            Craft visually captivating interfaces, Understand user behavior
            deeply, Bring your vision to life with expert guidance
          </SectionIntro>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 md:p-8 bg-white shadow-xl shadow-gray-200 border-b-4 border-indigo-600">
              <h3 className="text-xl text-indigo-950 font-extrabold">
                UI Design
              </h3>
              <p className="text-base text-gray-600 leading-8 mt-4 ">
                Craft visually appealing interfaces that enhance user engagement
                and reflect your brand identity.
              </p>
            </div>
            <div className="p-4 md:p-8 bg-white shadow-xl shadow-gray-200 border-b-4 border-indigo-600">
              <h3 className="text-xl text-indigo-950 font-extrabold">
                UX Research
              </h3>
              <p className="text-base text-gray-600 leading-8 mt-4 ">
                Dive deep into user behavior and preferences to uncover insights
                that inform strategic design decisions.
              </p>
            </div>
            <div className="p-4 md:p-8 bg-white shadow-xl shadow-gray-200 border-b-4 border-indigo-600">
              <h3 className="text-xl text-indigo-950 font-extrabold">
                Prototyping
              </h3>
              <p className="text-base text-gray-600 leading-8 mt-4 ">
                Bring concepts to life with interactive prototypes that validate
                ideas and streamline development.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mt-20 md:mt-32">
          <SectionIntro
            title="Our Design Process"
            className="mb-12"
            eyebrow="Process"
          >
            Discover how we turn ideas into reality, Step-by-step approach for
            seamless collaboration, Crafting solutions that exceed expectations
          </SectionIntro>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((process, index) => (
              <div key={index} className="">
                <span className="inline-flex justify-center items-center size-12 text-lg font-bold rounded-full bg-indigo-600 text-white">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">{process.title}</h3>
                <p className="text-base leading-8 text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 md:mt-32">
          <SectionIntro
            title="Service Outcome"
            className="mb-8"
            eyebrow="Outcome"
          >
            Discover how we turn ideas into reality, Step-by-step approach for
            seamless collaboration, Crafting solutions that exceed expectations
          </SectionIntro>
          <List>
            <ListItem>Leaving a lasting impression on your audience.</ListItem>
            <ListItem>
              Immerse your audience in an enchanting digital realm.
            </ListItem>
            <ListItem>Experience a flourishing digital ecosystem.</ListItem>
            <ListItem>Our designs bring your vision to life.</ListItem>
            <ListItem>
              Experience a 90% surge in product sales month over month.
            </ListItem>
          </List>
        </div>
        <div className="mt-20 md:mt-32">
          <SectionIntro
            title="Service Final Result"
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
      {/* <CallToAction className="mt-20 mb-0 md:mb-32 md:mt-32">
        <CallToActionHeading>
          Ready to elevate your digital product?
        </CallToActionHeading>
        <CallToActionSubHeading>
          Contact us today to learn more about our digital product design
          services and how we can help bring your vision to life.
        </CallToActionSubHeading>
        <CallToActionMenus>
          <Link
            href="/contact-1"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Contact us
          </Link>
        </CallToActionMenus>
      </CallToAction> */}
    </div>
  );
}
