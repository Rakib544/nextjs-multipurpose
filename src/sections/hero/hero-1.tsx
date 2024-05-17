import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { HomeIcon, TextUnderline } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Hero1() {
  return (
    <Container>
      <FadeIn className="max-w-3xl mx-auto text-center z-10 my-20">
        <span className="font-medium items-center gap-x-2 mb-4 px-6 inline-flex py-2 rounded-full bg-indigo-50 text-sm text-primary">
          <HomeIcon className="h-4 w-4" /> 55,000+ Business Trust
        </span>
        <h1 className="text-3xl font-black md:text-4.5xl/tight text-foreground">
          Revolutionize
          <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
            {" "}
            <span className="relative">Your Workflow</span> <TextUnderline />
          </span>{" "}
          with StreamlinePro
        </h1>
        <p className="mt-3 mb-5 text-lg text-foreground leading-8 max-w-xl mx-auto">
          Streamline is a simple and intuitive expense tracker that helps you
          manage your business expenses with ease and speed.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link
            href="/about-1"
            className={buttonVariants({
              size: "lg",
            })}
          >
            Get Started
          </Link>
          <Link
            href="/about-1"
            className={buttonVariants({
              variant: "outline",

              size: "lg",
            })}
          >
            Free Trail
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}
