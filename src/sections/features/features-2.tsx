import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import {
  AnalyticsIcon,
  DollarBagIcon,
  MegaphoneIcon,
} from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";

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
        <FadeIn className="border rounded-2xl p-8">
          <span className="flex justify-center items-center size-16 bg-indigo-50 rounded-full border border-indigo-50">
            <MegaphoneIcon className="fill-indigo-600 text-indigo-600  h-7 w-7" />
          </span>
          <h3 className="text-xl font-bold mt-6 text-indigo-950">
            Better Audience
          </h3>
          <p className="text-base leading-7 mt-3 text-gray-600 ">
            Our proprietary solution leverages an in-house database of 260M+
            customers and 2,000+ custom variables to build custom predictive
            models.
          </p>
        </FadeIn>
        <FadeIn className="border rounded-2xl p-8">
          <span className="flex justify-center items-center size-16 bg-indigo-50 rounded-full border border-indigo-50">
            <AnalyticsIcon className="fill-indigo-600 text-indigo-600  h-7 w-7" />
          </span>
          <h3 className="text-xl font-bold mt-6 text-indigo-950">
            Better Analytics
          </h3>
          <p className="text-base leading-7 mt-3 text-gray-600 ">
            Our proprietary solution leverages an in-house database of 260M+
            customers and 2,000+ custom variables to build custom predictive
            models.
          </p>
        </FadeIn>
        <FadeIn className="border rounded-2xl p-8">
          <span className="flex justify-center items-center size-16 bg-indigo-50 rounded-full border border-indigo-50">
            <DollarBagIcon className="fill-indigo-600 text-indigo-600  h-7 w-7" />
          </span>
          <h3 className="text-xl font-bold mt-6 text-indigo-950">
            Better Outcomes
          </h3>
          <p className="text-base leading-7 mt-3 text-gray-600 ">
            Our proprietary solution leverages an in-house database of 260M+
            customers and 2,000+ custom variables to build custom predictive
            models.
          </p>
        </FadeIn>
      </FadeInStagger>
    </Container>
  );
}
