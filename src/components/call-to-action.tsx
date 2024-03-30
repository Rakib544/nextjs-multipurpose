import Link from "next/link";
import { Container } from "./container";
import { FadeIn } from "./fade-in";
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
    <Container>
      <div className="bg-gradient-to-r from-indigo-50 to to-blue-50 rounded-3xl mb-10 py-16 sm:py-28 md:py-32">
        <FadeIn className="max-w-xl mx-auto text-center z-20">
          <h2 className="block tracking-tight [text-wrap:balance] leading-10 text-2xl lg:text-3xl font-extrabold text-neutral-950 mb-2">
            {title}
          </h2>
          <p className="text-neutral-700 leading-8 mt-4">{subtitle}</p>
          <Link
            href={link}
            className={buttonVariants({ size: "lg", className: "mt-5 z-10" })}
          >
            {btnText}
          </Link>
        </FadeIn>
      </div>
    </Container>
  );
}
