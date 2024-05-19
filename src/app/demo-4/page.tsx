import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";

import { Clients } from "@/components/clients";
import { FadeIn } from "@/components/fade-in";
import { Pricing2 } from "@/components/pricing";
import { SectionIntro } from "@/components/section-intro";
import { buttonVariants } from "@/components/ui/button";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { workingSteps } from "@/lib/data/app-data";
import { Features5 } from "@/sections/features";
import { Hero4 } from "@/sections/hero";
import { Process1 } from "@/sections/process";
import { Testimonial4 } from "@/sections/testimonial";

import uiImage1 from "@/images/demo-4/ui-1.png";
import uiImage2 from "@/images/demo-4/ui-2.png";
import uiImage3 from "@/images/demo-4/ui-3.png";

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
      <Features5 />
      <Process1
        eyebrow="Working Steps"
        title="How Financial.io works?"
        subtitle="Discover how Financial.io simplifies your banking experience
                with our user-friendly interface, secure transactions, and
                convenient features all designed to help you manage your
                finances effortlessly."
        processes={workingSteps}
      />
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
          {[uiImage1, uiImage2, uiImage3].map((image, index) => (
            <InfiniteMovingItem key={index} className="md:w-[200px]">
              <Image
                src={image}
                alt=""
                width={200}
                height={200}
                className="w-full h-auto sm:h-auto object-cover rounded-xl border"
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
            <FadeIn className="flex flex-col sm:flex-row gap-4 items-center justify-start sm:justify-center mt-6">
              <Link
                href=""
                className={buttonVariants({
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                Download IOS
              </Link>
              <Link
                href=""
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "w-full sm:w-auto",
                })}
              >
                Download Android
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
