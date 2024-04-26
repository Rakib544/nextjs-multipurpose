import ContactForm from "@/components/contact-form";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { Accordion } from "@/components/ui/accordion";
import { faqData } from "@/lib/data/faq-data";
import Link from "next/link";

export default function Contact2() {
  return (
    <div>
      <div className="absolute top-0 left-0 min-h-screen w-full bg-gradient-to-b from-[#ECE9FF] to-white z-[-1]"></div>
      <Container className="lg:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-20">
          <div>
            <PageIntro
              className="mt-20 mb-10"
              eyebrow="Contact Us"
              pageTitle="Don’t hesitate to reach out"
            >
              Feel free to reach out to us through your preferred method of
              contact. We are eager to connect with you and explore how our
              digital marketing team can contribute to your success.
            </PageIntro>
            <FadeIn className="z-10">
              <div className="grid grid-cols-12 gap-6 mt-12">
                <Link
                  href="mailto:md.rakib10122003@gmail.com"
                  className="col-span-12 md:col-span-6 p-4  rounded-xl bg-white border-[#ECE9FF] transition duration-300 hover:border-primary border"
                >
                  <p className="text-xs  tracking-wider font-bold text-indigo-600">
                    Email Address
                  </p>
                  <p className="text-base font-medium text-indigo-950 mt-1">
                    demo@gmail.com
                  </p>
                </Link>
                <Link
                  href="tel:+8801786542643"
                  className="col-span-12 md:col-span-6 p-4 rounded-xl bg-white border-[#ECE9FF] transition duration-300 hover:border-primary border"
                >
                  <p className="text-xs  tracking-wider font-bold text-indigo-600">
                    Phone Number
                  </p>
                  <p className="text-base font-medium text-indigo-950 mt-1">
                    +8801786542643
                  </p>
                </Link>
                <Link
                  href="https://maps.app.goo.gl/Ri1wpbbjTwTMPpZF7"
                  target="_blank"
                  className="col-span-12 p-4 rounded-xl bg-white border-[#ECE9FF] transition duration-300 hover:border-primary border"
                >
                  <p className="text-xs  tracking-wider font-bold text-indigo-600">
                    Address
                  </p>
                  <p className="text-base font-medium text-indigo-950 mt-1">
                    Gazipur, Dhaka, Bangladesh
                  </p>
                </Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn className="bg-white py-10 lg:p-10 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-8">Contact Us</h3>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
      <div className="bg-indigo-600 py-20 md:py-32 mt-20 md:mt-32">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <SectionIntro
                eyebrow="Our Locations"
                title="Visit our offices"
                invert
              >
                <p>Find us on these locations</p>
              </SectionIntro>
            </div>
            <FadeInStagger
              faster
              className="col-span-12 md:col-span-7 grid grid-cols-1  sm:grid-cols-2 gap-6"
            >
              <FadeIn>
                <h4 className="text-white font-bold text-base md:text-lg ">
                  Copenhagen
                </h4>
                <p className="text-base mt-1 text-slate-200">
                  1 Carlsberg Gate
                </p>
                <p className="text-base text-slate-200">
                  1260, København, Denmark
                </p>
              </FadeIn>
              <FadeIn>
                <h4 className="text-white font-bold text-base md:text-lg ">
                  London
                </h4>
                <p className="text-base mt-1 text-slate-200">
                  1 Carlsberg Gate
                </p>
                <p className="text-base text-slate-200">
                  1260, København, Denmark
                </p>
              </FadeIn>
              <FadeIn>
                <h4 className="text-white font-bold text-base md:text-lg ">
                  Sydney
                </h4>
                <p className="text-base mt-1 text-slate-200">
                  1 Carlsberg Gate
                </p>
                <p className="text-base text-slate-200">
                  1260, København, Denmark
                </p>
              </FadeIn>
              <FadeIn>
                <h4 className="text-white font-bold text-base md:text-lg ">
                  New York
                </h4>
                <p className="text-base mt-1 text-slate-200">
                  1 Carlsberg Gate
                </p>
                <p className="text-base text-slate-200">
                  1260, København, Denmark
                </p>
              </FadeIn>
            </FadeInStagger>
          </div>
        </Container>
      </div>
      <Container className="my-20 lg:my-32">
        <SectionIntro
          title="Got questions? We’ve got answers"
          eyebrow="Our FAQ"
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p>
            In order to make sure your website is user friendly and optimized
            for Google’s algorithm, our on-site optimization experts clean up
            the code and copy.
          </p>
        </SectionIntro>
        <div className="max-w-2xl mx-auto">
          <FadeInStagger faster>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="mt-6"
            >
              {faqData.slice(0, 8).map((faq) => (
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
