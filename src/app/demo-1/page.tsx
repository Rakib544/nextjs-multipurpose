import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import UseCases from "@/components/use-case";
import dashboardBannerImage from "@/images/demo-1/banner.webp";
import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import { sassWorkflows } from "@/lib/data/sass-features";
import { Features1 } from "@/sections/features";
import { Hero1 } from "@/sections/hero";
import { Process1 } from "@/sections/process";
import { Testimonial1 } from "@/sections/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <div className="relative">
        <Container className="!max-w-5xl">
          <Image
            src={dashboardBannerImage}
            alt=""
            height={1015}
            width={1205}
            placeholder="blur"
            blurDataURL={generateBlurImageURL()}
            className="block object-cover object-center mx-auto mt-12 relative border rounded-lg border-border/50"
          />
        </Container>
        <div className="bg-gradient-to-t from-[#FAD0F9]/50 h-full to-transparent absolute inset-0"></div>
      </div>
      <Container className="mt-12 md:mt-20">
        <FadeIn>
          <h2 className="text-lg mb-8 text-foreground font-semibold text-center">
            Trusted by many top companies
          </h2>
          <Clients />
        </FadeIn>
      </Container>
      <Features1 />
      <UseCases />
      <Process1
        eyebrow="How It works"
        title="Get started with streamlinePro"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  quia consequatur cumque, sapiente exercitationem veritatis
                  omnis facilis. Assumenda, fuga rem!"
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
