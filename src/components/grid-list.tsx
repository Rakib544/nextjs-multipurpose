import clsx from "clsx";
import { Border } from "./border";
import { FadeIn, FadeInStagger } from "./fade-in";

export function GridList({
  className,
  children,
}: {
  className?: string;
  children?: any;
}) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3",
          className
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  );
}

export function GridListItem({
  title,
  children,
  className,
  invert = false,
}: {
  title?: string;
  children?: any;
  className?: string;
  invert?: boolean;
}) {
  return (
    <li
      className={clsx(
        "text-base",
        invert
          ? "text-neutral-300 before:bg-white after:bg-white/10"
          : "text-gray-600 before:bg-neutral-950 after:bg-neutral-100",
        className
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong
            className={clsx(
              "font-semibold",
              invert ? "text-white" : "text-indigo-950"
            )}
          >
            {title}.
          </strong>{" "}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
}
