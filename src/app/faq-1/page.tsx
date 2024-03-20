import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import { GridPattern } from "@/components/grid-pattern";
import { PageIntro } from "@/components/page-intro";
import { Accordion } from "@/components/ui/accordion";
import { faqData } from "@/lib/data/faq-data";

export default function Faq1() {
  return (
    <div>
      <PageIntro title="Frequently asked questions" centered>
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
      <Container className="mt-16 lg:mt-32">
        <div className="max-w-xl mx-auto mt-16">
          <FadeInStagger faster>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="mt-6"
            >
              {faqData.map((faq) => (
                <FaqCard1
                  key={faq.id}
                  id={faq.id.toString()}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </Accordion>
          </FadeInStagger>
        </div>
      </Container>
    </div>
  );
}
