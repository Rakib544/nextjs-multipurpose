import OurAwards from "@/components/awards";
import { BlogCard2 } from "@/components/blog-card";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import Portfolios from "@/components/portfolio";
import { SectionIntro } from "@/components/section-intro";
import TeamCard1 from "@/components/team-card/team-card-1";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import imageDriesVincent from "@/images/team/dries-vincent.jpeg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpeg";
import imageMichaelFoster from "@/images/team/michael-foster.jpeg";
import { blogsData } from "@/lib/data/blog-data";
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
      <div
        className="absolute min-h-screen w-full top-0 z-[-2] bg-cover"
        style={{
          backgroundImage:
            "url(https://tailwindui.com/img/beams-basic-transparent.png)",
        }}
      ></div>
      <span className="absolute h-80 w-80 top-40 bg-gradient-to-r from-indigo-50 to-white  z-[-1] rotate-45 -left-52"></span>
      <Container className="relative overflow-x-hidden pt-6 md:pt-16">
        <span className="text-9xl -rotate-12 font-black absolute z-[-1] text-indigo-50 lg:bottom-48 -ml-10 lg:left-1/2">
          Design Studio
        </span>

        <div className="grid grid-cols-12 items-center gap-y-6 lg:gap-x-10 z-10 ">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 pb-10">
            <div className="md:max-w-xl">
              <h1 className="text-3xl font-black text-indigo-950 md:text-4.5xl/tight">
                Transform{" "}
                <span className="-ml-1.5 inline-block bg-indigo-600 px-2 text-white rotate-2">
                  Your Brand&apos;s
                </span>{" "}
                Narrative with Remarkable Design
              </h1>
              <p className="text-lg mt-4 text-gray-600 leading-8">
                Elevate your brand&apos;s storytelling capabilities and
                captivate your target audience with our exceptional and
                innovative design solutions tailored to meet your unique needs.
              </p>
              <Link
                href=""
                className={buttonVariants({
                  size: "lg",
                  className: "mt-4 bg-indigo-600 text-white",
                })}
              >
                Explore our works <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 relative z-[-1] ">
            <div className="h-10 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0"></div>
            <Image src="/design-studio.png" alt="" height={577} width={517} />
            <div className="absolute right-0 bg-white shadow-xl p-5 rounded-xl bottom-20">
              <p className="font-bold">5000+</p>
              <p className="text-sm text-gray-600 font-medium">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <Container className="mt-20 text-center">
          <p className="block font-display uppercase text-xs tracking-wider font-bold text-primary">
            Our journey story{" "}
          </p>
          <h2 className="text-3xl max-w-5xl leading-normal font-bold mb-6 mt-3 mx-auto">
            Leading digital agency with solid design and development expertise.
            We build ready made websites, mobile applications, and elaborate
            online business services.
          </h2>
          <Link
            href="/about-1"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Learn More
          </Link>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur officiis ipsa veniam perspiciatis harum facere.
            </p>
          </SectionIntro>
          <div className="space-y-4">
            {services.map((service, index) => (
              <Link
                href="/services/1"
                key={service.id}
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
            ))}
          </div>
        </Container>
      </div>
      <OurAwards />
      <Portfolios />

      <Container className="mt-20 md:mt-32">
        <SectionIntro
          className="mb-12"
          eyebrow="Reviews"
          title="Here’s what our amazing clients are saying"
        ></SectionIntro>
        <InfiniteMoving>
          {testimonials.map((testimonial) => (
            <InfiniteMovingItem
              key={testimonial.id}
              className="md:w-[350px] bg-slate-50"
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

      <Container className="mt-20 md:mt-32">
        <OurTeam />
      </Container>
      <Container className="mt-20 md:mt-32">
        <Clients />
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro eyebrow="Our Blogs" title="Latest News & Updates.">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ratione consectetur iusto hic sapiente perspiciatis delectus unde
            labore quia quam!
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {blogsData.slice(0, 3).map((blog, index) => (
            <BlogCard2
              createdAt={blog.createdAt}
              subtitle={blog.subtitle}
              title={blog.title}
              thumbnail={blog.thumbnail}
              key={index}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
