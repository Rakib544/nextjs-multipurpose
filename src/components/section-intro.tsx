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
    <FadeIn className={cn("max-w-xl", className)}>
      <h2 className="">
        {eyebrow && (
          <>
            <span
              className={clsx(
                "block font-display uppercase text-xs tracking-wider font-bold",
                invert ? "text-white" : "text-indigo-600"
              )}
            >
              {eyebrow}
            </span>
            <span className="sr-only"> - </span>
          </>
        )}
        <span
          className={clsx(
            "block mb-3 mt-2 [text-wrap:balance]",
            smaller
              ? "text-2xl font-extrabold"
              : "text-2xl lg:text-3xl font-extrabold",
            invert ? "text-white" : "text-indigo-950"
          )}
        >
          {title}
        </span>
      </h2>
      {children && (
        <div
          className={clsx(
            "text-[17px] leading-7",
            invert ? "text-neutral-300" : "text-gray-600"
          )}
        >
          {children}
        </div>
      )}
    </FadeIn>
  );
}
