import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";

export default function Clients3() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Partnership"
        title="We are happy to work with all largest brands"
        className="mb-12"
      >
        We upholds the highest ethical standards in all our dealings and embrace
        creativity and strive for improvement.
      </SectionIntro>
      <Clients />
    </Container>
  );
}
