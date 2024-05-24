import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";

export default function CoreValues() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        title="Guiding principles that define our company"
        eyebrow="Core Values"
        className="mb-12"
      >
        Discover our commitment to driving growth and making a positive impact
        in every interaction
      </SectionIntro>
      <FadeInStagger
        faster
        className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-6"
      >
        <FadeIn>
          <Border position="left" className="pl-8">
            <p className="text-base leading-8 text-muted-foreground">
              <span className="font-bold text-primary">Integrity. </span>
              We upholds the highest ethical standards in all our dealings and
              embrace creativity and strive for improvement.
            </p>
          </Border>
        </FadeIn>
        <FadeIn>
          <Border position="left" className="pl-8">
            <p className="text-base leading-8 text-muted-foreground">
              <span className="font-bold text-primary">Customer Focus. </span>
              We are dedicated to exceeding customer exceptions and delivering
              value.
            </p>
          </Border>
        </FadeIn>
        <FadeIn>
          <Border position="left" className="pl-8">
            <p className="text-base leading-8 text-muted-foreground">
              <span className="font-bold text-primary">Teamwork. </span>
              We collaborate openly, respect diversity, help each other and
              support each others success.
            </p>
          </Border>
        </FadeIn>
      </FadeInStagger>
    </Container>
  );
}
