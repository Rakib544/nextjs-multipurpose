import Link from "next/link";
import { FadeIn } from "../fade-in";
import { ArrowRight } from "../icons";
import { buttonVariants } from "../ui/button";

export default function ServiceCard2({
  icon,
  title,
  description,
  href = "",
}: {
  icon: any;
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <FadeIn className="border rounded-2xl p-8">
      <span className="flex justify-center items-center size-16 bg-indigo-50 rounded-full border border-indigo-50">
        {icon}
      </span>
      <h3 className="text-xl font-bold mt-6 text-foreground">{title}</h3>
      <p className="text-base leading-7 mt-3 text-muted-foreground ">
        {description}
      </p>
      {href && (
        <Link
          href="/service-details"
          className={buttonVariants({
            variant: "link",
            className: "!px-0 mt-4",
          })}
        >
          Learn More <ArrowRight className="size-4 ml-1" />
        </Link>
      )}
    </FadeIn>
  );
}
