import { Container } from "@/components/container";

import { Pricing2 } from "@/components/pricing";
import { SectionIntro } from "@/components/section-intro";
import { workingSteps } from "@/lib/data/app-data";
import { Features5 } from "@/sections/features";
import { Hero4 } from "@/sections/hero";
import { Process1 } from "@/sections/process";
import { Testimonial4 } from "@/sections/testimonial";

import { CallToAction2 } from "@/sections/call-to-action";
import { Clients1 } from "@/sections/clients";
import { DemoSlider2 } from "@/sections/demo-slider";

export default function AppLanding() {
  return (
    <div>
      <Hero4 />
      <Clients1 />
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
      <DemoSlider2 />
      <Testimonial4 />
      <CallToAction2 />
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
