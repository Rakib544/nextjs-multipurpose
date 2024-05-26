import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight, TextUnderline } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Hero6() {
  return (
    <Container>
      <FadeIn className="max-w-3xl mx-auto text-center z-10 mt-20 mb-12">
        <h1 className="text-[29px] leading-10 font-black md:text-4xl/tight text-foreground">
          A Next-Generation Multipurpose Template with Stunning Dashboards,
          Built with
          <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
            {" "}
            <span className="relative">Next.js & Tailwind</span>{" "}
            <TextUnderline />
          </span>{" "}
        </h1>
        <p className="mt-3 mb-5 text-lg text-foreground leading-8 max-w-xl mx-auto">
          Agenify is a highly SEO-optimized Next.js template, enabling you to
          build your website swiftly with easy-to-use, copy-paste blocks.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link
            href="#demos"
            className={buttonVariants({
              size: "lg",
            })}
          >
            See demo pages <ArrowRight className="size-4 ml-1" />
          </Link>
          <Link
            href="/docs"
            className={buttonVariants({
              variant: "outline",

              size: "lg",
            })}
          >
            Documentation
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}
