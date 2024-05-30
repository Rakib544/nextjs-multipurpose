import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { ServiceCard1 } from "@/components/service-cards";
import { sassFeatures } from "@/lib/data/sass-features";
import { Faq1 } from "@/sections/faq";
import { Process2 } from "@/sections/process";
import { Testimonial1 } from "@/sections/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Services2() {
  return (
    <div>
      <Container>
        <PageIntro
          className="max-w-3xl mx-auto mt-20 mb-10"
          eyebrow="Our services"
          centered
          pageTitle={
            <>
              Explore how we customize services to fit your
              <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">business needs</span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Unlock your business&apos;s full potential with customized solutions
          tailored specifically to address your unique needs and goals
        </PageIntro>
      </Container>
      <Container className="mt-20">
        <FadeInStagger
          faster
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {sassFeatures.map((service) => (
            <FadeIn key={service.id}>
              <ServiceCard1
                description={service.description}
                icon={service.icon}
                title={service.title}
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
      <Process2 />
      <Testimonial1 centered />
      <Faq1 />
    </div>
  );
}
