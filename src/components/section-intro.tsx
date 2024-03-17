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
                "mb-2 block font-display text-sm font-medium",
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
            "block [text-wrap:balance]",
            smaller ? "text-2xl font-bold" : "text-3xl font-bold",
            invert ? "text-white" : "text-neutral-950"
          )}
        >
          {title}
        </span>
      </h2>
      {children && (
        <div
          className={clsx(
            "mt-2 text-base leading-8",
            invert ? "text-neutral-300" : "text-neutral-700"
          )}
        >
          {children}
        </div>
      )}
    </FadeIn>
    // </Container>
  );
}
