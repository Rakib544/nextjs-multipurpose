import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "../icons";
import { buttonVariants } from "../ui/button";

interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  createdAt: string;
  thumbnail: string | StaticImageData;
}

export default function BlogCard1({
  title,
  subtitle,
  createdAt,
  thumbnail,
  className,
}: BlogCardProps) {
  return (
    <article className={cn("group", className)}>
      <div className="aspect-video relative overflow-hidden rounded-xl">
        <Image
          src={thumbnail}
          alt={title}
          fill
          placeholder="blur"
          blurDataURL={generateBlurImageURL()}
          className="object-cover rounded-xl motion-safe:group-hover:scale-105 transition duration-500"
        />
      </div>
      <p className=" mt-4 mb-2 text-sm text-muted-foreground font-medium">
        {new Date(createdAt).toDateString()}
      </p>

      <Link href="/blog-details">
        <h2 className="text-lg font-bold tracking-tight hover:text-primary text-foreground line-clamp-2">
          {title}
        </h2>
      </Link>
      <p className="mt-2 text-base text-muted-foreground line-clamp-2 leading-7 ">
        {subtitle}
      </p>
      <Link
        href="/blog-details"
        className={buttonVariants({ variant: "link", className: "!px-0" })}
      >
        Read More <ArrowRight className="size-4 ml-1" />
      </Link>
    </article>
  );
}
