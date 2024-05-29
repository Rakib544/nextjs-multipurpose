import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import { ServiceCard1 } from "@/components/service-cards";
import { sassFeatures } from "@/lib/data/sass-features";

export default function Features1() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        title="We deliver great features that helps everyday business"
        eyebrow="Features"
        className="mb-12"
      >
        The existing website had an outdated design and lacked mobile
        responsiveness, resulting in poor user experience.
      </SectionIntro>
      <FadeInStagger
        faster
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {sassFeatures.map((service) => (
          <FadeIn key={service.id}>
            <ServiceCard1
              description={service.description}
              icon={service.icon}
              title={service.title}
            />
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  );
}
