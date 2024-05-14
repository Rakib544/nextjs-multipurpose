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
              Take a tour of our
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">Pricing Plans</span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Enjoy lifetime access, community support, and no subscription fees.
        </PageIntro>

        <Pricing2 />
        <Faq1 />
      </Container>
    </div>
  );
}
