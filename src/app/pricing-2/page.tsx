import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { Pricing1 } from "@/components/pricing/index";
import Faq2 from "../faq-2/page";

export default function Pricing() {
  return (
    <div>
      <div
        className="absolute min-h-screen w-full top-0 z-[-2] bg-cover"
        style={{
          backgroundImage:
            "url(https://tailwindui.com/img/beams-basic-transparent.png)",
        }}
      ></div>
      <Container className="z-10">
        <FadeIn className="max-w-3xl mx-auto text-center z-10 mt-20 mb-10">
          <h1 className="text-3xl font-black md:text-4xl/tight text-neutral-950">
            Our plans scale with{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Your Business
            </span>{" "}
          </h1>
          <p className="mt-3 text-base text-neutral-600 leading-8">
            Pricing for businesses at every stage of growth.
          </p>
        </FadeIn>
        <Pricing1 />
      </Container>
      <Faq2 />
    </div>
  );
}
