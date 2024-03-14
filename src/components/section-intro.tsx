import { cn } from "@/lib/utils";
import clsx from "clsx";
import { FadeIn } from "./fade-in";

export function SectionIntro({
  eyebrow,
  title,
  children,
  className = "",
  smaller = false,
  invert = false,
  ...props
}: {
  eyebrow?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
  smaller?: boolean;
  invert?: boolean;
  props?: any;
}) {
  return (
    // <Container {...props} className={className}>
    <FadeIn className={cn("max-w-xl", className)}>
      <h2>
        {eyebrow && (
          <>
            <span
              className={clsx(
                "mb-6 block font-display text-base font-semibold",
                invert ? "text-white" : "text-neutral-950"
              )}
            >
              {eyebrow}
            </span>
            <span className="sr-only"> - </span>
          </>
        )}
        <span
          className={clsx(
            "block tracking-tight [text-wrap:balance]",
            smaller ? "text-2xl font-bold" : "text-4xl font-bold",
            invert ? "text-white" : "text-neutral-950"
          )}
        >
          {title}
        </span>
      </h2>
      {children && (
        <div
          className={clsx(
            "mt-6 text-lg leading-7",
            invert ? "text-neutral-300" : "text-neutral-600"
          )}
        >
          {children}
        </div>
      )}
    </FadeIn>
    // </Container>
  );
}
