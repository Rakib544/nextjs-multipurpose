import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import Pagination from "@/components/ui/pagination";
import { caseStudies } from "@/lib/data/case-studies";
import Image from "next/image";
import Link from "next/link";

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

        <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {caseStudies.map((caseStudy: any) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-indigo-950/5 transition hover:bg-slate-50 hover:ring-indigo-950/10 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-foreground">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split("-")[0]}
                  </time>
                  <span className="text-muted-foreground" aria-hidden="true">
                    /
                  </span>
                  <span className="font-medium">Case study</span>
                </p>
                <p className="mt-6 font-display text-xl font-extrabold text-foreground">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {caseStudy.description}
                </p>
              </article>
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
