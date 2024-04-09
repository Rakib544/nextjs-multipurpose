import { Border } from "@/components/border";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { CheckIcon } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import TeamCard1 from "@/components/team-card/team-card-1";
import { TestimonialCard } from "@/components/testimonial-card";
import { buttonVariants } from "@/components/ui/button";
import {
  CallToAction,
  CallToActionHeading,
  CallToActionMenus,
  CallToActionSubHeading,
} from "@/components/ui/call-to-action";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import imageDriesVincent from "@/images/team/dries-vincent.jpeg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpeg";
import imageMichaelFoster from "@/images/team/michael-foster.jpeg";
import { testimonials } from "@/lib/data/testimonials-data";
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

export default function About1() {
  return (
    <div>
      <FadeIn className="max-w-5xl mx-auto text-center z-10 mt-12 mb-0 md:mt-20 px-2">
        <p className="uppercase text-xs tracking-wider text-center font-bold text-indigo-600 mb-3">
          About Us
        </p>
        <h1 className="text-2xl font-extrabold md:text-4.5xl/tight text-indigo-950">
          Discover the story behind our agency that’s dedicated to bring your
          creative vision to life
        </h1>
        <p className="mt-3 mb-6 max-w-2xl mx-auto text-base md:text-lg text-gray-600 md:leading-8">
          With a passion for technology and a commitment to excellence, we
          empower businesses to thrive in the digital landscape.
        </p>
      </FadeIn>
      <Image
        src="https://sandbox.ui-lib.com/_next/image?url=%2Fimg%2Fphotos%2Fbg12.jpg&w=3840&q=75"
        alt=""
        height={400}
        width={1400}
      />
      <Container className="mt-20 md:mt-32">
        <StatList>
          <StatListItem label="Loyal Customers" value="200K+" />
          <StatListItem label="Capital Raised" value="500M+" />
          <StatListItem label="Tracked Leads" value="2B+" />
          <StatListItem label="Active Users" value="450K+" />
        </StatList>
      </Container>
      <Container className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <SectionIntro
              eyebrow="About Company"
              className="mb-12"
              title="Nubi was founded in 2015 by a group of passionate people who believed in the power of design."
            >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci quam natus, unde harum fugiat laudantium eligendi
                mollitia reprehenderit? Quasi, inventore!
              </p>
            </SectionIntro>

            <FadeIn className="mt-6 grid grid-cols-2 gap-6 border-t pt-10">
              <div>
                <span className="h-6 w-6 inline-flex justify-center items-center rounded-full bg-indigo-600 ">
                  <CheckIcon className="h-5 w-5 fill-white" />
                </span>
                <p className="text-base font-bold mt-3">Expert Team Member</p>
                <p className="text-sm text-gray-600 mt-1 leading-6">
                  An SEO Optimization agency is company that specializes
                </p>
              </div>
              <div>
                <span className="h-6 w-6 inline-flex justify-center items-center rounded-full bg-indigo-600 ">
                  <CheckIcon className="h-5 w-5 fill-white" />
                </span>
                <p className="text-base font-bold mt-3">Expert Team Member</p>
                <p className="text-sm text-gray-600 mt-1 leading-6">
                  An SEO Optimization agency is company that specializes
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="relative">
            <div className="absolute w-[210px] p-5 bottom-10 left-10 bg-indigo-600 text-white rounded-xl">
              <span className="block text-sm">We Have</span>
              <span className="text-lg font-bold mt-3 block leading-6">
                25+ Years of Experience
              </span>
            </div>
            <Image
              src="/about-intro.webp"
              alt=""
              height={300}
              width={400}
              className="block ml-auto"
            />
          </div>
        </div>
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

      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Partnership"
          title="We are happy to work with all largest brands"
          className="mb-12"
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
            earum?
          </p>
        </SectionIntro>
        <Clients />
      </Container>

      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Clients Feedback"
          title="Our Customer Feedback"
          className="mb-12"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            incidunt a? Saepe.
          </p>
        </SectionIntro>
        <InfiniteMoving>
          {testimonials.map((testimonial) => (
            <InfiniteMovingItem
              key={testimonial.id}
              className="md:w-[350px] bg-gradient-to-br from-indigo-50 to-white"
            >
              <TestimonialCard
                image={testimonial.image}
                quote={testimonial.quote}
                name={testimonial.name}
                rating={testimonial.rating}
                role={testimonial.role}
              />
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </Container>
      <CallToAction className="mt-20 md:mt-32 mb-0 md:mb-32">
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
