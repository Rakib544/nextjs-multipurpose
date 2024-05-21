import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import {
  AnalyticsIcon,
  DollarBagIcon,
  MegaphoneIcon,
} from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { ServiceCard2 } from "@/components/service-cards";

const services = [
  {
    icon: <MegaphoneIcon className="fill-indigo-600 text-primary  h-7 w-7" />,
    title: "Better Audience",
    description:
      "Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models.",
  },
  {
    icon: <AnalyticsIcon className="fill-indigo-600 text-primary  h-7 w-7" />,
    title: "Better Analytics",
    description:
      "Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models.",
  },
  {
    icon: <DollarBagIcon className="fill-indigo-600 text-primary  h-7 w-7" />,
    title: "Better Outcomes",
    description:
      "Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models.",
  },
];

export default function Features2() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        className="mb-12"
        title="We solve digital challenges"
        eyebrow="What we do"
      >
        Together, we help our clients achieve tangible, measurable results.
        Focused on business outcomes — we bring a unique set of expertise and
        skills to the party.
      </SectionIntro>
      <FadeInStagger
        faster
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {services.map((service, index) => (
          <ServiceCard2
            icon={service.icon}
            title={service.title}
            description={service.description}
            key={index}
          />
        ))}
      </FadeInStagger>
    </Container>
  );
}
