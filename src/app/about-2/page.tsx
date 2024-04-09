import { Border } from "@/components/border";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import TeamCard1 from "@/components/team-card/team-card-1";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  CallToAction,
  CallToActionHeading,
  CallToActionMenus,
  CallToActionSubHeading,
} from "@/components/ui/call-to-action";
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
            <FadeIn className="z-10 mt-20 mb-10">
              <p className="uppercase text-xs tracking-wider font-bold text-indigo-600 mb-3">
                About Us
              </p>
              <h1 className="text-3xl font-extrabold md:text-4.5xl/tight text-indigo-950">
                Digital marketing solutions designed to{" "}
                <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                  {" "}
                  <span className="relative">generate revenue</span>{" "}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.58em] w-full z-[-1] fill-indigo-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                </span>{" "}
                for your business
              </h1>
              <p className="mt-3 mb-6 text-lg text-gray-600 leading-8">
                With a passion for technology and a commitment to excellence, we
                empower businesses to thrive in the digital landscape. We see
                more and more ads in search results and not enough care for the
                people who are actually creating content.
              </p>

              {/* <div className="flex gap-4 mt-7 flex-col sm:flex-row">
            <Link href="/career-1" className={buttonVariants({ size: "lg" })}>
              Join our team
            </Link>
            <Link
              href="/portfolios"
              className={buttonVariants({ variant: "link", size: "lg" })}
            >
              See portfolios &rarr;
            </Link>
          </div> */}
            </FadeIn>
          </div>
          <div>
            <Image
              height={450}
              width={450}
              className="block ml-auto rounded-2xl"
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
      <div className="py-20 my-32 bg-indigo-50">
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
                  className="flex justify-between items-center p-4 bg-white rounded-xl border hover:bg-slate-50"
                >
                  <div>
                    <h3 className="font-bold">Senior Software Engineer</h3>
                    <p className="text-sm text-gray-600">{job.address}</p>
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
      <CallToAction className="mt-20 mb-0 md:my-32">
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
      </CallToAction>
    </div>
  );
}
