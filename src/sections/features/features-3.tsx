import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { MegaphoneIcon } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { buttonVariants } from "@/components/ui/button";
import { seoServices } from "@/lib/data/seo-services";
import Link from "next/link";

export default function Features3() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Services"
        className="mb-12"
        title="Optimized to the unique needs of each business we work with"
      />
      <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {seoServices.map((service) => (
          <FadeIn className="border rounded-2xl p-6" key={service.id}>
            <span className="flex justify-center items-center size-16 bg-indigo-50 rounded-full border border-indigo-50">
              <MegaphoneIcon className="fill-indigo-600 text-indigo-600  h-7 w-7" />
            </span>
            <h3 className="text-lg font-bold mt-6 text-indigo-950">
              {service.title}
            </h3>
            <p className="text-base leading-7 mt-3 text-gray-600">
              {service.description}
            </p>
            <Link
              href="/service-details"
              className={buttonVariants({
                variant: "link",
                className: "!px-0 mt-4",
              })}
            >
              Learn More &rarr;
            </Link>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  );
}
