import ContactForm from "@/components/contact-form";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { Faq1 } from "@/sections/faq";
import Offices from "@/sections/offices";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  robots: {
    index: true,
    follow: true,
  },
};

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
              pageTitle="Let's build an awesome project together for your business"
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
                  <p className="text-xs  tracking-wider font-bold text-primary">
                    Email Address
                  </p>
                  <p className="text-base font-medium text-foreground mt-1">
                    demo@gmail.com
                  </p>
                </Link>
                <Link
                  href="tel:+8801786542643"
                  className="col-span-12 md:col-span-6 p-4 rounded-xl bg-white border-[#ECE9FF] transition duration-300 hover:border-primary border"
                >
                  <p className="text-xs  tracking-wider font-bold text-primary">
                    Phone Number
                  </p>
                  <p className="text-base font-medium text-foreground mt-1">
                    +8801786542643
                  </p>
                </Link>
                <Link
                  href="https://maps.app.goo.gl/Ri1wpbbjTwTMPpZF7"
                  target="_blank"
                  className="col-span-12 p-4 rounded-xl bg-white border-[#ECE9FF] transition duration-300 hover:border-primary border"
                >
                  <p className="text-xs  tracking-wider font-bold text-primary">
                    Address
                  </p>
                  <p className="text-base font-medium text-foreground mt-1">
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
      <Offices />
      <Faq1 />
    </div>
  );
}
