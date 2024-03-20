import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard2 } from "@/components/faq-card";
import { GridPattern } from "@/components/grid-pattern";
import { PageIntro } from "@/components/page-intro";
import { faqData } from "@/lib/data/faq-data";

export default function Faq2() {
  return (
    <div>
      <PageIntro title="Frequently asked questions">
        <p>
          {" "}
          These are the most commonly asked questions about us and billing.
          Can&apos;t find what you are looking for?{" "}
          <a className="underline" href="mailto:md.rakib10122003@gmail.com">
            Chat to our Support Team!
          </a>
        </p>
      </PageIntro>

      <div className="absolute inset-0 z-[-1] top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern />
      </div>

      <Container className="mt-16 lg:mt-24">
        <div className=" mt-16">
          <FadeInStagger faster>
            <div className="mt-6 grid grid-cols-12 gap-6">
              {faqData.map((faq) => (
                <FaqCard2
                  key={faq.id}
                  id={faq.id.toString()}
                  answer={faq.answer}
                  question={faq.question}
                  className="col-span-12 lg:col-span-6"
                />
              ))}
            </div>
          </FadeInStagger>
        </div>
      </Container>
    </div>
  );
}
