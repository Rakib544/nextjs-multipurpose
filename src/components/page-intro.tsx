import clsx from "clsx";
import { Container } from "./container";
import { FadeIn } from "./fade-in";

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow?: any;
  title: string;
  children?: any;
  centered?: boolean;
}) {
  return (
    <Container className={clsx("mt-24", centered && "text-center")}>
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-3 block text-3xl font-bold tracking-tight md:text-4xl/tight",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-2 max-w-3xl text-base leading-8 text-neutral-600",

            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}
