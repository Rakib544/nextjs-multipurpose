import { Container } from "@/components/container";
import {
  AnalyticsIcon,
  ClockIcon,
  MagicIcon,
  StandingPeopleIcon,
  StarIcon,
  TextUnderline,
  UsersIcon,
} from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { Clients } from "@/components/clients";
import { Pricing2 } from "@/components/pricing";
import { SectionIntro } from "@/components/section-intro";
import Testimonials2 from "@/components/testimonials-2";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import WorkFlowCard from "@/components/workflow-card";
import userImage2 from "@/images/testimonial_2.jpg";
import userImage1 from "@/images/testimonial_3.jpg";
import { workingSteps } from "@/lib/data/app-data";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-12 md:mt-20">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:pr-10 font-black md:text-4xl/tight text-indigo-950">
                Fastest way to manage payment anytime you want with{" "}
                <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                  {" "}
                  <span className="relative">Financial.io</span>{" "}
                  <TextUnderline />
                </span>{" "}
              </h1>
              <p className="text-lg leading-8 text-gray-600 mt-3">
                Take control of your health and reach your goals faster. Lorem,
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
      <Container className="mt-20">
        <p className="text-base font-medium text-center">
          Trusted by top companies
        </p>
        <Clients />
      </Container>
      <div className="my-32">
        <Container>
          <SectionIntro
            eyebrow="Our Features"
            title="Experience your product as you create it."
            className="mb-12"
          ></SectionIntro>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 p-10 bg-slate-100 rounded-[40px]">
              <div className="relative aspect-[16/7]">
                <Image
                  src="https://assets-global.website-files.com/6207f5adfd8e615d3d70498b/6476d6c96421f487199b8408_Blink%20Copilot%20launch%20image-p-1080.png"
                  alt=""
                  fill
                  className="rounded-xl block object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-8">
                Secure & Convenient
              </h3>
              <p className="text-base leading-8 text-gray-600">
                Enjoy peace of mind with advanced security features and
                easy-to-use interface.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 p-10 bg-slate-100 rounded-[40px]">
              <div className="relative aspect-video">
                <Image
                  src="/header1.png"
                  alt=""
                  fill
                  className="rounded-xl block object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-8">
                Real-Time Transactions
              </h3>
              <p className="text-base leading-8 text-gray-600">
                Stay updated with real-time transaction alerts and balance
                notifications.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 p-10 bg-slate-100 rounded-[40px]">
              <div className="relative aspect-video">
                <Image
                  src="/header1.png"
                  alt=""
                  fill
                  className="rounded-xl block object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-8">
                Real-Time Transactions
              </h3>
              <p className="text-base leading-8 text-gray-600">
                Stay updated with real-time transaction alerts and balance
                notifications.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 p-10 bg-slate-100 rounded-[40px]">
              <div className="relative aspect-[16/7]">
                <Image
                  src="https://assets-global.website-files.com/6207f5adfd8e615d3d70498b/6476d6c96421f487199b8408_Blink%20Copilot%20launch%20image-p-1080.png"
                  alt=""
                  fill
                  className="rounded-xl block object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-8">
                Secure & Convenient
              </h3>
              <p className="text-base leading-8 text-gray-600">
                Enjoy peace of mind with advanced security features and
                easy-to-use interface.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          <div>
            <div className="sticky top-6">
              <SectionIntro
                eyebrow="Working Steps"
                title="How Financial.io works?"
                className="mb-12"
              >
                Discover how Financial.io simplifies your banking experience
                with our user-friendly interface, secure transactions, and
                convenient features all designed to help you manage your
                finances effortlessly.
              </SectionIntro>
            </div>
          </div>
          <div>
            {workingSteps.map((step, index) => (
              <WorkFlowCard key={index} id={(index + 1).toString()}>
                <h3 className="text-xl font-extrabold text-indigo-950 mb-1">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 leading-8 pb-10">
                  {step.description}
                </p>
              </WorkFlowCard>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="COOL & AMAZING DESIGN"
          className="mb-8"
          title="Experience Financial.io"
        >
          Take a closer look at our app&apos;s user-friendly interface and
          powerful features.
        </SectionIntro>
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
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          className="mb-12"
          eyebrow="Reviews"
          title="Here’s what our amazing clients are saying"
        ></SectionIntro>
        <Testimonials2 />
      </Container>
      <Container className="mt-20 md:mt-32">
        <div className="bg-slate-100 rounded-[40px] py-20 md:py-32 px-4">
          <SectionIntro
            eyebrow="Download now"
            title="Start using Financial.io now"
            className="sm:mx-auto sm:text-center"
          >
            Start your free trial now and see how easy it is to track, manage,
            and optimize your time.
            <div className="flex gap-x-4 items-center justify-center mt-6">
              <Link href="">
                <Image
                  src="https://assets-global.website-files.com/643e8219320d012584af3b6d/643e8219320d013be4af3ba9_App%20Store%20badge.svg"
                  alt=""
                  height={80}
                  width={200}
                />
              </Link>
              <Link href="">
                <Image
                  src="https://assets-global.website-files.com/643e8219320d012584af3b6d/643e8219320d011c39af3baa_Mobile%20App%20Store%20Badge.svg"
                  alt=""
                  height={80}
                  width={200}
                />
              </Link>
            </div>
          </SectionIntro>
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <div className="flex">
          <SectionIntro
            eyebrow="Pricing"
            title="We offer great prices for your
            business."
            className="mb-12 md:mb-0"
          >
            Explore our flexible pricing options designed to fit your banking
            needs and budget.
          </SectionIntro>
        </div>
        <Pricing2 />
      </Container>
    </div>
  );
}
