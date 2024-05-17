import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import PriceComparisonTable from "@/components/pricing/price-comparison-table";
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

export default function Component() {
  return (
    <div>
      <div className="h-screen absolute top-0 left-0 bg-gradient-to-t from-violet-100 to-white w-full z-[-1]" />
      <Container>
        <PageIntro
          className="max-w-2xl mx-auto"
          eyebrow="Pricing Plan"
          centered
          pageTitle={
            <>
              Explore our pricing plans that fit your
              <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">business needs </span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Navigate through our detailed pricing breakdown to find the perfect
          plan that aligns with your business objectives effortlessly.
        </PageIntro>

        <FadeIn className="bg-white border rounded mt-12 md:mt-20">
          <PriceComparisonTable />
        </FadeIn>
        <Testimonial1 centered />
        <Faq1 />
      </Container>
    </div>
  );
}
