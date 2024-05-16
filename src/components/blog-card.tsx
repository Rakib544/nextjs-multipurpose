import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function BlogCard({
  title,
  subtitle,
  createdAt,
  thumbnail,
}: {
  title: string;
  subtitle: string;
  createdAt: string;
  thumbnail: string;
}) {
  return (
    <article className="group ">
      <div className="aspect-video relative overflow-hidden rounded-xl">
        <Image
          src={thumbnail}
          alt={title}
          fill
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
        Read More &rarr;
      </Link>
    </article>
  );
}
