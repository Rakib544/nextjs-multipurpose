import Link from "next/link";
import { Container } from "./container";
import { FadeIn } from "./fade-in";
import { GridPattern } from "./grid-pattern";
import { buttonVariants } from "./ui/button";

export default function CallToAction({
  title,
  subtitle,
  btnText,
  link,
}: {
  title: string;
  subtitle: string;
  btnText: string;
  link: string;
}) {
  return (
    <div className="relative isolate bg-[#F6F9FC] py-16 sm:py-28 md:py-32">
      <div className="absolute inset-0 top-0 z-[-1] text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern />
      </div>
      <Container>
        <FadeIn className="max-w-xl mx-auto text-center z-20">
          <h2 className="block tracking-tight [text-wrap:balance] text-4xl font-bold text-neutral-950 mb-2">
            {title}
          </h2>
          <p className="text-neutral-700 leading-7">{subtitle}</p>
          <Link
            href={link}
            className={buttonVariants({ size: "lg", className: "mt-5 z-10" })}
          >
            {btnText}
          </Link>
        </FadeIn>
      </Container>
    </div>
  );
}
