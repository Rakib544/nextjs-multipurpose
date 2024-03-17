import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
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
      <div className={clsx("", className)}>
        <Image
          alt=""
          src={image}
          className="h-72 rounded-2xl  w-full object-cover"
        />
        <div className="flex flex-col mt-3">
          <p className="font-display text-lg font-semibold tracking-wide text-neutral-950">
            {name}
          </p>
          <p className="mt-1 text-sm text-neutral-600">{role}</p>
        </div>
        {children}
      </div>
    </FadeIn>
  );
}
