import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { Accordion } from "@/components/ui/accordion";
import { faqData } from "@/lib/data/faq-data";

export default function Faq1() {
  return (
    <div>
      <Container>
        <PageIntro
          className="max-w-2xl mx-auto text-center z-10 mt-20 mb-10"
          centered
          eyebrow="Faq"
          pageTitle={
            <>
              Frequently Asked
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">Questions</span> <TextUnderline />
              </span>{" "}
            </>
          }
        >
          These are the most commonly asked questions about us and billing.
          Can&apos;t find what you are looking for? Chat to our Support Team!
        </PageIntro>
      </Container>

      <Container className="mt-12">
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
