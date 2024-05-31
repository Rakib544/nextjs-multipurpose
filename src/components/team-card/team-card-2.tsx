import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FadeIn } from "../fade-in";

interface TeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: StaticImageData | string;
  name: string;
  role: string;
}

export default function TeamCard2({
  image,
  name,
  role,
  className,
  children,
}: TeamCardProps) {
  return (
    <FadeIn>
      <Link href="/team-details" className={clsx("", className)}>
        <Image
          alt=""
          src={image}
          placeholder="blur"
          blurDataURL={generateBlurImageURL()}
          className="h-72 rounded-2xl  w-full object-cover"
        />
        <div className="flex flex-col mt-3">
          <p className="font-display text-lg font-semibold tracking-wide text-foreground">
            {name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{role}</p>
        </div>
        {children}
      </Link>
    </FadeIn>
  );
}
