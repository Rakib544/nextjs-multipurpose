import clsx from "clsx";
import Link from "next/link";
import { CheckIcon } from "../icons";
import { buttonVariants } from "../ui/button";

export function PlanCard2({
  name,
  price,
  description,
  href,
  pricingType = "monthly",
  features,
  featured = false,
}: {
  name: string;
  price: string;
  description: string;
  href: string;
  pricingType: "monthly" | "yearly";
  features: string[];
  featured?: boolean;
}) {
  return (
    <section
      className={clsx(
        "flex flex-col rounded-lg  px-6 sm:px-8  py-8 bg-white shadow-sm border relative",
        featured
          ? "order-first lg:order-none w-full h-full border-[1.5px] border-indigo-600"
          : "border-border/40"
      )}
    >
      {featured && (
        <span className="absolute top-2 right-2 px-4 py-2 bg-indigo-50 text-primary font-semibold text-xs tracking-wide rounded-md">
          Popular
        </span>
      )}
      <h3 className="mb-3 font-display text-base font-medium text-foreground">
        {name}
      </h3>

      <div className="flex items-end gap-x-1 text-foreground">
        <p className="font-display text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text">
          {price}
        </p>
        <span className="text-sm text-muted-foreground">/</span>
        <span className="text-sm text-muted-foreground font-medium">
          {pricingType === "monthly" ? "month" : "year"}
        </span>
      </div>
      <p className="mt-4 text-base leading-6 text-muted-foreground">
        {description}
      </p>
      <ul className="mt-6 flex flex-col gap-y-4 text-sm text-muted-foreground">
        {features.map((feature) => (
          <li key={feature} className="flex font-medium text-muted-foreground">
            <span className="h-6 w-6 rounded-full bg-indigo-50">
              <CheckIcon className="fill-indigo-600 h-6 w-6" />
            </span>
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={buttonVariants({
          className: "mt-8",
          variant: featured ? "default" : "outline",
        })}
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Get started
      </Link>
    </section>
  );
}
