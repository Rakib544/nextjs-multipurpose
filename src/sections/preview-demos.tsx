import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import PreviewCard from "@/components/preview-card";
import { SectionIntro } from "@/components/section-intro";
import { StaticImageData } from "next/image";

interface PreviewDemoProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  pages: Array<{
    title: string;
    image: string | StaticImageData;
    href: string;
  }>;
}

export default function PreviewDemos({
  id = "",
  eyebrow = "",
  title,
  description,
  pages,
}: PreviewDemoProps) {
  return (
    <Container className="mt-20 md:mt-32" id={id}>
      <SectionIntro eyebrow={eyebrow} title={title} centered className="mb-12">
        {description}
      </SectionIntro>
      <FadeInStagger
        faster
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {pages.map((item, index) => (
          <FadeIn key={index}>
            <PreviewCard
              title={item.title}
              href={item.href}
              image={item.image}
            />
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  );
}
