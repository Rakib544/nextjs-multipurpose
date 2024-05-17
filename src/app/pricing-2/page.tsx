import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Pricing1 } from "@/components/pricing/index";
import { Faq1 } from "@/sections/faq";
import { Testimonial1 } from "@/sections/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Pricing() {
  return (
    <div>
      <div
        className="absolute min-h-screen w-full top-0 z-[-2] bg-cover"
        style={{
          backgroundImage:
            "url(https://tailwindui.com/img/beams-basic-transparent.png)",
        }}
      ></div>
      <Container className="z-10">
        <PageIntro
          className="max-w-xl mx-auto"
          eyebrow="Pricing Plan"
          centered
          pageTitle={
            <>
              Our plans scale with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Your Business
              </span>{" "}
            </>
          }
        >
          Pricing for businesses at every stage of growth.
        </PageIntro>

        <Pricing1 />
        <Faq1 />
      </Container>
      <Testimonial1 centered />
    </div>
  );
}
