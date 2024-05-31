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

export default function BlogCard3({
  title,
  subtitle,
  createdAt,
  thumbnail,
  className,
}: BlogCardProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-12 gap-y-4 md:gap-x-12 p-4 lg:p-10 bg-slate-50 rounded-xl hover:bg-slate-100",
        className
      )}
    >
      <div className="col-span-12 md:col-span-8 order-2 md:order-1 max-w-xl">
        <p className=" mt-4 mb-2 text-sm text-muted-foreground font-medium">
          {new Date(createdAt).toDateString()}
        </p>
        <Link href="/blog-details" aria-label="Click here to learn more">
          <h2 className="text-2xl mt-6 font-extrabold tracking-tight transition duration-300 text-foreground line-clamp-2 hover:text-primary">
            {title}
          </h2>
        </Link>
        <p className="mt-3 text-base text-muted-foreground line-clamp-2 leading-7 ">
          {subtitle}
        </p>
        <Link
          href="/blog-details"
          aria-label="Click here to learn more"
          className={buttonVariants({
            variant: "link",
            className: "!px-0 mt-4",
          })}
        >
          Read More <ArrowRight className="size-4 ml-1" />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-4 order-1 md:order-2">
        <div className="aspect-square relative rounded-2xl overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={generateBlurImageURL()}
          />
        </div>
      </div>
    </div>
  );
}
