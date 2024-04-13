import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
export default function BlogCard2({
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
    <article>
      <div className="aspect-video relative">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <p className=" mt-4 mb-2 text-sm text-gray-600 font-medium">
        {new Date(createdAt).toDateString()}
      </p>

      <Link href="">
        <h2 className="text-lg font-bold tracking-tight text-indigo-950 line-clamp-2">
          {title}
        </h2>
      </Link>
      <p className="mt-2 text-base text-gray-600 line-clamp-2 leading-7 ">
        {subtitle}
      </p>
      <Link
        href=""
        className={buttonVariants({ variant: "link", className: "!px-0" })}
      >
        Read More &rarr;
      </Link>
    </article>
  );
}
