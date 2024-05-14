import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";

import { Clients } from "@/components/clients";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { Pricing2 } from "@/components/pricing";
import { SectionIntro } from "@/components/section-intro";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import WorkFlowCard from "@/components/workflow-card";
import { workingSteps } from "@/lib/data/app-data";
import { Hero4 } from "@/sections/hero";
import { Testimonial4 } from "@/sections/testimonial";

export default function AppLanding() {
  return (
    <div>
      <Hero4 />
      <Container className="mt-20">
        <FadeIn>
          <p className="text-base font-medium text-center">
            Trusted by top companies
          </p>
          <Clients />
        </FadeIn>
      </Container>
      <div className="my-32">
        <Container>
          <SectionIntro
            eyebrow="Our Features"
            title="Experience your product as you create it."
            className="mb-12"
          ></SectionIntro>
          <FadeInStagger faster className="grid grid-cols-12 gap-6">
            <FadeIn className="col-span-12 md:col-span-8 p-10 bg-slate-100 rounded-[40px]">
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
            </FadeIn>
            <FadeIn className="col-span-12 md:col-span-4 p-10 bg-slate-100 rounded-[40px]">
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
            </FadeIn>
            <FadeIn className="col-span-12 md:col-span-4 p-10 bg-slate-100 rounded-[40px]">
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
            </FadeIn>
            <FadeIn className="col-span-12 md:col-span-8 p-10 bg-slate-100 rounded-[40px]">
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
            </FadeIn>
          </FadeInStagger>
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
          <FadeInStagger faster>
            {workingSteps.map((step, index) => (
              <FadeIn key={index}>
                <WorkFlowCard key={index} id={(index + 1).toString()}>
                  <h3 className="text-xl font-extrabold text-indigo-950 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-8 pb-10">
                    {step.description}
                  </p>
                </WorkFlowCard>
              </FadeIn>
            ))}
          </FadeInStagger>
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
      <Testimonial4 />
      <Container className="mt-20 md:mt-32">
        <div className="bg-slate-100 rounded-[40px] py-20 md:py-32 px-4">
          <SectionIntro
            eyebrow="Download now"
            title="Start using Financial.io now"
            className="sm:mx-auto sm:text-center"
          >
            Start your free trial now and see how easy it is to track, manage,
            and optimize your time.
            <FadeIn className="flex gap-x-4 items-center justify-center mt-6">
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
            </FadeIn>
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
