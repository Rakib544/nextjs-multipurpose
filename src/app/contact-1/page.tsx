import ContactCard from "@/components/contact-card";
import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { contactData } from "@/lib/data/contact-data";
import { Faq1 } from "@/sections/faq";
import Offices from "@/sections/offices";
import { Testimonial1 } from "@/sections/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact1() {
  return (
    <div>
      <Container>
        <PageIntro
          eyebrow="Contact Us"
          className="max-w-3xl mx-auto mt-20 mb-10"
          centered
          pageTitle={
            <>
              Let&apos;s build an awesome project together for
              <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">your business</span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Transforming ideas into tangible success stories - together, every
          step counts towards achievement
        </PageIntro>
      </Container>

      <Container className=" mt-20">
        <FadeInStagger
          faster
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {contactData.map((contactInfo) => (
            <ContactCard
              key={contactInfo.id}
              btnText={contactInfo.btnText}
              icon={contactInfo.icon}
              link={contactInfo.link}
              subtitle={contactInfo.subtitle}
              title={contactInfo.title}
            />
          ))}
        </FadeInStagger>
      </Container>
      <Offices />
      <Faq1 />
      <Testimonial1 centered />
    </div>
  );
}
