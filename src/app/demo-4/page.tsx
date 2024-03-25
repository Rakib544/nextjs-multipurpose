import OurAwards from "@/components/awards";
import { BlogCard2 } from "@/components/blog-card";
import CallToAction from "@/components/call-to-action";
import CaseStudies1 from "@/components/case-studies-1";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { StarIcon } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import WhyChooseUs from "@/components/why-choose-us";
import userImage from "@/images/testimonial_3.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Demo4() {
  return (
    <div>
      <div className="bg-gradient-to-b from-indigo-100 to-white min-h-screen absolute top-0 h-screen w-full z-[-1]"></div>
      <Container className="py-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-4xl pr-10 font-bold md:text-4xl/tight max-w-lg">
              Your Digital Marketing Software Solution in One Place
            </h1>
            <p className="text-base leading-7 text-neutral-600 mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              praesentium et fuga quidem deleniti harum eum perferendis nemo,
              similique, magnam molestias nihil excepturi sit aliquid?
            </p>
            <button className="font-semibold text-sm inline-flex items-center gap-x-1 mt-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-neutral-950"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Watch Video
            </button>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="h-72 w-72 mx-auto rounded-xl bg-indigo-100 relative">
              <div className="">
                <Image
                  src="/user.png"
                  alt=""
                  height={1200}
                  width={900}
                  className="w-auto h-[400px] absolute bottom-0"
                />
              </div>
              <div className="absolute bottom-4 items-center flex gap-x-4 -left-24 shadow-2xl p-4 rounded-xl w-[300px] bg-white">
                <div className="shrink-0 border h-16 w-16 flex justify-center items-center rounded-full bg-red-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500 fill-current h-8 w-8"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-sm">Lorem, ipsum dolor.</span>
                  <p className="text-sm text-neutral-600">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="absolute top-4 -left-24 bg-white shadow-2xl p-4 rounded-xl">
                <div className="h-full w-full relative">
                  <Image
                    src={userImage}
                    alt=""
                    height={80}
                    width={80}
                    className="absolute rounded-full bg-white h-14 w-14 -left-10 -top-10 object-cover"
                  />
                  <p className="font-bold ml-4 text-sm">John Doe</p>
                  <div className="flex ml-4">
                    <StarIcon className="h-4  w-4 fill-yellow-400" />
                    <StarIcon className="h-4  w-4 fill-yellow-400" />
                    <StarIcon className="h-4  w-4 fill-yellow-400" />
                    <StarIcon className="h-4  w-4 fill-yellow-400" />
                    <StarIcon className="h-4  w-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Clients />
      <Container className="mt-32 ">
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/20 hover:bg-slate-950/40 transition duration-500 flex justify-center items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      <Container className="mt-32 py-20 bg-slate-100">
        <SectionIntro
          eyebrow="Services"
          title="Digital Marketing Strategy Transformation"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
          {[1, 2, 3].map((i) => (
            <div className="p-8 bg-white rounded-xl" key={i}>
              <h2 className="text-neutral-950 text-lg font-bold">
                Digital Services
              </h2>
              <p className="text-sm font-medium text-neutral-600 leading-7 mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores ipsum modi deserunt itaque. Cum, vero?
              </p>
              <Link
                href=""
                className={buttonVariants({
                  variant: "link",
                  className: "!px-0 mt-4 ",
                })}
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <WhyChooseUs />
      <CaseStudies1 />
      <Container className="my-32">
        <StatList>
          <StatListItem value="91k" label="Project Completed" />
          <StatListItem value="91k" label="Project Completed" />
          <StatListItem value="91k" label="Project Completed" />
          <StatListItem value="91k" label="Project Completed" />
        </StatList>
      </Container>

      <OurAwards />
      <Container className="my-32">
        <SectionIntro
          eyebrow="Our Blogs"
          title="Our latest news and articles"
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard2 />
          <BlogCard2 />
          <BlogCard2 />
        </div>
      </Container>
      <CallToAction
        title="We'd Be Interested In Learning More About Your Project."
        subtitle=""
        btnText="Contact us"
        link="/contact"
      />
    </div>
  );
}
