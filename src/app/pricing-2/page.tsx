import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Pricing1 } from "@/components/pricing/index";
import Faq2 from "../faq-2/page";

export default function Pricing() {
  return (
    <div>
      <Container>
        <PageIntro title="Choose your plan" centered>
          <p className="text-base text-neutral-700 mb-20">
            Enjoy lifetime access, community support, and no subscription fees.
          </p>
        </PageIntro>
        <Pricing1 />
      </Container>
      <Faq2 />
    </div>
  );
}
