import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import { ServiceCard2 } from "@/components/service-cards";
import { seoServices } from "@/lib/data/seo-services";

export default function Features3() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Services"
        className="mb-12"
        title="Optimized to the unique needs of each business we work with"
      />
      <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {seoServices.map((service, index) => (
          <ServiceCard2
            key={index}
            title={service.title}
            description={service.description}
            href="/service-details"
            icon={service.icon}
          />
        ))}
      </FadeInStagger>
    </Container>
  );
}
