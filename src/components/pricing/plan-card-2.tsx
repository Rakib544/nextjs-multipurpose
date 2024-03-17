import clsx from "clsx";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

function CheckIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        "h-6 w-6 flex-none fill-current stroke-current",
        className
      )}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
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
        "flex flex-col rounded px-6 sm:px-8  py-8 border-t-4 bg-white shadow-slate-200 shadow-lg",
        featured
          ? "order-first lg:order-none border-primary"
          : "border-blue-600"
      )}
    >
      <h3 className="mt-5 font-display text-lg font-semibold text-neutral-700">
        {name}
      </h3>
      <p className="mt-2 text-base text-neutral-700">{description}</p>
      <div className="flex items-end gap-x-1 order-first text-neutral-950">
        <p className="font-display text-5xl font-bold tracking-tight text-neutral-950">
          {price}
        </p>
        <span>/</span>
        <span>{pricingType === "monthly" ? "month" : "year"}</span>
      </div>
      <ul className="mt-6 flex flex-col gap-y-3 text-sm text-neutral-700">
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className="text-neutral-700" />
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
