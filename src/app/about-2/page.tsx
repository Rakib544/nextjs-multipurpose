import { Border } from "@/components/border";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import TeamCard1 from "@/components/team-card/team-card-1";
import { Button, buttonVariants } from "@/components/ui/button";
import WhyChooseUs from "@/components/why-choose-us";
import imageDriesVincent from "@/images/team/dries-vincent.jpeg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpeg";
import imageMichaelFoster from "@/images/team/michael-foster.jpeg";
import { jobs } from "@/lib/data/job-data";
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
                  <h1 className="text-3xl font-extrabold md:text-4.5xl/tight text-indigo-950">
                    Digital marketing solutions designed to{" "}
                    <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
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
          <div>
            <Image
              height={450}
              width={450}
              className="block w-full lg:w-auto lg:ml-auto rounded-2xl"
              src="/about-intro-1.webp"
              alt=""
            />
          </div>
        </div>
      </Container>

      <Container className="mt-20">
        <Clients />
      </Container>

      <WhyChooseUs />

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
          <p>
            Discover Our Commitment to Driving Growth and Making a Positive
            Impact in Every Interaction
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-6">
          <div>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-gray-600">
                <span className="font-bold text-indigo-600">Integrity. </span>
                We upholds the highest ethical standards in all our dealings and
                embrace creativity and strive for improvement.
              </p>
            </Border>
          </div>
          <div>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-gray-600">
                <span className="font-bold text-indigo-600">
                  Customer Focus.{" "}
                </span>
                We are dedicated to exceeding customer exceptions and delivering
                value.
              </p>
            </Border>
          </div>
          <div>
            <Border position="left" className="pl-8">
              <p className="text-base leading-8 text-gray-600">
                <span className="font-bold text-indigo-600">Teamwork. </span>
                We collaborate openly, respect diversity, help each other and
                support each others success.
              </p>
            </Border>
          </div>
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          title="Experience Team Member"
          className="mb-12"
          eyebrow="Team Member"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis ea
          natus repellendus error ipsam.
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
        <div className="flex justify-center mt-12">
          <Link href="/teams" className={buttonVariants({ variant: "link" })}>
            View All Team &rarr;
          </Link>
        </div>
      </Container>
      <div className="py-20 my-32 bg-[#F1EEFF]">
        <Container>
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
                    className: "!px-0 mt-4",
                  })}
                >
                  View open positions &rarr;
                </Link>
              </SectionIntro>
            </div>
            <div className="space-y-4">
              {jobs.slice(0, 4).map((job) => (
                <Link
                  href="jobs/1"
                  key={job.slug}
                  className="flex justify-between items-center p-6 bg-white rounded-xl hover:bg-slate-50"
                >
                  <div>
                    <h3 className="font-bold text-lg md:text-xl">
                      Senior Software Engineer
                    </h3>
                    <p className="text-sm mt-1 text-gray-600">{job.address}</p>
                  </div>
                  <Button size="icon" variant="ghost">
                    &rarr;
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {/* <CallToAction className="mt-20 mb-0 md:my-32">
        <CallToActionHeading>
          Let&apos;s maximize your online impact!
        </CallToActionHeading>
        <CallToActionSubHeading>
          More than just buzzwords for marketing concepts of SEO.
        </CallToActionSubHeading>
        <CallToActionMenus>
          <Link
            href=""
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Get In Touch
          </Link>
          <Link
            href=""
            className={buttonVariants({
              variant: "link",
              size: "lg",
              className: "!text-white",
            })}
          >
            Book a Demo &rarr;
          </Link>
        </CallToActionMenus>
      </CallToAction> */}
    </div>
  );
}
