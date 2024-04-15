import { Container } from "@/components/container";
import {
  AnalyticsIcon,
  CheckIcon,
  ClockIcon,
  MagicIcon,
  StandingPeopleIcon,
  StarIcon,
  UsersIcon,
} from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { BlogCard2 } from "@/components/blog-card";
import { SectionIntro } from "@/components/section-intro";
import Testimonials2 from "@/components/testimonials-2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import Workflow2 from "@/components/work-flow-2";
import userImage2 from "@/images/testimonial_2.jpg";
import userImage1 from "@/images/testimonial_3.jpg";
import { blogsData } from "@/lib/data/blog-data";

const features = [
  {
    id: 1,
    icon: <StandingPeopleIcon className="h-5 w-5 text-indigo-600" />,
    title: "Track Your Workouts",
    description:
      "Log your exercises, set goals, and track your progress over time",
  },
  {
    id: 2,
    title: "Personalized Plans",
    icon: <MagicIcon className="h-5 w-5" />,
    description:
      "Receive customized workout and nutrition plans based on your goals and preferences",
  },
  {
    id: 3,
    title: "Activity Tracking",
    icon: <ClockIcon className="text-indigo-600 h-5 w-5" />,
    description:
      "Monitor your daily activity levels, steps, and calories burned effortlessly",
  },
  {
    id: 4,
    title: "Insights & Analytics",
    icon: <AnalyticsIcon className="h-5 w-5 text-indigo-600" />,
    description:
      "Gain valuable insights into your fitness journey with detailed analytics and reports",
  },
  {
    id: 5,
    title: "Community Support",
    description:
      "Connect with like-minded individuals, share achievements, and stay motivated together.",
    icon: <UsersIcon className="h-5 w-5 text-indigo-600" />,
  },
];

const whyChooseData = [
  {
    id: 1,
    title: "Digital Comprehensive Analytics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita maiores et velit quae sequi iure alias beatae magnam aliquam?",
  },
  {
    id: 2,
    title: "Personalized Plans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita maiores et velit quae sequi iure alias beatae magnam aliquam?",
  },
  {
    id: 3,
    title: "Community Feedbacks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita maiores et velit quae sequi iure alias beatae magnam aliquam?",
  },
];

export default function AppLanding() {
  return (
    <div>
      <div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl pr-10 font-black md:text-4xl/tight max-w-lg">
                Transform{" "}
                <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                  {" "}
                  <span className="relative">Your Fitness</span>{" "}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.58em] w-full z-[-1] fill-indigo-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                </span>{" "}
                Journey with FitLife Tracker
              </h1>
              <p className="text-base leading-7 text-gray-600 font-medium mt-3">
                Take Control of Your Health and Reach Your Goals Faster. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                omnis.
              </p>
              <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 mt-4">
                <Link href="" className={buttonVariants({ size: "lg" })}>
                  Download IOS
                </Link>
                <Link
                  href=""
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Download Android
                </Link>
              </div>
              <div className=" hidden md:flex gap-x-6 mt-8 items-center">
                <div className="border-r-2 flex gap-x-3 pr-6">
                  <div className="flex">
                    <Image
                      src={userImage1}
                      alt=""
                      className="h-14 w-14 border-4 border-white shadow-xl rounded-full object-cover object-center"
                    />
                    <Image
                      src={userImage2}
                      alt=""
                      className="h-14 w-14 border-4 border-white shadow-xl rounded-full object-cover object-center -ml-4"
                    />
                    <Image
                      src={userImage1}
                      alt=""
                      className="h-14 w-14 border-4 border-white shadow-xl rounded-full object-cover object-center -ml-4"
                    />
                  </div>
                  <div>
                    <span className="text-xl font-bold">4,353</span>
                    <span className="block text-base text-gray-600">
                      Happy Clients
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block font-bold text-xl">4.7 / 5</span>
                  <span className="flex gap-x-1">
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-gray-300" />
                    <span className="text-gray-600 text-sm">Rating</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <Image src="/device.png" height={700} width={400} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <Container className="mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative">
            <Image
              src="https://vue.hibotheme.com/prag/img/about-img.df163752.webp"
              alt=""
              height={500}
              width={400}
              className="block mx-auto rounded-xl"
            />
            <div className="absolute bottom-10 bg-white p-4 rounded-xl shadow-xl">
              <span className="text-lg font-semibold flex">
                <CheckIcon className="h-7 w-7 fill-indigo-600 shrink-0" /> 24/7
                Community Support
              </span>
              <span className="text-base font-medium leading-7">
                We’re servicing 24/7 support for all
              </span>
            </div>
            <div className="absolute top-10 bg-white p-4 rounded-xl shadow-xl">
              <span className="text-lg font-semibold flex">
                <CheckIcon className="h-7 w-7 fill-indigo-600 shrink-0" />{" "}
                Personalized Plan
              </span>
            </div>
            <div className="absolute right-0 bottom-32 bg-white p-4 rounded-xl shadow-xl">
              <span className="text-lg font-semibold flex">
                <CheckIcon className="h-7 w-7 fill-indigo-600 shrink-0" />{" "}
                Analytics
              </span>
              <span className="text-base font-medium leading-7">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
          <div>
            <SectionIntro
              eyebrow="Why choose us"
              title="Why FitLife Is THe Right Choice For You"
            >
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                expedita, culpa enim praesentium amet necessitatibus.
              </p>
            </SectionIntro>
            <Accordion
              type="single"
              defaultValue="item-1"
              className="mt-12 space-y-3"
            >
              {whyChooseData.map((data) => (
                <AccordionItem
                  key={data.id}
                  value={`item-${data.id}`}
                  className="border rounded-xl text-base py-1 px-4 data-[state=open]:bg-indigo-600 data-[state=open]:text-white"
                >
                  <AccordionTrigger className="font-semibold">
                    {data.id.toString().padStart(2, "0")}. {data.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-200 leading-8 text-base">
                    {data.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
      <div className="my-32">
        <Container>
          <SectionIntro
            eyebrow="Our Features"
            title="Some excellent features for you"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iusto impedit fugiat laboriosam odio dolore fuga quo
              natus nobis. Voluptates?
            </p>
          </SectionIntro>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {features.map((service) => (
              <Link
                href="/services/1"
                key={service.id}
                className="border rounded-xl bg-indigo-50 transition-all duration-500  p-6 hover:bg-gradient-to-b from-indigo-50 hover:border-indigo-200 to-white"
              >
                <span className="border inline-block px-5 py-1.5 border-indigo-200 rounded-full">
                  {service.icon}
                </span>
                <h3 className="text-lg font-extrabold mt-8">{service.title}</h3>
                <p className="text-base leading-7 mt-3 text-gray-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </div>
      <Container className="my-32">
        <SectionIntro
          eyebrow="Working Steps"
          title="How it works?"
          className="mb-12"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis iusto impedit fugiat laboriosam odio dolore fuga quo
            natus nobis. Voluptates?
          </p>
        </SectionIntro>
        <Workflow2 />
        {/* <TestingSection /> */}
      </Container>
      {/* <div className="my-32 py-20 bg-slate-100">
        <Container>
          <SectionIntro
            eyebrow="Benefits"
            title="Some excellent features for you"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iusto impedit fugiat laboriosam odio dolore fuga quo
              natus nobis. Voluptates?
            </p>
          </SectionIntro>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.id} className="p-5 bg-white rounded-xl">
                <Image src={feature.icon} alt="" height={60} width={60} />
                <h3 className="font-bold text-lg text-indigo-950 mt-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-7 mt-2 text-base">
                  {feature.description}
                </p>
                <Link
                  href=""
                  className={buttonVariants({
                    variant: "link",
                    className: "!px-0 mt-3",
                  })}
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div> */}
      <Container className="my-32">
        <SectionIntro
          eyebrow="COOL & AMAZING DESIGN"
          className="mb-8"
          title="SLEEK & ELEGANT DESIGN"
        />
        <InfiniteMoving>
          {[
            "/cool-amazing-3.png",
            "/cool-amazing-4.png",
            "/cool-amazing-5.png",
            "/cool-amazing-3.png",
          ].map((image, index) => (
            <InfiniteMovingItem key={index} className="md:w-[200px]">
              <Image
                src={image}
                alt=""
                width={200}
                height={200}
                className="w-full h-auto object-cover rounded-xl border"
              />
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </Container>
      <Container className="my-32">
        <SectionIntro
          eyebrow="Our Blogs"
          title="Our latest news and articles"
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <Container className="my-32">
        <SectionIntro title="What Our Clients Says" className="mb-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            laboriosam earum possimus deserunt sapiente quod nihil voluptates
            voluptas dignissimos explicabo?
          </p>
        </SectionIntro>{" "}
        <Testimonials2 />
      </Container>
      {/* <CallToAction>
        <CallToActionHeading>Download this app now</CallToActionHeading>
        <CallToActionSubHeading>
          This app is now available on both Apple store and app store. You can
          download it and enjoy it now.
        </CallToActionSubHeading>
        <CallToActionMenus>
          <Link
            href=""
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Download IOS
          </Link>
          <Link
            href=""
            className={buttonVariants({
              variant: "link",
              className: "text-white",
              size: "lg",
            })}
          >
            Download Android
          </Link>
        </CallToActionMenus>
      </CallToAction> */}
    </div>
  );
}
