import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { FadeIn } from "./fade-in";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  className,
  children,
  ...props
}: ServiceCardProps) {
  return (
    <FadeIn
      className={clsx("col-span-12 md:col-span-6 lg:col-span-3", className)}
      {...(props as any)}
    >
      <Image src={icon} alt={title} className="h-20 -ml-4" />
      <h3 className="text-lg font-bold text-neutral-950">{title}</h3>
      <p className="text-base text-neutral-700 leading-7 mt-2">{description}</p>
      {children}
    </FadeIn>
  );
}
