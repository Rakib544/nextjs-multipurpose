import { Container } from "@/components/container";
import { FaqCard2 } from "@/components/faq-card";
import { SectionIntro } from "@/components/section-intro";
import { Accordion } from "@/components/ui/accordion";
import { faqData } from "@/lib/data/faq-data";

export default function Faq2() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="FAQ"
        className="mb-12"
        title="Frequently asked questions"
      >
        In order to make sure your website is user friendly and optimized for
        Google’s algorithm, our on-site optimization experts clean up the code
        and copy.
      </SectionIntro>

      <Accordion type="multiple">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
          {faqData.slice(0, 6).map((faq) => (
            <FaqCard2
              key={faq.id}
              id={faq.id.toString()}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Accordion>
    </Container>
  );
}
