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
}: {
  label: string;
  value: string;
}) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-8 ">
      <dt className="mt-2 text-base leading-7 text-neutral-600">{label}</dt>
      <dd className="font-display text-3xl font-bold text-neutral-950 sm:text-2xl">
        {value}
      </dd>
    </Border>
  );
}
