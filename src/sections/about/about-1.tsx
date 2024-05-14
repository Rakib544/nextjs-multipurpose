import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import WorkFlowCard from "@/components/workflow-card";
import { seoRevenueEarningProcess } from "@/lib/data/seo-agency";

export default function About1() {
  return (
    <Container className="mt-20 md:mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full relative">
        <div>
          <div className="sticky top-6">
            <SectionIntro eyebrow="Why choose us" title="How we drive revenue">
              We start by conducting in-depth SEO audits to identify
              opportunities and areas for improvement. Our team analyzes your
              website&apos;s current performance, content, and technical setup
              to create a tailored strategy.
            </SectionIntro>
          </div>
        </div>
        <FadeIn>
          {seoRevenueEarningProcess.map((process, index) => (
            <WorkFlowCard key={index} id={(index + 1).toString()}>
              <span className="size-12 md:size-14  rounded-full bg-indigo-50 inline-flex justify-center items-center mb-4">
                {process.icon}
              </span>
              <h3 className="text-lg sm:text-xl text-indigo-950 font-bold mb-2">
                {process.title}
              </h3>
              <p className="text-base leading-8 pb-10 text-gray-600">
                {process.description}
              </p>
            </WorkFlowCard>
          ))}
        </FadeIn>
      </div>
    </Container>
  );
}
