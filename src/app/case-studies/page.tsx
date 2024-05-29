import CaseStudiesCard from "@/components/case-studies-card";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import Pagination from "@/components/ui/pagination";
import { caseStudies } from "@/lib/data/case-studies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  robots: {
    index: true,
    follow: true,
  },
};

export default function WorkStudies() {
  return (
    <div>
      <Container className="mb-32">
        <PageIntro
          className="max-w-2xl mx-auto"
          eyebrow="Pricing Plan"
          centered
          pageTitle={
            <>
              Explore our proven solutions for real-world
              <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">problems</span> <TextUnderline />
              </span>{" "}
            </>
          }
        >
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients.
        </PageIntro>

        <FadeInStagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {caseStudies.map((caseStudy: any) => (
            <FadeIn key={caseStudy.href} className="flex">
              <CaseStudiesCard
                client={caseStudy.client}
                date={caseStudy.date}
                description={caseStudy.description}
                href={caseStudy.href}
                logo={caseStudy.logo}
                title={caseStudy.title}
                year={caseStudy.year}
              />
            </FadeIn>
          ))}
        </FadeInStagger>
        <div className="mt-20 md:mt-32 flex justify-center">
          <Pagination totalItems={60} perPageItems={10} />
        </div>
      </Container>
    </div>
  );
}
