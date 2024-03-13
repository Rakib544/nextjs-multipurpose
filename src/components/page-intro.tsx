import clsx from "clsx";
import { Container } from "./container";
import { FadeIn } from "./fade-in";
import { GridPattern } from "./grid-pattern";

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: any;
  title: string;
  children: any;
  centered?: boolean;
}) {
  return (
    <Container
      className={clsx("mt-24 sm:mt-32 lg:mt-40", centered && "text-center")}
    >
      <div className="absolute inset-0 top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern />
      </div>
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block text-3xl font-bold tracking-tighter md:text-5xl/tight",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-2 max-w-3xl text-lg leading-8 text-neutral-600",

            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}
