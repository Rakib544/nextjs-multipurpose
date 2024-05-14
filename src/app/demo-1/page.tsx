import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { Pricing2 } from "@/components/pricing/index";
import { SectionIntro } from "@/components/section-intro";
import UseCases from "@/components/use-case";
import WorkFlowCard from "@/components/workflow-card";
import { sassFeatures, sassWorkflows } from "@/lib/data/sass-features";
import { Hero1 } from "@/sections/hero";
import { Testimonial1 } from "@/sections/testimonial";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <div className="relative">
        <Container>
          <Image
            src="/sass-landing-banner.webp"
            alt=""
            height={1015}
            width={1205}
            className="block mx-auto mt-12 relative"
          />
        </Container>
        <div className="bg-gradient-to-t from-[#FAD0F9]/50 h-full to-transparent absolute inset-0"></div>
      </div>

      <Container className="mt-12 md:mt-20">
        <FadeIn>
          <h2 className="text-lg mb-8 text-indigo-950 font-semibold text-center">
            Trusted by many top companies
          </h2>
          <Clients />
        </FadeIn>
      </Container>
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          title="We deliver great features that helps everyday business"
          eyebrow="Features"
          className="mb-12"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem est
          deleniti, molestias maxime laudantium eos?
        </SectionIntro>
        <FadeInStagger
          faster
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {sassFeatures.map((service) => (
            <FadeIn key={service.id}>
              <Link
                href="/services/1"
                className="block border focus:ring-0 focus:bg-primary focus:outline-none focus:border-primary group rounded-xl p-6 hover:border-primary hover:bg-primary transition duration-300"
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
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
      <UseCases />
      <Container className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div>
            <div className="sticky top-6">
              <SectionIntro
                eyebrow="How Work"
                title="Get started with streamlinePro"
                className="mb-12 max-w-md"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  quia consequatur cumque, sapiente exercitationem veritatis
                  omnis facilis. Assumenda, fuga rem!
                </p>
              </SectionIntro>
            </div>
          </div>
          <FadeIn>
            {sassWorkflows.map((step, index) => (
              <WorkFlowCard key={index} id={(index + 1).toString()}>
                <h3 className="text-xl font-extrabold mb-2">{step.title}</h3>
                <p className="text-base pb-10 leading-7 text-gray-600">
                  {step.description}
                </p>
              </WorkFlowCard>
            ))}
          </FadeIn>
        </div>
      </Container>
      <Testimonial1 />
      <Container className="mt-20 md:mt-32">
        <div className="flex">
          <SectionIntro
            eyebrow="Pricing"
            title="We offer great prices for your
            business."
            className="mb-12 md:mb-0"
          >
            <p className="mt-4 text-slate-700">
              It doesn’t matter what size your business is, our software won’t
              work well for you.
            </p>
          </SectionIntro>
        </div>
        <Pricing2 />
      </Container>
    </div>
  );
}
