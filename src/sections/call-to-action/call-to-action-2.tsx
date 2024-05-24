import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction2() {
  return (
    <Container className="mt-20 md:mt-32">
      <div className="bg-slate-100 rounded-[40px] py-20 md:py-32 px-4">
        <SectionIntro
          eyebrow="Download now"
          title="Start using Financial.io now"
          className="sm:mx-auto sm:text-center"
        >
          Start your free trial now and see how easy it is to track, manage, and
          optimize your time.
          <FadeIn className="flex flex-col sm:flex-row gap-4 items-center justify-start sm:justify-center mt-6">
            <Link
              href=""
              className={buttonVariants({
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              Download IOS
            </Link>
            <Link
              href=""
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "w-full sm:w-auto",
              })}
            >
              Download Android
            </Link>
          </FadeIn>
        </SectionIntro>
      </div>
    </Container>
  );
}
