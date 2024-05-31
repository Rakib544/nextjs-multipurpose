import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import UseCases from "@/components/use-case";
import dashboardBannerImage from "@/images/demo-1/banner.webp";
import { sassWorkflows } from "@/lib/data/sass-features";
import { Clients1 } from "@/sections/clients";
import { Features1 } from "@/sections/features";
import { Hero1 } from "@/sections/hero";
import { Process1 } from "@/sections/process";
import { Testimonial1 } from "@/sections/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <FadeIn className="relative -mt-6 md:-mt-4">
        <Container className="!max-w-5xl">
          <div className="rounded-tr-xl rounded-tl-xl md:rounded-tr-3xl md:rounded-tl-3xl pt-[2px] px-[2px] bg-gradient-to-r from-indigo-600 to-fuchsia-600">
            <Image
              src={dashboardBannerImage}
              alt=""
              height={1015}
              width={1205}
              priority
              className="block object-cover object-center mx-auto relative md:rounded-tr-[calc(1.5rem-1px)] md:rounded-tl-[calc(1.5rem-1px)] rounded-tr-[calc(0.75rem-0.25px)] rounded-tl-[calc(0.75rem-0.25px)]"
            />
          </div>
        </Container>
        <div className="bg-gradient-to-t z-[-1] from-[#FAD0F9]/50 h-full to-transparent absolute inset-0"></div>
      </FadeIn>
      <Clients1 />
      <Features1 />
      <UseCases />
      <Process1
        eyebrow="How It works"
        title="Get started with streamlinePro"
        subtitle="We upholds the highest ethical standards in all our dealings and embrace creativity and strive for improvement."
        processes={sassWorkflows}
      />

      <Testimonial1 />
      <Container className="mt-20 md:mt-32">
        <div className="flex">
          <SectionIntro
            eyebrow="Pricing"
            title="We offer great prices for your
            business."
            className="mb-12 md:mb-0"
          >
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </SectionIntro>
        </div>
        <Pricing2 />
      </Container>
    </div>
  );
}
