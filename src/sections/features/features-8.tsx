import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import { usedTechnology } from "@/lib/data/technology-data";
import Link from "next/link";

export default function Features8() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro title="Tools & Technologies" centered>
        Using top UI frameworks and the latest technologies, build your dream
        app with our platform, supported by regular updates. Explore the tech we
        employ.
      </SectionIntro>
      <FadeInStagger
        faster
        className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 items-center gap-6"
      >
        {usedTechnology.map((technology, index) => (
          <FadeIn
            key={index}
            className="bg-slate-100 rounded-xl p-4 text-center h-full flex items-center justify-center group"
          >
            <Link href={technology.href} target="_blank">
              <span className="flex justify-center">{technology.icon}</span>
              <p className="group-hover:text-primary font-bold text-sm mt-3 text-muted-foreground">
                {technology.title}
              </p>
            </Link>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  );
}
