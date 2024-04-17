import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { Accordion } from "@/components/ui/accordion";
import { faqData } from "@/lib/data/faq-data";

export default function Pricing() {
  return (
    <div>
      <Container>
        <PageIntro
          className="max-w-2xl mx-auto"
          eyebrow="Pricing Plan"
          centered
          pageTitle={
            <>
              Take a tour of our
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">Pricing Plans</span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Enjoy lifetime access, community support, and no subscription fees.
        </PageIntro>

        <Pricing2 />
        <div className="my-20 md:my-32">
          <SectionIntro
            title="Got questions? We’ve got answers"
            eyebrow="Our FAQ"
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sed soluta voluptates?
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
      </Container>
    </div>
  );
}
