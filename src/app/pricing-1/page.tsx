import { Container } from "@/components/container";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { Pricing2 } from "@/components/pricing/index";
import { Faq1 } from "@/sections/faq";

export default function Pricing() {
  return (
    <div>
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

        <Pricing2 />
        <Faq1 />
      </Container>
    </div>
  );
}
