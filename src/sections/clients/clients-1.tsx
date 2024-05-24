import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";

export default function Clients1() {
  return (
    <Container className="mt-12 md:mt-20">
      <FadeIn>
        <h2 className="text-lg mb-8 text-foreground font-semibold text-center">
          Trusted by many top companies
        </h2>
        <Clients />
      </FadeIn>
    </Container>
  );
}
