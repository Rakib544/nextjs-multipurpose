import { Border } from "@/components/border";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { ArrowRight, TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { Button, buttonVariants } from "@/components/ui/button";
import imageDriesVincent from "@/images/team/dries-vincent.jpeg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpeg";
import imageMichaelFoster from "@/images/team/michael-foster.jpeg";
import { jobs } from "@/lib/data/job-data";
import { About5 } from "@/sections/about";
import Team from "@/sections/team";
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
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-6 items-center">
          <div>
            <PageIntro
              className="mt-20 mb-10"
              eyebrow="About Us"
              pageTitle={
                <>
                  <h1 className="text-3xl font-extrabold md:text-4.5xl/tight text-foreground">
                    Digital marketing solutions designed to{" "}
                    <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                      {" "}
                      <span className="relative">generate revenue</span>{" "}
                      <TextUnderline />
                    </span>{" "}
                    for your business
                  </h1>
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
              className="block w-full lg:w-auto lg:ml-auto rounded-2xl"
              src="/about-intro-1.webp"
              alt=""
            />
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-20">
        <Clients />
      </Container>

      <About5 />

      <Container className="mt-20 md:mt-32">
        <StatList>
          <StatListItem label="Loyal Customers" value="200K+" />
          <StatListItem label="Capital Raised" value="500M+" />
          <StatListItem label="Tracked Leads" value="2B+" />
          <StatListItem label="Active Users" value="450K+" />
        </StatList>
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
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-6">
          <FadeIn>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-muted-foreground">
                <span className="font-bold text-primary">Integrity. </span>
                We upholds the highest ethical standards in all our dealings and
                embrace creativity and strive for improvement.
              </p>
            </Border>
          </FadeIn>
          <FadeIn>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-muted-foreground">
                <span className="font-bold text-primary">Customer Focus. </span>
                We are dedicated to exceeding customer exceptions and delivering
                value.
              </p>
            </Border>
          </FadeIn>
          <FadeIn>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-muted-foreground">
                <span className="font-bold text-primary">Teamwork. </span>
                We collaborate openly, respect diversity, help each other and
                support each others success.
              </p>
            </Border>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Team />

      <Container className="my-20 md:my-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-12 items-center">
          <div>
            <SectionIntro
              eyebrow="Join our team"
              title="Opportunity to be part of a dynamic team"
            >
              <p>
                Apply now and become part of our innovative team dedicated to
                driving meaningful change. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Unde, rem!
              </p>
              <Link
                href="/career-1"
                className={buttonVariants({
                  variant: "link",
                  className: "!px-0 mt-4 items-center",
                })}
              >
                View open positions <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </SectionIntro>
          </div>
          <FadeInStagger faster className="space-y-4">
            {jobs.slice(0, 4).map((job) => (
              <FadeIn key={job.slug}>
                <Link
                  href="jobs/1"
                  className="flex justify-between items-center p-6 rounded-xl hover:bg-muted border border-border/50 bg-slate-50 group"
                >
                  <div>
                    <h3 className="font-bold text-lg md:text-xl">
                      Senior Software Engineer
                    </h3>
                    <p className="text-sm mt-1 text-muted-foreground">
                      {job.address}
                    </p>
                  </div>
                  <Button size="icon" variant="ghost">
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                  </Button>
                </Link>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </div>
  );
}
