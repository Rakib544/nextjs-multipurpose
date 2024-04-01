import { CaseStudies } from "@/components/case-studies";
import { Clients } from "@/components/clients";
import { ContactSection } from "@/components/contact-us-section";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { Services } from "@/components/services";
import { buttonVariants } from "@/components/ui/button";
import heroImage from "@/images/hero.jpg";
import { caseStudies } from "@/lib/data/case-studies";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container className="mt-16 lg:mt-32 grid grid-cols-12 gap-x-4 items-center">
        <FadeIn className="max-w-4xl mx-auto col-span-12 text-center order-2 lg:order-1 z-10">
          <h1 className="text-3xl font-bold tracking-tighter md:text-5xl/tight">
            Experience the workflow the best frontend teams love.
          </h1>
          <p className="mt-3 text-lg text-neutral-600 leading-8">
            We are developer studio working at the intersection of design and
            technology. It’s a really busy intersection though — a lot of our
            staff have been involved in hit and runs.
          </p>
          <div className="flex gap-4 mt-7 justify-center flex-col sm:flex-row">
            <Link
              href="/about-us"
              className={buttonVariants({
                size: "lg",
              })}
            >
              About us
            </Link>
            <Link
              href="/about-us"
              className={buttonVariants({
                variant: "outline",

                size: "lg",
              })}
            >
              Our works
            </Link>
          </div>
        </FadeIn>
        <FadeIn className="col-span-12 md:col-span-6 mb-6 lg:mb-0 lg:p-4 z-10 order-1 lg:order-2 hidden">
          <Image src={heroImage} alt="" className="rounded" />
        </FadeIn>
      </Container>
      <Clients />
      <CaseStudies caseStudies={caseStudies} />
      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}
      <Services services={caseStudies} />
      <ContactSection />
    </main>
  );
}
