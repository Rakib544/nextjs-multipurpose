import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { FaqCard2 } from "@/components/faq-card/index";
import { GridPattern } from "@/components/grid-pattern";
import { PageIntro } from "@/components/page-intro";
import { Pricing1 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import { faqData } from "@/lib/data/faq-data";
import { sassFeatures } from "@/lib/data/sass-features";
import Link from "next/link";

export default function Services1() {
  return (
    <div>
      <PageIntro title="Our Comprehensive Digital Solution">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe
          facilis in ratione necessitatibus, consequatur exercitationem rerum
          laboriosam. Minima illo enim fugiat totam corporis neque placeat alias
          natus dolorem excepturi numquam sed asperiores ex laborum, vitae
          voluptate tempore modi facere deleniti. Eaque sapiente totam
          recusandae facilis distinctio id, animi facere!
        </p>
      </PageIntro>
      <Container className="mt-12">
        <StatList>
          <StatListItem
            label="of sharing architectural landscapes"
            value="50+ Years"
          />
          <StatListItem
            label="of sharing architectural landscapes"
            value="100+ Projects"
          />
          <StatListItem
            label="of sharing architectural landscapes"
            value="20+ Awards"
          />
          <StatListItem
            label="of sharing architectural landscapes"
            value="99+ Success"
          />
        </StatList>
      </Container>
      <Container className="mt-20">
        <SectionIntro
          title="Empower your saas solutions"
          eyebrow="Solution"
          className="mb-8"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem est
            deleniti, molestias maxime laudantium eos?
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sassFeatures.map((service) => (
            <Link
              href="/services/1"
              key={service.id}
              className="border rounded-xl p-6 hover:bg-gradient-to-b from-indigo-50 hover:border-indigo-200 to-white"
            >
              <span className="border inline-block px-5 py-1.5 border-indigo-200 rounded-full">
                {service.icon}
              </span>
              <h3 className="text-lg font-extrabold mt-8">{service.title}</h3>
              <p className="text-base leading-7 mt-3 text-neutral-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
      <div className="relative isolate bg-[#F6F9FC] py-16 sm:py-28 md:py-32">
        <div className="absolute inset-0 top-0 z-[-1] text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern />
        </div>
        <Container>
          <FadeIn className="max-w-xl mx-auto text-center z-20">
            <h2 className="block tracking-tight [text-wrap:balance] text-4xl font-bold text-neutral-950 mb-2">
              Get started today
            </h2>
            <p className="text-neutral-700 leading-7">
              It’s time to take control of your books. Buy our software so you
              can feel like you’re doing something productive.
            </p>
            <Link
              href=""
              className={buttonVariants({ size: "lg", className: "mt-5 z-10" })}
            >
              Contact us
            </Link>
          </FadeIn>
        </Container>
      </div>
      <Container className="my-32">
        <Pricing1 />
      </Container>
      <Container>
        <SectionIntro eyebrow="FAQ" title="Frequently asked questions">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid at
            quam, doloremque maiores fuga numquam!
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {faqData.splice(0, 6).map((faq) => (
            <FaqCard2
              key={faq.id}
              id={faq.id.toString()}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
