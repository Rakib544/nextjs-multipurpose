import { cn } from "@/lib/utils";
import clsx from "clsx";
import { FadeIn } from "./fade-in";

interface PageIntroProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  pageTitle: string | React.ReactNode;
  centered?: boolean;
}

export function PageIntro({
  eyebrow,
  pageTitle,
  children,
  centered = false,
  className,
}: PageIntroProps) {
  return (
    <div className={cn("mt-24", centered && "text-center", className)}>
      <FadeIn>
        <h1>
          <span className="uppercase block text-xs tracking-wider font-bold text-indigo-600 mb-3">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "text-3xl font-extrabold block md:text-4.5xl/tight text-indigo-950",
              centered && "mx-auto"
            )}
          >
            {pageTitle}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-3 mb-6 text-lg text-gray-800 leading-8 lg:max-w-2xl ",

            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </div>
  );
}
