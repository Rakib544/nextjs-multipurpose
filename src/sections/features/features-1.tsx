import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import { sassFeatures } from "@/lib/data/sass-features";
import Link from "next/link";

export default function Features1() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        title="We deliver great features that helps everyday business"
        eyebrow="Features"
        className="mb-12"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem est
        deleniti, molestias maxime laudantium eos?
      </SectionIntro>
      <FadeInStagger
        faster
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {sassFeatures.map((service) => (
          <FadeIn key={service.id}>
            <Link
              href="/services/1"
              className="block border focus:ring-0 focus:bg-primary focus:outline-none focus:border-primary group rounded-xl p-6 hover:border-primary hover:bg-primary transition duration-300"
            >
              <span className="border inline-block px-5 py-1.5 group-hover:border-indigo-500 border-indigo-200 rounded-full transition-all duration-300 group-focus:border-indigo-500">
                {service.icon}
              </span>
              <h3 className="text-lg font-bold mt-8 group-focus:text-white group-hover:text-white transition duration-300">
                {service.title}
              </h3>
              <p className="text-base leading-7 group-focus:text-primary-foreground mt-3 group-hover:text-primary-foreground text-muted-foreground transition-all duration-300">
                {service.description}
              </p>
            </Link>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  );
}
