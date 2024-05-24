import { Clients } from "@/components/clients";
import { Container } from "@/components/container";

export default function Clients2() {
  return (
    <section>
      <Container className="mt-20">
        <p className="max-w-xs text-base font-medium text-foreground leading-7">
          Worked with 100+ clients around the world including:
        </p>
        <Clients />
      </Container>
    </section>
  );
}
