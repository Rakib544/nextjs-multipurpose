import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard2 } from "@/components/faq-card";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { faqData } from "@/lib/data/faq-data";
import { Testimonial1 } from "@/sections/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Faq2() {
  return (
    <div>
      <Container>
        <PageIntro
          className="mt-20 mb-10"
          eyebrow="Faq"
          pageTitle={
            <>
              {" "}
              Frequently asked
              <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">questions</span> <TextUnderline />
              </span>{" "}
            </>
          }
        >
          These are the most commonly asked questions about us and billing.
          Can&apos;t find what you are looking for? Chat to our Support Team!
        </PageIntro>
      </Container>
      <Container className="">
        <div>
          <FadeInStagger faster>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8">
              {faqData.map((faq) => (
                <FaqCard2
                  key={faq.id}
                  id={faq.id.toString()}
                  answer={faq.answer}
                  question={faq.question}
                />
              ))}
            </div>
          </FadeInStagger>
        </div>
      </Container>
      <Testimonial1 />
    </div>
  );
}
