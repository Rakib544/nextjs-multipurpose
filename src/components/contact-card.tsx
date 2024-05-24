import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./fade-in";
import { buttonVariants } from "./ui/button";

interface ContactCardProps {
  icon: any;
  title: string;
  subtitle: string;
  link: string;
  btnText: string;
}

export default function ContactCard({
  icon,
  title,
  subtitle,
  link,
  btnText,
}: ContactCardProps) {
  return (
    <FadeIn className="border rounded-xl p-6 hover:bg-slate-50">
      <span className="border inline-block px-5 py-1.5 border-indigo-200 rounded-full mb-4">
        {icon}
      </span>
      <h2 className="text-xl font-bold text-foreground mb-1">{title}</h2>
      <p className="text-base text-muted-foreground mb-4">{subtitle}</p>
      <Link
        href={link}
        className={buttonVariants({
          variant: "link",
          className: "!px-0",
        })}
      >
        {btnText} <ArrowRight className="size-4 ml-1" />
      </Link>
    </FadeIn>
  );
}
