import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { FaqCard2 } from "@/components/faq-card/index";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import { Accordion } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  CallToAction,
  CallToActionHeading,
  CallToActionMenus,
  CallToActionSubHeading,
} from "@/components/ui/call-to-action";
import { faqData } from "@/lib/data/faq-data";
import { sassFeatures } from "@/lib/data/sass-features";
import Image from "next/image";
import Link from "next/link";

export default function Services1() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-6 items-center">
          <div>
            <FadeIn className="z-10 mt-20 mb-10">
              <p className="uppercase text-xs tracking-wider font-bold text-indigo-600 mb-3">
                Our Services
              </p>
              <h1 className="text-3xl font-extrabold md:text-4.5xl/tight text-indigo-950 w-full">
                Transform your digital
                <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                  {" "}
                  <span className="relative">online presence</span>{" "}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.58em] w-full z-[-1] fill-indigo-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                </span>{" "}
                with our services
              </h1>
              <p className="mt-3 mb-6 text-lg text-gray-600 leading-8">
                With a passion for technology and a commitment to excellence, we
                empower businesses to thrive in the digital landscape. We see
                more and more ads in search results and not enough care for the
                people who are actually creating content.
              </p>
            </FadeIn>
          </div>
          <div>
            <Image
              height={450}
              width={450}
              className="block w-full lg:w-auto lg:ml-auto rounded-2xl"
              src="/about-intro-1.webp"
              alt=""
            />
          </div>
        </div>
      </Container>

      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="Services"
          className="mb-12"
          title="Our Comprehensive Services"
        >
          Elevating Your Digital Experience with Tailored Design Solutions
        </SectionIntro>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sassFeatures.map((service) => (
            <Link
              href="/services/1"
              key={service.id}
              className="border focus:ring-0 focus:bg-primary focus:outline-none focus:border-primary group rounded-xl p-6 hover:border-primary hover:bg-primary transition duration-300"
            >
              <span className="border inline-block px-5 py-1.5 group-hover:border-indigo-500 border-indigo-200 rounded-full transition-all duration-300 group-focus:border-indigo-500">
                {service.icon}
              </span>
              <h3 className="text-lg font-bold mt-8 group-focus:text-white group-hover:text-white transition duration-300">
                {service.title}
              </h3>
              <p className="text-base leading-7 group-focus:text-slate-200 mt-3 group-hover:text-slate-200 text-gray-600 transition-all duration-300">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          title="The Best Package Just For You!"
          eyebrow="Pricing Plan"
          className="mb-6"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
            soluta?
          </p>
        </SectionIntro>
        <Pricing2 />
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          eyebrow="FAQ"
          className="mb-12"
          title="Frequently asked questions"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid at
            quam, doloremque maiores fuga numquam!
          </p>
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
      <CallToAction className="mt-20 mb-0 md:mt-32 md:mb-32">
        <CallToActionHeading>
          Let&apos;s maximize your online impact!
        </CallToActionHeading>
        <CallToActionSubHeading>
          More than just buzzwords for marketing concepts of SEO.
        </CallToActionSubHeading>
        <CallToActionMenus>
          <Link
            href=""
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Get In Touch
          </Link>
          <Link
            href=""
            className={buttonVariants({
              variant: "link",
              size: "lg",
              className: "!text-white",
            })}
          >
            Book a Demo &rarr;
          </Link>
        </CallToActionMenus>
      </CallToAction>
    </div>
  );
}
