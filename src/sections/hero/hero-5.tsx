import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { ArrowRight } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero5() {
  return (
    <>
      <div
        className="absolute min-h-screen w-full top-0 z-[-2] bg-cover"
        style={{
          backgroundImage:
            "url(https://tailwindui.com/img/beams-basic-transparent.png)",
        }}
      ></div>
      <span className="absolute h-80 w-80 top-40 bg-gradient-to-r from-indigo-50 to-white  z-[-1] rotate-45 -left-52"></span>
      <Container className="relative overflow-x-hidden overflow-y-hidden pt-6 md:pt-16">
        <FadeIn
          variants={{
            hidden: { opacity: 0, y: 0, zIndex: -1 },
            visible: { opacity: 1, y: 0, zIndex: -1 },
          }}
          className="text-9xl -rotate-12 font-black absolute z-[-1] text-indigo-50 lg:bottom-48 -ml-10 lg:left-1/2"
        >
          Design Studio
        </FadeIn>

        <FadeInStagger
          faster
          className="grid grid-cols-12 items-center gap-y-6 lg:gap-x-10 !z-20"
        >
          <FadeIn className="col-span-12 lg:col-span-6 order-2 lg:order-1 pb-10">
            <div className="md:max-w-xl">
              <h1 className="text-3xl font-black text-foreground md:text-4.5xl/tight">
                Transform{" "}
                <span className="-ml-1.5 inline-block bg-indigo-600 px-2 text-white rotate-2">
                  Your Brand&apos;s
                </span>{" "}
                Narrative with Remarkable Design
              </h1>
              <p className="text-lg mt-4 text-muted-foreground leading-8">
                Elevate your brand&apos;s storytelling capabilities and
                captivate your target audience with our exceptional and
                innovative design solutions tailored to meet your unique needs.
              </p>
              <Link
                href=""
                className={buttonVariants({
                  size: "lg",
                  className: "mt-4 bg-indigo-600 text-white",
                })}
              >
                Explore our works{" "}
                <span className="ml-2">
                  <ArrowRight className="size-4 ml-1" />
                </span>
              </Link>
            </div>
          </FadeIn>
          <FadeIn className="col-span-12 lg:col-span-6 order-1 lg:order-2 relative z-[-1] ">
            <div className="h-10 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0"></div>
            <Image src="/design-studio.png" alt="" height={577} width={517} />
            <div className="absolute right-0 bg-white shadow-xl p-5 rounded-xl bottom-20">
              <p className="font-bold">5000+</p>
              <p className="text-sm text-muted-foreground font-medium">
                Satisfied Clients
              </p>
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  );
}
