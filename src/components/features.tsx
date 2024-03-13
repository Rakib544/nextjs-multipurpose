import partnershipIcon from "@/images/key-features/partnership.svg";
import performanceIcon from "@/images/key-features/performance.svg";
import subscriptionIcon from "@/images/key-features/subscription.svg";
import supportIcon from "@/images/key-features/support.svg";
import Image from "next/image";
import { Container } from "./container";
import { FadeIn, FadeInStagger } from "./fade-in";
import { SectionIntro } from "./section-intro";

const data = [
  {
    id: 1,
    title: "Fast Performance",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: performanceIcon,
  },
  {
    id: 2,
    title: "Partnership deal",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: partnershipIcon,
  },
  {
    id: 3,
    title: "Pro Subscription",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: subscriptionIcon,
  },
  {
    id: 4,
    title: "Customer Support",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: supportIcon,
  },
];

export default function Features() {
  return (
    <Container className="my-32">
      <div className="max-w-xl mx-auto text-center">
        <SectionIntro
          eyebrow="Whats the function"
          title="Meet the feature of product"
        />
      </div>
      <FadeInStagger faster className="grid grid-cols-12 gap-4 mt-20">
        {data.map((d) => (
          <FadeIn
            key={d.id}
            className="col-span-12 md:col-span-6 lg:col-span-3"
          >
            <Image src={d.icon} alt={d.title} className="h-20 -ml-4" />
            <h3 className="text-lg font-bold text-neutral-950">{d.title}</h3>
            <p className="text-base text-neutral-700 leading-7 mt-2">
              {d.description}
            </p>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  );
}
