import { cn } from "@/lib/utils";
import { Border } from "./border";
import { FadeIn, FadeInStagger } from "./fade-in";

export function StatList({
  children,
  ...props
}: {
  children: any;
  props?: any;
}) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
        {children}
      </dl>
    </FadeInStagger>
  );
}

export function StatListItem({
  label,
  value,
  invert = false,
}: {
  label: string;
  value: string;
  invert?: boolean;
}) {
  return (
    <Border
      invert
      as={FadeIn}
      position="left"
      className="flex flex-col-reverse pl-8 "
    >
      <dt
        className={cn(
          "mt-2 text-base leading-7  font-medium",
          invert ? "text-slate-400" : "text-neutral-700"
        )}
      >
        {label}
      </dt>
      <dd
        className={cn(
          "font-display text-3xl font-extrabold  sm:text-3xl",
          invert ? "text-white" : "text-neutral-950"
        )}
      >
        {value}
      </dd>
    </Border>
  );
}
