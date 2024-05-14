import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import PriceComparisonTable from "@/components/pricing/price-comparison-table";
import { Faq1 } from "@/sections/faq";
import { Testimonial1 } from "@/sections/testimonial";

export default function Component() {
  return (
    <div>
      <div className="h-screen absolute top-0 left-0 bg-gradient-to-t from-violet-100 to-white w-full z-[-1]" />
      <Container>
        <PageIntro
          className="max-w-3xl mx-auto"
          centered
          eyebrow="Pricing Plan"
          pageTitle={
            <>
              Our plans scale with
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">your business</span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Enjoy lifetime access, community support, and no subscription fees.
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
