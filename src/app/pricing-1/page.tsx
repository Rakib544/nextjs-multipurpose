import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Pricing2 } from "@/components/pricing/index";
import Faq1 from "../faq-1/page";

export default function Pricing() {
  return (
    <div>
      <Container>
        <PageIntro title="Choose your plan" centered>
          <p className="text-base text-neutral-700 mb-20">
            Enjoy lifetime access, community support, and no subscription fees.
          </p>
        </PageIntro>
        <Pricing2 />
        <Faq1 />
      </Container>
    </div>
  );
}
