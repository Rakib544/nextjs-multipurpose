import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import Testimonials2 from "@/components/testimonials-2";

export default function Testimonial4({
  centered = false,
}: {
  centered?: boolean;
}) {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        className="mb-12"
        eyebrow="Clients Reviews"
        title="Here’s what our amazing clients are saying"
        centered={centered}
      ></SectionIntro>
      <Testimonials2 />
    </Container>
  );
}
