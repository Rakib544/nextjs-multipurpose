import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { caseStudies } from "@/lib/data/case-studies";
import Image from "next/image";
import Link from "next/link";

export default function WorkStudies() {
  return (
    <div>
      <Container className="mb-32">
        <PageIntro
          eyebrow="Case studies"
          centered
          pageTitle={
            <>
              {" "}
              Proven solutions for
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">real-world</span> <TextUnderline />
              </span>{" "}
              problems
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
                <p className="mt-6 flex gap-x-2 text-sm text-indigo-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split("-")[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span className="font-medium">Case study</span>
                </p>
                <p className="mt-6 font-display text-xl font-extrabold text-indigo-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  );
}
