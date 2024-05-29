import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CaseStudiesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
  logo: any;
  client: string;
  year: string;
  date: string;
  title: string;
  description: string;
}

export default function CaseStudiesCard({
  href,
  logo,
  client,
  year,
  date,
  title,
  description,
}: CaseStudiesCardProps) {
  return (
    <article className="relative flex w-full flex-col rounded-3xl p-6 border border-border/50 transition hover:bg-slate-50 hover:border-border/70 sm:p-8">
      <h3>
        <Link href={href}>
          <span className="absolute inset-0 rounded-3xl" />
          <Image
            src={logo}
            alt={client}
            unoptimized
            placeholder="blur"
            blurDataURL={generateBlurImageURL()}
          />
        </Link>
      </h3>
      <p className="mt-6 flex gap-x-2 text-sm text-foreground">
        <time dateTime={year} className="font-semibold">
          {date.split("-")[0]}
        </time>
        <span className="text-muted-foreground" aria-hidden="true">
          /
        </span>
        <span className="font-medium">Case study</span>
      </p>
      <p className="mt-6 font-display text-xl font-extrabold text-foreground">
        {title}
      </p>
      <p className="mt-4 text-base leading-7 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
