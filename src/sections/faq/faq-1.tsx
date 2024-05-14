import { FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import { SectionIntro } from "@/components/section-intro";
import { Accordion } from "@/components/ui/accordion";
import { faqData } from "@/lib/data/faq-data";

export default function Faq1() {
  return (
    <div className="my-20 md:my-32">
      <SectionIntro
        title="Got questions? We’ve got answers"
        eyebrow="Our FAQ"
        className="max-w-2xl mx-auto text-center"
      >
        <p>
          In order to make sure your website is user friendly and optimized for
          Google’s algorithm, our on-site optimization experts clean up the code
          and copy.
        </p>
      </SectionIntro>
      <div className="max-w-2xl mx-auto mt-16">
        <FadeInStagger faster>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="mt-6"
          >
            {faqData.slice(0, 10).map((faq) => (
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
    </div>
  );
}
