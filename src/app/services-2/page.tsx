import { Container } from "@/components/container";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { sassFeatures } from "@/lib/data/sass-features";
import { Faq1 } from "@/sections/faq";
import { Process2 } from "@/sections/process";
import { Testimonial1 } from "@/sections/testimonial";
import { Metadata } from "next";
import Link from "next/link";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sassFeatures.map((service) => (
            <Link
              href="/service-details"
              key={service.id}
              className="border focus:ring-0 focus:bg-primary focus:outline-none focus:border-primary group rounded-xl p-6 hover:border-primary hover:bg-primary transition duration-300"
            >
              <span className="border inline-block px-5 py-1.5 group-hover:border-indigo-500 border-indigo-200 rounded-full transition-all duration-300 group-focus:border-indigo-500">
                {service.icon}
              </span>
              <h3 className="text-lg font-bold mt-8 group-focus:text-white group-hover:text-white transition duration-300">
                {service.title}
              </h3>
              <p className="text-base leading-7 group-focus:text-primary-foreground mt-3 group-hover:text-primary-foreground text-muted-foreground transition-all duration-300">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
      <Process2 />
      <Testimonial1 centered />
      <Faq1 />
    </div>
  );
}
